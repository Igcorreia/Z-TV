window.defaults = {
  debug: {
    active: false,
    auto_refresh: true,
    key_press: true,
    os_details: true,
  },
  mode: "prod",
  root: "#root",
  show_suffix: "show",
  hide_suffix: "hide",
  data: null,
  data_url: "https://next.json-generator.com/api/json/get/V13KQEB-c",
  menu: "",
  preloader: 5000,
  homepage: "",
  items: "",
  collections: "",
  ui: {
    debug: "ui__debug",
    preloader: "ui__preloader",
    navigation: "ui__navigation",
    brand: "ui__brand",
    menu: "ui__menu",
  },
  os: null,
  introsound: new Audio("/src/audio/bell.wav"),
};

console.log("-- APP LOADED --");

window.init = {
  utils: {
    debug: {
      id: defaults.ui.debug,
      html: function () {
        if (defaults.debug.active === true) {
          return (
            `<div id="` +
            init.utils.debug.id +
            `" class="position-fixed text-white"></div>
            <div id="` +
            init.utils.debug.id +
            `__horazion" class="position-fixed"></div>
        </div>
        `
          );
        } else {
          return "";
        }
      },
      show: function () {
        init.ui.update.show(this.id);
      },
      hide: function () {
        init.ui.update.hide(this.id);
      },
    },
    nav: function () {},
    brand: {
      id: defaults.ui.brand,
      html: function () {
        return (
          `<div id="` +
          init.utils.brand.id +
          `" class="position-fixed bottom-0 end-0 pb-5 pe-5 pt-5 ps-5 ">
            <div class="row g-0">
                <div class="col">
                 ` +
          defaults.data.branding.logo.svg +
          `
                </div>
            </div>
        </div>`
        );
      },
      show: function () {
        init.ui.update.show(this.id);
      },
      hide: function () {
        init.ui.update.hide(this.id);
      },
    },
  },
  ui: {
    general: {
      html: function () {
        return (
          init.ui.preloader.html() +
          `
            <div id="ui" class="row h-100 w-100 g-0 no-gutters align-items-center justify-content-center position-fixed top-0 start-0">
                <div id="ui__left" class="col-auto">` +
          init.ui.menu.html() +
          `</div>
                <div id="ui__rigth" class="col h-100"></div>
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
    preloader: {
      id: defaults.ui.preloader,
      html: function () {
        return (
          `<div id="` +
          init.ui.preloader.id +
          `" class="w-100 h-100 row bg-white justify-content-center align-items-center g-0 position-fixed ui__preloader--show">
            <div class="col-auto text-center">
              <div class="mb-4">
          ` +
          defaults.data.branding.logo.svg +
          `
            </div>  
            <div class="ui-preloader__label ff-os-b fs-sm">
              <p>
                Welcome to a <i class="ff-os-ebi text-blue-2">new</i> immersive digital experience...
              </p>
            </div>
            </div>
          </div>`
        );
      },
      show: function () {
        init.ui.update.show(this.id);
      },
      hide: function () {
        init.ui.update.hide(this.id);
      },
    },
    detail: {
      inject: function () {},
      open: function () {},
      close: function () {},
      destroy: function () {},
    },
    menu: {
      id: defaults.ui.menu,
      html: function () {
        for (i = 0; i < defaults.data.menu.length; i++) {
          defaults.menu +=
            `
                <div class="col">
                    <a id="#` +
            defaults.ui.menu +
            `--` +
            defaults.data.menu[i].name +
            `" class="btn mb-32" href="` +
            defaults.data.menu[i].path +
            `">` +
            defaults.data.menu[i].svg +
            `<div class="menu-bar ms-auto me-auto"></div>
                    </a>
                </div>
            `;
        }
        defaults.menu =
          `<nav id="ui-left__menu">
            <div class="row flex-column g-0 no-gutters mx-5 text-center">` +
          defaults.menu +
          `</div>
          </nav>`;

        return defaults.menu;
      },
    },
    hscroller: {
      inject: function () {},
      open: function () {},
      close: function () {},
      destroy: function () {},
    },
    update: {
      show: function (id) {
        requestAnimationFrame(function () {
          $("#" + id).addClass(id + "--" + defaults.show_suffix);
          $("#" + id).removeClass(id + "--" + defaults.hide_suffix);
          $(defaults.root).addClass("elm--" + id + "--" + defaults.show_suffix);
          $(defaults.root).removeClass(
            "elm--" + id + "--" + defaults.hide_suffix
          );
        });
      },
      hide: function (id) {
        requestAnimationFrame(function () {
          $("#" + id).addClass(id + "--" + defaults.hide_suffix);
          $("#" + id).removeClass(id + "--" + defaults.show_suffix);
          $(defaults.root).addClass("elm--" + id + "--" + defaults.hide_suffix);
          $(defaults.root).removeClass(
            "elm--" + id + "--" + defaults.show_suffix
          );
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
    console.log("-- STARTUP --");

    try {
      init.fetchdata
        .then(function (json) {
          defaults.data = json;
        })
        .then(function (json) {
          init.ui.general.inject();
        })
        .then(function (json) {
          init.interactivity();
        })
        .then(function (json) {
          setTimeout(function () {
            defaults.introsound.play();
            init.ui.preloader.hide();
          }, defaults.preloader);
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
    defaults.os = (function () {
      //rendering engines
      var engine = {
        ie: 0,
        edge: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,

        //complete version
        ver: null,
      };

      //browsers
      var browser = {
        //browsers
        ie: 0,
        edge: 0,
        firefox: 0,
        safari: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        safari: 0,

        //specific version
        ver: null,
      };

      //platform/device/OS
      var system = {
        win: false,
        mac: false,
        x11: false,

        //mobile devices
        iphone: false,
        ipod: false,
        nokiaN: false,
        winMobile: false,
        macMobile: false,

        //game systems
        wii: false,
        ps: false,
      };

      //detect rendering engines/browsers
      var ua = navigator.userAgent;
      if (window.opera) {
        engine.ver = browser.ver = window.opera.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
      } else if (/Edge\/([^;]+)/.test(ua)) {
        // IE11
        engine.ver = browser.ver = RegExp["$1"];
        engine.edge = browser.edge = parseFloat(engine.ver);
      } else if (/AppleWebKit\/(\S+)/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);

        //figure out if it's Chrome or Safari
        if (/Chrome\/(\S+)/.test(ua)) {
          browser.ver = RegExp["$1"];
          browser.chrome = parseFloat(browser.ver);
        } else if (/Version\/(\S+)/.test(ua)) {
          browser.ver = RegExp["$1"];
          browser.safari = parseFloat(browser.ver);
        } else {
          //approximate version
          var safariVersion = 1;
          if (engine.webkit < 100) {
            safariVersion = 1;
          } else if (engine.webkit < 312) {
            safariVersion = 1.2;
          } else if (engine.webkit < 412) {
            safariVersion = 1.3;
          } else {
            safariVersion = 2;
          }

          browser.safari = browser.ver = safariVersion;
        }
      } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
        engine.ver = browser.ver = RegExp["$1"];
        engine.khtml = browser.konq = parseFloat(engine.ver);
      } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(engine.ver);

        //determine if it's Firefox
        if (/Firefox\/(\S+)/.test(ua)) {
          browser.ver = RegExp["$1"];
          browser.firefox = parseFloat(browser.ver);
        }
      } else if (/MSIE ([^;]+)/.test(ua)) {
        // IE <= 10
        engine.ver = browser.ver = RegExp["$1"];
        engine.ie = browser.ie = parseFloat(engine.ver);
      } else if (/Trident\/([^;]+)/.test(ua)) {
        // IE11
        engine.ver = RegExp["$1"];
        browser.ver = parseFloat(ua.split("rv:")[1]);
        engine.ie = parseFloat(browser.ver);
      }

      //detect browsers
      browser.ie = engine.ie;
      browser.opera = engine.opera;

      //detect platform
      var p = navigator.platform;
      system.win = p.indexOf("Win") == 0;
      system.mac = p.indexOf("Mac") == 0;
      system.x11 = p == "X11" || p.indexOf("Linux") == 0;

      //detect windows operating systems
      if (system.win) {
        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
          if (RegExp["$1"] == "NT") {
            switch (RegExp["$2"]) {
              case "5.0":
                system.win = "2000";
                break;
              case "5.1":
                system.win = "XP";
                break;
              case "6.0":
                system.win = "Vista";
                break;
              default:
                system.win = "NT";
                break;
            }
          } else if (RegExp["$1"] == "9x") {
            system.win = "ME";
          } else {
            system.win = RegExp["$1"];
          }
        }
      }

      //mobile devices
      system.iphone = ua.indexOf("iPhone") > -1;
      system.ipod = ua.indexOf("iPod") > -1;
      system.nokiaN = ua.indexOf("NokiaN") > -1;
      system.winMobile = system.win == "CE";
      system.macMobile = system.iphone || system.ipod;

      //gaming systems
      system.wii = ua.indexOf("Wii") > -1;
      system.ps = /playstation/i.test(ua);

      //return it
      return {
        engine: engine,
        browser: browser,
        system: system,
      };
    })();

    $("#" + defaults.ui.debug).append(
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
      $("#" + defaults.ui.debug).append(
        "<div> Key Pressed Codd: " + event.which + "</div>"
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

console.log("-- APP END --");
