console.log(defaults.signature);

window.init = {
  utils: {
    debug: {
      id: defaults.ui.debug,
      html: function () {
        if (defaults.debug.active === true) {
          return `<div id="${init.utils.debug.id}" class="position-fixed text-white"></div>
            <div id="${init.utils.debug.id}__horazion" class="position-fixed"></div>
        </div>
        `;
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
          `" class="position-fixed brand bottom-0 end-0 ">
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
    preloader: {
      id: defaults.ui.preloader,
      html: function () {
        if (defaults.sections.preloader_status == true) {
          return (
            `<div id="` +
            init.ui.preloader.id +
            `" class="w-100 h-100 row bg-white justify-content-center align-items-center g-0 position-fixed ` +
            defaults.ui.events +
            "--" +
            defaults.suffix.show +
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
        } else {
          return (
            `<div id="` +
            init.ui.preloader.id +
            `" class="d-none` +
            defaults.ui.events +
            "--" +
            defaults.suffix.hide +
            `"></div>
          `
          );
        }
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

        defaults.sections.featured =
          `<div id="` +
          init.ui.featured.id +
          `" class="row g-0 h-80 w-100 position-relative">
            <div class="col w-100 h-100">
              <div class="` +
          init.ui.featured.id +
          `--front w-100 h-100 position-relative  overflow-hidden">
                <div class="` +
          init.ui.featured.id +
          `--front__section h-100 position-relative">
                  <div id="` +
          init.ui.featured.id +
          `--front__image" class="position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('` +
          defaults.data.ui.home.sections.featured.content.image +
          `')"></div>
          
<div id="` +
          init.ui.featured.id +
          `--front__mask" class="position-absolute w-100 h-100">
            <div id="` +
          init.ui.featured.id +
          `--front__mask--left"></div>
            <div id="` +
          init.ui.featured.id +
          `--front__mask--bottom"></div>
          </div>

          <div class="row h-60 w-100 justify-content-start align-items-center g-0">
    <div class="col-auto">

                  <div id="` +
          init.ui.featured.id +
          `--front__content" class="position-relative">
                    <div class="row flex-column g-0">
                      <div class="col">
                        <div class="row justify-content-center align-items-center g-0 mb-3">
                            <div class="col-auto">` +
          defaults.data.ui.home.sections.featured.content.icon +
          `</div><div class="col"> <div class="text-blue-2 ff-os-b fs-lg mx-3">` +
          defaults.data.ui.home.sections.featured.content.label +
          `</div></div>
                        </div>
                        <div class="fs-xxl text-block-1 ff-os-b m-0 p-0 mb-3 text-sd-md">` +
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
 </div>
              </div>
            </div>
          </div>
        `;
        return defaults.sections.featured;
      },
      animate: function (id) {
        init.ui.update.animate(id);
      },
    },
    scrollers: {
      id: defaults.ui.scrollers,
      html: function () {
        const scrollers = defaults.data.ui.home.sections.main.content;

        for (i = 0; i < scrollers.length; i++) {
          defaults.sections.scrollers += _uiScroller(
            scrollers[i].type,
            scrollers[i].category,
            scrollers[i].index
          );
        }

        return (
          `
            <div class="row h-50 g-0 justify-content-start align-items-start position-fixed bottom-0 w-100">
                <div class="col">
                  <div class="">` +
          defaults.sections.scrollers +
          `</div>
                </div>
            </div>
        `
        );
      },
    },
    menu: {
      id: defaults.ui.menu,
      html: function () {
        for (i = 0; i < defaults.data.menu.length; i++) {
          defaults.sections.menu +=
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
        defaults.sections.menu = `<div id="ui-left__menu">
            <div class="row flex-column g-0 no-gutters mx-5 text-center">${defaults.sections.menu}</div>
          </div>`;

        return defaults.sections.menu;
      },
      change: function (id) {
        init.ui.update.deactivate(`.${defaults.ui.menu}--menuitem`);
        init.ui.update.activate(id);
      },
    },
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

function _uiScroller(type, category, index) {
  const scroller = defaults.data.content[category][index];
  const content = scroller.content;
  const format = scroller.format;
  const title = scroller.title;

  html = "";
  var items_html = "";
  if (type == "landscape") {
    scrollerH = defaults.sections.scrollers_settings.landscape.height;
    scrollerW = defaults.sections.scrollers_settings.landscape.width;
    scollerG = defaults.sections.scrollers_settings.landscape.gutter;
  } else if (type == "button") {
    scrollerH = defaults.sections.scrollers_settings.buttons.height;
    scrollerW = defaults.sections.scrollers_settings.buttons.width;
    scollerG = defaults.sections.scrollers_settings.buttons.gutter;
  } else if (type == "portrait") {
    scrollerH = defaults.sections.scrollers_settings.portrait.height;
    scrollerW = defaults.sections.scrollers_settings.portrait.width;
    scollerG = defaults.sections.scrollers_settings.portrait.gutter;
  }

  title_html = `
      <div class="row m-0 p-0 g-0">
        <div class="col">
          <div class="ff-os-b fs-md mb-2">${title}</div>
        </div>
      </div>
  `;

  console.log(content);

  if (type == "landscape") {
    for (let i = 0; i < content.length; i++) {
      item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div class="scroller--items__item scroller--items__item--${i} bg-white position-absolute" style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
        <div class="row g-0 top--section h-70">
          <div class="col">
              <div class="row h-100 thumb g-0">
                <div class="col position-relative">
                  <div class="thumbnail position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('${content[i].thumb}')"></div>
                    <div class="dark-mask position-absolute h-50 w-100 bottom-0 ui__img"></div>
                      <div class="row g-0 position-absolute w-100 bottom-0">
                        <div class="col title">
                          <div class="text-white ff-os-b fs-md ms-3 mb-3 text-truncate">
                            ${content[i].title}
                          </div>
                        </div>
                        <div class="col-auto icon">
                          <div class="text-white me-3 pb-3 active-icon position-relative">
                            ${content[i].icon}
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="row g-0 bottom--section h-30 align-items-center">
            <div class="col-auto w-100">
              <div class="row flex-column g-0">
                <div class="col">
                  <div class="ms-3 text-black-1 text-uppercase ff-os-b fs-xxs text-truncate">
                    ${content[i].subtitle}
                  </div>
                </div>

                <div class="col">
                  <div class="ms-3 text-black-1 ff-os-r fs-xxs mt-1 text-truncate">
                    ${content[i].description}
                  </div>
                </div>

                <div class="col">
                  <div class="ms-3 text-grey-3 text-uppercase ff-os-b fs-xxs mt-1 text-truncate">
                    ${content[i].note}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
    }
  } else if (type == "button") {
    for (let i = 0; i < content.length; i++) {
      item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div class="scroller--items__item scroller--items__item--${i} bg-white position-absolute" style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
        <div class="row g-0 top--section h-100 justify-content-center align-items-center text-center">
          <div class="col">
            <div class="ff-os-b fs-lg text-blue-2 text-uppercase">${content[i].title}</div>    
          </div>
        </div>
      </div>
    `;
    }
  } else if (type == "portrait") {
    for (let i = 0; i < content.length; i++) {
      item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div class="scroller--items__item scroller--items__item--${i} bg-white position-absolute" style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
        <div class="row g-0 top--section h-90">
          <div class="col">
              <div class="row h-100 thumb g-0">
                <div class="col position-relative">
                  <div class="thumbnail position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('${content[i].thumb}')"></div>
                    <div class="dark-mask position-absolute h-50 w-100 bottom-0 ui__img"></div>
                      <div class="row g-0 position-absolute w-100 bottom-0">
                        <div class="col-9 title">
                          <div class="text-white ff-os-b fs-md ms-3 mb-3 text-truncate">
                            ${content[i].title}
                          </div>
                        </div>
                        <div class="col-3 icon text-center">
                          <div class="text-white me-3 pb-3 active-icon position-relative">
                            ${content[i].icon}
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="row g-0 bottom--section h-10 align-items-center">
            <div class="col-auto w-100">
              <div class="row flex-column g-0">
                <div class="col">
                  <div class="ms-3 text-black-1 text-uppercase ff-os-b fs-xxs text-truncate">
                    ${content[i].subtitle}
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
    `;
    }
  }

  scroller_html = `
    <div class="row g-0 mb-4">
      <div class="col">
        <div class="scroller ${type}" style="height:${scrollerH}px;">
          <div class="scroller--items">
             ${items_html}
          </div>
        </div>
      </div>
    </div>
  `;

  html = title_html + scroller_html;
  return html;
}
