import { defaults } from "../../variables.js";
import { general } from "../general/general.js";
import { settings } from "../settings/settings.js";
import { prepareNavigation } from "./navigation_context.js";
import { virtualMenu } from "./navigation_virtual_menu.js";

export function startNavigation() {
  if (defaults.interactive.active.id == null) {
    chooseDefaultContent();
  }
}

function chooseDefaultContent() {
  var items = [];
  var item = {};

  for (let i = 0; i < defaults.interactive.content.length; i++) {
    item = defaults.interactive.content[i].items[0];
    item.index = 0;
    items.push(item);
  }

  defaults.interactive.active = {
    menu: {
      index: 0,
      id: defaults.interactive.menu[0].id,
    },
    featured: {
      index: 0,
      id: defaults.interactive.featured[0].id,
    },
    content: {
      index: 0,
      id: defaults.interactive.content[0].id,
      items: items,
    },
    item: {
      index: 0,
      id: defaults.interactive.content[0].items[0].id,
    },
    focus: {
      index: 0,
      id: defaults.interactive.featured[0].id,
      type: "featured",
    },
  };

  general.focus.top();

  keyNavigation();
  virtualMenu();
}

function keyNavigation() {
  document.addEventListener("keydown", function (event) {
    switch (event.which) {
      case 38:
      case 50:
      case 87:
      case 104:
        navigateInterface("up");
        break;
      case 39:
      case 54:
      case 68:
      case 102:
        navigateInterface("right");
        break;
      case 40:
      case 56:
      case 83:
      case 98:
        navigateInterface("down");
        break;
      case 37:
      case 52:
      case 65:
      case 100:
        navigateInterface("left");
        break;
      case 112:
      case 113:
        if (defaults.sections.settings == false) {
          settings.show();
          defaults.sections.settings = true;
        } else {
          settings.hide();
          defaults.sections.settings = false;
        }
        break;
    }
  });
}

function navigateInterface(direction) {
  var active = defaults.interactive.active;
  var nav = prepareNavigation();

  if (active.focus.type == "featured") {
    navigateFromFeatured(direction, active, nav);
  } else if (active.focus.type == "menu") {
    navigateFromMenu(direction, active, nav);
  } else if (active.focus.type == "content") {
    navigateFromContent(direction, active, nav);
  }
}

function navigateFromFeatured(direction, active, nav) {
  switch (direction) {
    case "right":
      if (nav.featured_next_id != null) {
        virtualMenu({
          focus: { index: nav.featured_next_index, id: nav.featured_next_id, type: "featured" },
          featured: { index: nav.featured_next_index, id: nav.featured_next_id },
        });
      }
      break;
    case "left":
      if (nav.featured_prev_id != null) {
        virtualMenu({
          focus: { index: nav.featured_prev_index, id: nav.featured_prev_id, type: "featured" },
          featured: { index: nav.featured_prev_index, id: nav.featured_prev_id },
        });
      } else {
        virtualMenu({
          focus: { index: active.menu.index, id: active.menu.id, type: "menu" },
          menu: { index: active.menu.index, id: active.menu.id },
        });
        general.blur.top();
        general.focus.left();
      }
      break;
    case "down":
      virtualMenu({
        focus: { index: active.item.index, id: active.item.id, type: "content" },
        content: { index: active.content.index, id: active.content.id },
        item: { index: active.item.index, id: active.item.id },
      });
      general.focus.bottom();
      general.blur.top();
      break;
  }
}

function navigateFromMenu(direction, active, nav) {
  switch (direction) {
    case "up":
      virtualMenu({
        focus: { index: nav.menu_prev_index, id: nav.menu_prev_id, type: "menu" },
        menu: { index: nav.menu_prev_index, id: nav.menu_prev_id },
      });
      break;
    case "right":
      virtualMenu({
        focus: { index: active.featured.index, id: active.featured.id, type: "featured" },
        featured: { index: active.featured.index, id: active.featured.id },
      });
      general.blur.left();
      general.focus.top();
      break;
    case "down":
      virtualMenu({
        focus: { index: nav.menu_next_index, id: nav.menu_next_id, type: "menu" },
        menu: { index: nav.menu_next_index, id: nav.menu_next_id },
      });
      break;
  }
}

function navigateFromContent(direction, active, nav) {
  switch (direction) {
    case "up":
      if (nav.content_prev_item_id != null) {
        virtualMenu({
          focus: { index: nav.content_prev_item_index, id: nav.content_prev_item_id, type: "content" },
          content: { index: nav.content_prev_index, id: nav.content_prev_id },
          item: { index: nav.content_prev_item_index, id: nav.content_prev_item_id },
        });
      } else {
        virtualMenu({
          focus: { index: active.featured.index, id: active.featured.id, type: "featured" },
          featured: { index: active.featured.index, id: active.featured.id },
          content: { index: active.content.index, id: active.content.id },
          item: { index: active.item.index, id: active.item.id },
        });
        general.blur.bottom();
        general.focus.top();
      }
      break;
    case "right":
      virtualMenu({
        focus: { index: nav.item_next_index, id: nav.item_next_id, type: "content" },
        item: { index: nav.item_next_index, id: nav.item_next_id },
      });
      break;
    case "down":
      virtualMenu({
        focus: { index: nav.content_next_item_index, id: nav.content_next_item_id, type: "content" },
        content: { index: nav.content_next_index, id: nav.content_next_id },
        item: { index: nav.content_next_item_index, id: nav.content_next_item_id },
      });
      break;
    case "left":
      virtualMenu({
        focus: { index: nav.item_prev_index, id: nav.item_prev_id, type: "content" },
        item: { index: nav.item_prev_index, id: nav.item_prev_id },
      });
      break;
  }
}
