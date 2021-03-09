window._preloader = function () {
  var func = {
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
              <p class="mt-5">Use you Keyboard to Navigate: <kbd><i class="fa fa-arrows"></i></kbd></p>
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
      requestAnimationFrame(function () {
        $("#" + defaults.ui.preloader).addClass(
          `${defaults.ui.events}--${defaults.suffix.show}`
        );
        $("#" + defaults.ui.preloader).removeClass(
          `${defaults.ui.events}--${defaults.suffix.hide}`
        );
      });
    },
    hide: function () {
      requestAnimationFrame(function () {
        $("#" + defaults.ui.preloader).addClass(
          defaults.ui.events + "--" + defaults.suffix.hide
        );
        $("#" + defaults.ui.preloader).removeClass(
          defaults.ui.events + "--" + defaults.suffix.show
        );
      });
    },
  };

  return func;
};
