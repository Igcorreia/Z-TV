if (defaults.signature_status == true) {
  console.log(defaults.signature);
}

if (defaults.mode == "local") {
  data_url = "/src/data/data.json";
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
      cache: false,
      success: function (json) {
        resolve(json);
      },
    });
  }),
  startup: function () {
    try {
      init.fetchdata
        .then(function (json) {
          defaults.data = json;
        })
        .then(function (json) {
          init.ui.general.inject();
        })
        .then(function (json) {
          setTimeout(function () {
            $(root)
              .imagesLoaded({ background: ".ui__img" })
              .always(function (instance) {})
              .done(function (instance) {
                init.interactivity();
                setTimeout(function () {
                  defaults.introsound.play();
                  init.ui.preloader.hide();
                  init.ui.featured.animate(`#${defaults.ui.featured}`);
                }, defaults.sections.preloader_aimation_duration);
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
