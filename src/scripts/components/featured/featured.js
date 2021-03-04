window._featured = function () {
  var func = {
    id: defaults.ui.featured,
    html: function (content) {
      _buttons_html = function () {
        buttons = "";
        for (
          i = 0;
          i < defaults.data.ui.home.sections.featured.content.buttons.length;
          i++
        ) {
          defaults.interactive.featured.push({
            id: `${init.ui.featured.id}__button--${i}`,
            // active: false,
            type: "featured",
          });

          buttons +=
            `
              <div class="col-auto">
                <div id="${init.ui.featured.id}__button--${i}" class="btn ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} me-3 ff-os-b fs-lg"
                data-interactive-type="featured" data-interactive-item-index="${i}"
                >
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
  };

  return func;
};
