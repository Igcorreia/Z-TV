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
  fetchdata: new Promise(function (resolve, reject) {
    $.ajax({
      url: data_url,
      headers: {
        'Authorization':'Bearer ' + defaults.apikey,
      },
      cache: false,
      success: function (json) {
        resolve(json);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(new Error('Data fetch failed: ' + textStatus));
      },
    });
  }),
  startup: function () {
    try {
      init.fetchdata
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
