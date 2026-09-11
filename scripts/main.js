import { defaults } from "./variables.js";
import { general } from "./components/general/general.js";
import { preloader } from "./components/preloader/preloader.js";
import { debug } from "./components/debug/debug.js";
import { startNavigation } from "./components/navigation/navigation.js";

const dataUrl = defaults.mode == "local" ? defaults.local_bd : defaults.data_url;
const introsound = new Audio("/audio/" + defaults.introsound);

if (defaults.signature_status === true) {
  console.log(defaults.signature);
}

function loadConfig() {
  if (defaults.mode == "local") {
    return Promise.resolve({});
  }
  return import("./config.local.js")
    .then(function (module) {
      return module.config || {};
    })
    .catch(function () {
      return {};
    });
}

function fetchData(config) {
  return new Promise(function (resolve, reject) {
    var headers = {};
    if (defaults.mode != "local" && config.apikey) {
      headers["Authorization"] = "Bearer " + config.apikey;
    }
    $.ajax({
      url: dataUrl,
      headers: headers,
      cache: false,
      success: function (json) {
        resolve(json);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(new Error("Data fetch failed: " + textStatus));
      },
    });
  });
}

function startup() {
  loadConfig()
    .then(fetchData)
    .then(function (json) {
      defaults.data = json;
      general.inject();
      debug.setup();
    })
    .then(function () {
      setTimeout(function () {
        $(defaults.root)
          .imagesLoaded({ background: ".ui__img" })
          .done(function () {
            startNavigation();
            setTimeout(function () {
              introsound.play();
              preloader.hide();
            }, defaults.sections.preloader_animation_duration);
          });
      }, defaults.sections.delay_duration);
    })
    .catch(function (error) {
      console.log(error);
    });
}

window.addEventListener("DOMContentLoaded", startup);
