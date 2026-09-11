import { defaults } from "../../variables.js";
import { featured } from "../featured/featured.js";
import { navigationScroller } from "./navigation_scrollers.js";

export function virtualMenu(options) {
  options = options || {};
  var active = defaults.interactive.active;

  assignIfSet(active.menu, options.menu, ["index", "id"]);
  assignIfSet(active.featured, options.featured, ["index", "id"]);
  assignIfSet(active.content, options.content, ["index", "id", "items"]);
  assignIfSet(active.focus, options.focus, ["index", "id", "type"]);

  var item = options.item || {};
  if (item.index != null) {
    active.item.index = item.index;
    active.content.items[active.content.index] =
      defaults.interactive.content[active.content.index].items[item.index];
    navigationScroller();
  }
  if (item.id != null) {
    active.item.id = item.id;
  }

  focusUI();

  if (options.focus && options.focus.type == "content") {
    focusFeaturedUI();
  }
}

function assignIfSet(target, source, keys) {
  if (!source) return;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}

function focusUI() {
  $(`.${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  $(`#${defaults.interactive.active.focus.id}`).addClass(
    `${defaults.ui.interactive}__item--active`
  );
}

function focusFeaturedUI() {
  let activeContent = defaults.interactive.active.content;
  let activeSection = activeContent.items[activeContent.index];

  featured.changeContent(
    activeContent.index,
    activeContent.id,
    activeSection.index,
    activeSection.id,
    activeSection.type,
    activeSection.subtype
  );
}
