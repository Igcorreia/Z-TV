let data_url = '';
let introsound = new Audio('/audio/'+defaults.introsound);

if (defaults.signature_status === true) {
  console.log(defaults.signature);
}

if (defaults.mode == "local") {
  data_url = defaults.local_bd;
} else {
  data_url = defaults.data_url;
}

window.init = {
  utils: {
    debug: _debug(),
    brand: _brand(),
    settings: _settings(),
  },
  ui: {
    general: _general(),
    preloader: _preloader(),
    featured: _featured(),
    scrollers: _scroller(),
    menu: _menu(),
  },
  interactivity: function () {
    _navigation();
  },
  loadconfig: function () {
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
  },
  fetchdata: function (config) {
    return new Promise(function (resolve, reject) {
      var headers = {};
      if (defaults.mode != "local" && config.apikey) {
        headers["Authorization"] = "Bearer " + config.apikey;
      }
      $.ajax({
        url: data_url,
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
  },
  startup: function () {
    try {
      init
        .loadconfig()
        .then(init.fetchdata)
        .then(function (json) {
          defaults.data = json;
        })
        .then(function () {
          init.ui.general.inject();
        })
        .then(function () {
          setTimeout(function () {
            $(root)
              .imagesLoaded({ background: ".ui__img" })
              .always(function () {})
              .done(function () {
                init.interactivity();
                setTimeout(function () {
                  introsound.play();
                  init.ui.preloader.hide();
                }, defaults.sections.preloader_animation_duration);
              });
          }, defaults.sections.delay_duration);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
window.addEventListener("DOMContentLoaded", function () {
  init.startup();
});
