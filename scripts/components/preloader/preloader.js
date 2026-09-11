import { defaults } from "../../variables.js";

export const preloader = {
  id: defaults.ui.preloader,
  html: function () {
    if (defaults.sections.preloader_status == true) {
      return (
        `<div id="${preloader.id}" class="w-100 h-100 row bg-white justify-content-center align-items-center g-0 position-fixed ${defaults.ui.events}--${defaults.suffix.show}">
          <div class="col-auto text-center">
            <div class="mb-4">
                ${defaults.data.branding.logo.svg}
            </div>
            <div class="ui-preloader__label ff-os-b fs-sm">
              ${defaults.data.preloader.content}
            </div>
          </div>
        </div>`
      );
    } else {
      return (
        `<div id="${preloader.id}" class="d-none ${defaults.ui.events}--${defaults.suffix.hide}"></div>`
      );
    }
  },
  destroy: function () {
    setTimeout(() => {
      $("#" + preloader.id).remove();
    }, 1100);
  },
  show: function () {
    requestAnimationFrame(function () {
      $("#" + preloader.id).addClass(
        `${defaults.ui.events}--${defaults.suffix.show}`
      );
      $("#" + preloader.id).removeClass(
        `${defaults.ui.events}--${defaults.suffix.hide}`
      );
    });
  },
  hide: function () {
    requestAnimationFrame(function () {
      $("#" + preloader.id).addClass(
        `${defaults.ui.events}--${defaults.suffix.hide}`
      );
      $("#" + preloader.id).removeClass(
        `${defaults.ui.events}--${defaults.suffix.show}`
      );
      preloader.destroy();
    });
  },
};
