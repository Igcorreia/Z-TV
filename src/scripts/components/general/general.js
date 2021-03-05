window._general = function () {
  var func = {
    html: function () {
      return (
        init.ui.preloader.html() +
        `
            <div id="ui" class="row h-100 w-100 g-0 no-gutters align-items-center justify-content-center position-fixed top-0 start-0" g-0>
                <div id="ui__left" class="col-auto h-100 position-relative">` +
        init.ui.menu.html() +
        `</div>
                <div id="ui__rigth" class="col h-100  position-relative">` +
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
    focus: {
      left: function () {
        $("#ui__left").addClass(`${defaults.ui.interactive}__left--active`);
      },
    },
    blur: {
      left: function () {
        $("#ui__left").removeClass(`${defaults.ui.interactive}__left--active`);
      },
    },
  };

  return func;
};
