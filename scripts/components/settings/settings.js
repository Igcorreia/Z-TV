import { defaults } from "../../variables.js";

export const settings = {
  id: defaults.ui.settings,
  html: function () {
    return `<div id="${settings.id}" class="w-100 h-100 row bg-translucid justify-content-center align-items-center g-0 position-fixed">
              <div class="col-auto text-center">
                <div class="ui_content bg-white shadow-md p-5">
                  <div class="mb-4">
                    <div class="ff-os-b fs-lg">${defaults.data.settings.title}</div>
                  </div>
                  <div class="ui-preloader__label ff-os-r fs-xs">
                    ${defaults.data.settings.description}
                  </div>
                </div>
              </div>
            </div>`;
  },
  destroy: function () {
    setTimeout(() => {
      $("#" + settings.id).remove();
    }, 1100);
  },
  create: function () {
    $(defaults.root).prepend(settings.html());
  },
  show: function () {
    requestAnimationFrame(function () {
      settings.create();
      setTimeout(() => {
        $("#" + settings.id).addClass(
          `${defaults.ui.events}--${defaults.suffix.show}`
        );
        $("#" + settings.id).removeClass(
          `${defaults.ui.events}--${defaults.suffix.hide}`
        );
      }, 80);
    });
  },
  hide: function () {
    requestAnimationFrame(function () {
      $("#" + settings.id).addClass(
        `${defaults.ui.events}--${defaults.suffix.hide}`
      );
      $("#" + settings.id).removeClass(
        `${defaults.ui.events}--${defaults.suffix.show}`
      );
      settings.destroy();
    });
  },
};
