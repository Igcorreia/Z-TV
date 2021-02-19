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
  active_suffix: "active",
  prepare_animate_suffix: "prepare-animation",
  animate_suffix: "animate",
  data: null,
  data_url: "https://next.json-generator.com/api/json/get/V13KQEB-c",
  menu: "",
  menu_default: "home",
  featured: "",
  preloader: 1250,
  homepage: "",
  items: "",
  collections: "",
  ui: {
    debug: "ui__debug",
    preloader: "ui__preloader",
    navigation: "ui__navigation",
    brand: "ui__brand",
    menu: "ui__menu",
    events: "ui__event",
    featured: "ui__featured",
  },
  os: null,
  introsound: new Audio("/src/audio/bell.wav"),
};
console.log(_personalSignature());
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
            <div id="ui" class="row h-100 w-100 g-0 no-gutters align-items-center justify-content-center position-fixed top-0 start-0" g-0>
                <div id="ui__left" class="col-auto">` +
          init.ui.menu.html() +
          `</div>
                <div id="ui__rigth" class="col h-100">` +
          init.ui.featured.html() +
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
    preloader: {
      id: defaults.ui.preloader,
      html: function () {
        return (
          `<div id="` +
          init.ui.preloader.id +
          `" class="w-100 h-100 row bg-white justify-content-center align-items-center g-0 position-fixed ` +
          defaults.ui.events +
          "--" +
          defaults.show_suffix +
          `">
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
        init.ui.update.show("#" + this.id);
      },
      hide: function () {
        init.ui.update.hide("#" + this.id);
      },
    },
    featured: {
      id: defaults.ui.featured,
      html: function (content) {
        _buttons_html = function () {
          buttons = "";
          for (
            i = 0;
            i < defaults.data.ui.home.sections.featured.content.buttons.length;
            i++
          ) {
            buttons +=
              `
              <div class="col-auto">
                <div class="btn me-3 ` +
              //defaults.data.ui.home.sections.featured.content.buttons[i].style +
              ` ff-os-b fs-lg">
                <i class="fas fa-` +
              defaults.data.ui.home.sections.featured.content.buttons[i].icon +
              `"></i>
                <span class=""> ` +
              defaults.data.ui.home.sections.featured.content.buttons[i].title +
              `</span>
              </div></div>
            `;
          }
          return buttons;
        };

        defaults.featured =
          `<div id="` +
          init.ui.featured.id +
          `" class="row g-0 h-100 w-100 position-relative">
            <div class="col w-100 h-100">
              <div class="` +
          init.ui.featured.id +
          `--front w-100 h-100 ">
                <div class="` +
          init.ui.featured.id +
          `--front__section">
                  <div id="` +
          init.ui.featured.id +
          `--front__image" class="position-fixed ui__img img-bg-fit img-bg-fit w-100 h-75" style="background-image:url('` +
          defaults.data.ui.home.sections.featured.content.image +
          `')"></div>
                  <div id="` +
          init.ui.featured.id +
          `--front__content" class="position-relative">
                    <div class="row flex-column g-0 pt-5">
                      <div class="col">
                        <div class="row justify-content-center align-items-center mt-5">
                            <div class="col-auto">` +
          defaults.data.ui.home.sections.featured.content.icon +
          `</div><div class="col"> <span class="text-blue-2 ff-os-b fs-lg">` +
          defaults.data.ui.home.sections.featured.content.label +
          `</span></div>
                        </div>
                        <div class="fs-xxl text-block-1 ff-os-b m-0 p-0 mb-2 text-sd-md">` +
          defaults.data.ui.home.sections.featured.content.title +
          `</div>
                        <div class="fs-xl text-block-1 m-0 p-0 mb-3 text-sd-md">` +
          defaults.data.ui.home.sections.featured.content.subtitle +
          `</div>
                        <div class="fs-lg text-block-1 m-0 p-0 mb-3 text-sd-md">` +
          defaults.data.ui.home.sections.featured.content.description +
          `</div>
                        <div class="fs-md text-block-1 ff-os-sb m-0 p-0 mb-3 text-grey-4 text-sd-md">` +
          defaults.data.ui.home.sections.featured.content.note +
          `</div>
                      </div>
                      <div class="row justify-content-start align-items-center g-0">
                      ` +
          _buttons_html() +
          `
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="` +
          init.ui.featured.id +
          `--back w-100 h-100 "></div>
            </div>
          </div>
        `;
        return defaults.featured;
      },
      animate: function (id) {
        init.ui.update.animate(id);
      },
    },
    menu: {
      id: defaults.ui.menu,
      html: function () {
        for (i = 0; i < defaults.data.menu.length; i++) {
          defaults.menu +=
            '<div class="col"><a id="' +
            defaults.ui.menu +
            "--" +
            defaults.data.menu[i].name +
            `" class="` +
            defaults.ui.menu +
            `--menuitem btn btn-link mb-32" href="` +
            defaults.data.menu[i].path +
            `">` +
            defaults.data.menu[i].svg +
            `<div id="` +
            defaults.ui.menu +
            `--bar" class="menu-bar ms-auto me-auto"></div>
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
      change: function (id) {
        init.ui.update.deactivate("." + defaults.ui.menu + "--menuitem");
        init.ui.update.activate(id);
      },
    },
    update: {
      show: function (sel) {
        requestAnimationFrame(function () {
          $(sel).addClass(defaults.ui.events + "--" + defaults.show_suffix);
          $(sel).removeClass(defaults.ui.events + "--" + defaults.hide_suffix);
        });
      },
      hide: function (sel) {
        requestAnimationFrame(function () {
          $(sel).addClass(defaults.ui.events + "--" + defaults.hide_suffix);
          $(sel).removeClass(defaults.ui.events + "--" + defaults.show_suffix);
        });
      },
      activate: function (sel) {
        requestAnimationFrame(function () {
          $(sel).addClass(defaults.ui.events + "--" + defaults.active_suffix);
        });
      },
      deactivate: function (sel) {
        requestAnimationFrame(function () {
          $(sel).removeClass(
            defaults.ui.events + "--" + defaults.active_suffix
          );
        });
      },
      animate: function (sel) {
        requestAnimationFrame(function () {
          $(sel)
            .addClass(
              defaults.ui.events + "--" + defaults.prepare_animate_suffix
            )
            .delay(1000)
            .addClass(defaults.ui.events + "--" + defaults.animate_suffix);
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
          $(root)
            .imagesLoaded({ background: ".ui__img" })
            .always(function (instance) {})
            .done(function (instance) {
              init.interactivity();
              setTimeout(function () {
                defaults.introsound.play();
                init.ui.preloader.hide();
              }, defaults.preloader);
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

function _menuChange(id, path) {
  if ((id == undefined || id == null) && (path == undefined || path == null)) {
    init.ui.menu.change("#" + defaults.ui.menu + "--" + defaults.menu_default);
  }
}

function _featuredChange(content) {
  init.ui.featured.animate("#" + defaults.ui.featured);
}

function _personalSignature() {
  return `
/***********************************************************
 ***********************************************************
 ** 
 **  👋 Hi there, I am Ignacio, welcome.                     
 ** 
 **  Thanks for visiting, please leave a like or follow me.
 ** 
 **  You may find me @igcorreia on 🐦, 😏📘, 👾
 ** 
 **  --> If you are hiring, I am looking for a fulltime job
 **  --> I am from Europe (Portugal)
 **  --> UI, UX, PRODUCT DESIGN
 **  --> ignacio . r . correia (at) gmail . com
 ** 
 ***********************************************************
 ************************************************************/
`;
}
console.log("-- APP END --");
