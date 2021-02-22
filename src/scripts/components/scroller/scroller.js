window._scroller = function () {
  var func = {
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
  };

  return func;
};
