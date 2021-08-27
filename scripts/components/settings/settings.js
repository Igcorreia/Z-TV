window._settings = function () {
  var func = {
    id: defaults.ui.settings,
    html: function () {
      return `<div id="${init.utils.settings.id}" class="w-100 h-100 row bg-translucid justify-content-center align-items-center g-0 position-fixed">
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
    destroy: function(){
      setTimeout(() => {
        $("#" + defaults.ui.settings).remove();
      }, 1100);
    },
    create: function(){
      $('#root').prepend(func.html());
    },
    show: function () {
      requestAnimationFrame(function () {
        func.create();
        setTimeout(() => {
          $("#" + defaults.ui.settings).addClass(
            `${defaults.ui.events}--${defaults.suffix.show}`
          );
          $("#" + defaults.ui.settings).removeClass(
            `${defaults.ui.events}--${defaults.suffix.hide}`
          );
        }, 80);
      });
    },
    hide: function () {
      requestAnimationFrame(function () {
        $("#" + defaults.ui.settings).addClass(
          defaults.ui.events + "--" + defaults.suffix.hide
        );
        $("#" + defaults.ui.settings).removeClass(
          defaults.ui.events + "--" + defaults.suffix.show
        );
        func.destroy();
      });
    },
  };
  return func;
};
