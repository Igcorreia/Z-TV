window._brand = function () {
  var func = {
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
  };
  return func;
};
