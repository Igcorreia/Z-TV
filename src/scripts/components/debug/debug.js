window._debug = function () {
  var func = {
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
  };
  return func;
};
