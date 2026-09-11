import { defaults } from "../../variables.js";
import { uiScroller } from "./scroller_html.js";

export const scrollers = {
  id: defaults.ui.scrollers,
  html: function () {
    const sections = defaults.data.ui.home.sections.main.content;
    const firstSize = defaults.sections.scrollers_settings[sections[0].type];
    let rows = "";

    for (let i = 0; i < sections.length; i++) {
      rows += uiScroller(
        sections[i].type,
        sections[i].category,
        sections[i].index,
        i
      );
    }

    return `<div id="${scrollers.id}" class="row h-50 g-0 justify-content-start align-items-start position-fixed bottom-0 w-100">
              <div class="col">
                <div class="ui__scrollers--selector" style="width:${firstSize.width}px;height:${firstSize.height}px"></div>
                <div class="scroller_vertical--items">${rows}</div>
              </div>
          </div>
      `;
  },
};
