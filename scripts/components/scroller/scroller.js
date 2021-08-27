window._scroller = function () {
  var func = {
    id: defaults.ui.scrollers,
    html: function () {

      const scrollers = defaults.data.ui.home.sections.main.content;

      for (let i = 0; i < scrollers.length; i++) {
        defaults.sections.scrollers += _uiScroller(
          scrollers[i].type,
          scrollers[i].category,
          scrollers[i].index,
          i
        );
      }

      return (
        `<div id="` +
        init.ui.scrollers.id +
        `" class="row h-50 g-0 justify-content-start align-items-start position-fixed bottom-0 w-100">
                <div class="col">
                  <div class="ui__scrollers--selector" style="width:${
                    defaults.sections.scrollers_settings[
                      defaults.data.ui.home.sections.main.content[0].type
                    ].width
                  }px;height:${
          defaults.sections.scrollers_settings[
            defaults.data.ui.home.sections.main.content[0].type
          ].height
        }px"></div>
                  <div class="scroller_vertical--items">` +
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
