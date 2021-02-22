console.log(defaults.signature);

window.init = {
  utils: {
    debug: _debug(),
    brand: _brand(),
  },
  ui: {
    general: {
      html: function () {
        return (
          init.ui.preloader.html() +
          `
            <div id="ui" class="row h-100 w-100 g-0 no-gutters align-items-center justify-content-center position-fixed top-0 start-0" g-0>
                <div id="ui__left" class="col-auto">` +
          init.ui.menu.html() +
          `</div>
                <div id="ui__rigth" class="col h-100">` +
          init.ui.featured.html() +
          init.ui.scrollers.html() +
          `</div>
            </div>
            ` +
          init.utils.brand.html() +
          init.utils.debug.html()
        );
      },
      inject: function () {
        $(root).append(this.html);
      },
    },
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
    if (defaults.debug.active === true) {
      _osDetails();
      _osKeyPress();
      _osAutoRefresh();
    }
    _featuredChange();
    _menuChange();
  },
  fetchdata: new Promise(function (resolve, reject) {
    $.ajax({
      url: defaults.data_url,
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

function _osDetails() {
  if (defaults.debug.os_details === true) {
    defaults.os = window._os();

    $(`#${defaults.ui.debug}`).append(
      JSON.stringify(
        {
          browser: defaults.os.browser,
          engine: defaults.os.engine,
          system: defaults.os.system,
        },
        null,
        2
      )
    );
  }
}

function _osKeyPress() {
  if (defaults.debug.key_press === true) {
    document.addEventListener("keydown", function (event) {
      const newLocal = event.which;
      $("#" + defaults.ui.debug).append(
        `<div> Key Pressed Codd: ${newLocal}</div>`
      );
    });
  }
}

function _osAutoRefresh() {
  if (defaults.debug.auto_refresh === true) {
    if (defaults.os.system.x11 == true) {
      setInterval(function () {
        window.location = window.location;
      }, 5000);
    }
  }
}

function _menuChange(id, path) {
  if ((id == undefined || id == null) && (path == undefined || path == null)) {
    init.ui.menu.change(
      `#${defaults.ui.menu}--${defaults.sections.menu_default}`
    );
  }
}

function _featuredChange(content) {
  init.ui.featured.animate(`#${defaults.ui.featured}`);
}
