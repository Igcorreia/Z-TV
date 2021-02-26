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
  },
  ui: {
    general: _general(),
    preloader: _preloader(),
    featured: _featured(),
    scrollers: _scroller(),
    menu: _menu(),
    update: {
      show: function (sel) {
        requestAnimationFrame(function () {
          $(sel).addClass(`${defaults.ui.events}--${defaults.suffix.show}`);
          $(sel).removeClass(`${defaults.ui.events}--${defaults.suffix.hide}`);
        });
      },
      hide: function (sel) {
        requestAnimationFrame(function () {
          $(sel).addClass(defaults.ui.events + "--" + defaults.suffix.hide);
          $(sel).removeClass(defaults.ui.events + "--" + defaults.suffix.show);
        });
      },
      activate: function (sel) {
        requestAnimationFrame(function () {
          $(sel).addClass(defaults.ui.events + "--" + defaults.suffix.active);
        });
      },
      deactivate: function (sel) {
        requestAnimationFrame(function () {
          $(sel).removeClass(
            `${defaults.ui.events}--${defaults.suffix.active}`
          );
        });
      },
      animate: function (sel) {
        requestAnimationFrame(function () {
          $(sel)
            .addClass(
              `${defaults.ui.events}--${defaults.suffix.prepare_animate}`
            )
            .delay(1000)
            .addClass(`${defaults.ui.events}--${defaults.suffix.animate}`);
        });
      },
    },
  },
  interactivity: function () {
    // _featuredChange();
    // _menuChange();
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
          $(root)
            .imagesLoaded({ background: ".ui__img" })
            .always(function (instance) {})
            .done(function (instance) {
              init.interactivity();
              setTimeout(function () {
                defaults.introsound.play();
                init.ui.preloader.hide();
              }, defaults.sections.preloader_aimation_duration);
            });
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

// function _menuChange(id, path) {
//   if ((id == undefined || id == null) && (path == undefined || path == null)) {
//     init.ui.menu.change(
//       `#${defaults.ui.menu}--${defaults.sections.menu_default}`
//     );
//   }
// }

// function _featuredChange(content) {
//   init.ui.featured.animate(`#${defaults.ui.featured}`);
// }
