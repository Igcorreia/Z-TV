const { type } = require("jquery");

window._navigation = function () {
  if (defaults.interactive.active.id == null) {
    _chooseDefaultContent();
  }
};

function _chooseDefaultContent() {
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

  _keyNavigation();
  _virtualMenu();
}

function _keyNavigation() {
  document.addEventListener("keydown", function (event) {
    const newLocal = event.which;

    switch (newLocal) {
      case 38:
        _navigateInterface("up");
        break;
      case 39:
        _navigateInterface("right");
        break;
      case 40:
        _navigateInterface("down");
        break;
      case 37:
        _navigateInterface("left");
        break;
    }
  });
}

function _navigateInterface(direction) {
  var active = defaults.interactive.active;
  var nav = _prepareNavigation();

  if (active.focus.type == "featured") {
    switch (direction) {
      case "up":
        break;
      case "right":
        if (nav.featured_next_id != null) {
          _virtualMenu(
            nav.featured_next_index,
            nav.featured_next_id,
            active.focus.type,
            null,
            null,
            nav.featured_next_index,
            nav.featured_next_id
          );
        }
        break;
      case "left":
        if (nav.featured_prev_id != null) {
          _virtualMenu(
            nav.featured_prev_index,
            nav.featured_prev_id,
            active.focus.type,
            null,
            null,
            nav.featured_prev_index,
            nav.featured_prev_id
          );
        }
        if (nav.featured_prev_id == null) {
          _virtualMenu(
            active.menu.index,
            active.menu.id,
            "menu",
            active.menu.index,
            active.menu.id
          );
          init.ui.general.focus.left();
        }
        break;
      case "down":
        _virtualMenu(
          active.item.index,
          active.item.id,
          "content",
          null,
          null,
          null,
          null,
          active.content.index,
          active.content.id,
          null,
          active.item.index,
          active.item.id
        );
        break;
    }
  }

  if (active.focus.type == "menu") {
    switch (direction) {
      case "up":
        _virtualMenu(
          nav.menu_prev_index,
          nav.menu_prev_id,
          active.focus.type,
          nav.menu_prev_index,
          nav.menu_prev_id
        );
        break;
      case "right":
        _virtualMenu(
          active.featured.index,
          active.featured.id,
          "featured",
          null,
          null,
          active.featured.index,
          active.featured.id
        );
        init.ui.general.blur.left();
        break;
      case "down":
        _virtualMenu(
          nav.menu_next_index,
          nav.menu_next_id,
          active.focus.type,
          nav.menu_next_index,
          nav.menu_next_id
        );
        break;
      case "left":
        break;
    }
  }

  if (active.focus.type == "content") {
    switch (direction) {
      case "up":
        if (nav.content_prev_item_id != null) {
          _virtualMenu(
            nav.content_prev_item_index,
            nav.content_prev_item_id,
            active.focus.type,
            null,
            null,
            null,
            null,
            nav.content_prev_index,
            nav.content_prev_id,
            null,
            nav.content_prev_item_index,
            nav.content_prev_item_id
          );
        }

        if (nav.content_prev_item_id == null) {
          _virtualMenu(
            active.featured.index,
            active.featured.id,
            "featured",
            null,
            null,
            active.featured.index,
            active.featured.id,
            active.content.index,
            active.content.id,
            null,
            active.item.index,
            active.item.id
          );
        }

        break;
      case "right":
        _virtualMenu(
          nav.item_next_index,
          nav.item_next_id,
          active.focus.type,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          nav.item_next_index,
          nav.item_next_id
        );
        break;
      case "down":
        //todo:down
        _virtualMenu(
          nav.content_next_item_index,
          nav.content_next_item_id,
          active.focus.type,
          null,
          null,
          null,
          null,
          nav.content_next_index,
          nav.content_next_id,
          null,
          nav.content_next_item_index,
          nav.content_next_item_id
        );
        break;
      case "left":
        _virtualMenu(
          nav.item_prev_index,
          nav.item_prev_id,
          active.focus.type,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          nav.item_prev_index,
          nav.item_prev_id
        );
        break;
    }
  }
}

function _prepareNavigation() {
  var nav = {};
  var active = defaults.interactive.active;
  var types = ["menu", "featured", "content"];
  var positions = ["current", "prev", "next"];
  var values = ["index", "id"];
  var content = defaults.interactive.content;

  // General Sections / Types
  for (t = 0; t < types.length; t++) {
    const type = types[t];
    const typeIndex = active[type].index;

    for (p = 0; p < positions.length; p++) {
      const pos = positions[p];

      for (v = 0; v < values.length; v++) {
        const value = values[v];

        if (active.focus.type == type && pos == "current" && value == "index") {
          nav[`${type}_${pos}_${value}`] = typeIndex;
        }

        if (active.focus.type == type && pos == "current" && value == "id") {
          nav[`${type}_${pos}_${value}`] = active[type].id;
        }

        if (active.focus.type == type && pos == "next" && value == "index") {
          nav[`${type}_${pos}_${value}`] =
            typeIndex < defaults.interactive[type].length - 1
              ? typeIndex + 1
              : null;
        }

        if (active.focus.type == type && pos == "next" && value == "id") {
          nav[`${type}_${pos}_${value}`] =
            typeIndex < defaults.interactive[type].length - 1
              ? defaults.interactive[type][typeIndex + 1].id
              : null;
        }

        if (active.focus.type == type && pos == "prev" && value == "index") {
          nav[`${type}_${pos}_${value}`] = typeIndex > 0 ? typeIndex - 1 : null;
        }

        if (active.focus.type == type && pos == "prev" && value == "id") {
          nav[`${type}_${pos}_${value}`] =
            typeIndex > 0 ? defaults.interactive[type][typeIndex - 1].id : null;
        }
      }
    }
  }
  // Scroller items
  if (active.focus.type == "content") {
    console.log("Prepare Items for Scrollers");
    nav[`item_current_index`] = active.item.index;
    nav[`item_current_id`] = active.item.id;
    nav[`item_next_index`] =
      active.item.index < content[active.content.index].items.length - 1
        ? active.item.index + 1
        : null;
    nav[`item_next_id`] =
      active.item.index < content[active.content.index].items.length - 1
        ? content[active.content.index].items[active.item.index + 1].id
        : null;
    nav[`item_prev_index`] =
      active.item.index > 0 ? active.item.index - 1 : null;
    nav[`item_prev_id`] =
      active.item.index > 0
        ? content[active.content.index].items[active.item.index - 1].id
        : null;

    //Next Content Item ID and Index
    nav[`content_next_item_index`] =
      active.content.index < content.length - 1
        ? active.content.items[active.content.index + 1].index
        : null;
    nav[`content_next_item_id`] =
      active.content.index < content.length - 1
        ? active.content.items[active.content.index + 1].id
        : null;

    //Prev Content ID and Index
    nav[`content_prev_item_index`] =
      active.content.index > 0
        ? active.content.items[active.content.index - 1].index
        : null;
    nav[`content_prev_item_id`] =
      active.content.index > 0
        ? active.content.items[active.content.index - 1].id
        : null;
  }
  return nav;
}

function _virtualMenu(
  focusIndex,
  focusId,
  focusType,
  menuIndex,
  menuId,
  featuredIndex,
  featuredId,
  contentIndex,
  contentId,
  contentItems,
  itemIndex,
  itemId
) {
  if (menuIndex != null && menuIndex != undefined) {
    defaults.interactive.active.menu.index = menuIndex;
  }
  if (menuId != null && menuId != undefined) {
    defaults.interactive.active.menu.id = menuId;
  }
  if (featuredIndex != null && featuredIndex != undefined) {
    defaults.interactive.active.featured.index = featuredIndex;
  }
  if (featuredId != null && featuredId != undefined) {
    defaults.interactive.active.featured.id = featuredId;
  }
  if (contentIndex != null && contentIndex != undefined) {
    defaults.interactive.active.content.index = contentIndex;
  }
  if (contentId != null && contentId != undefined) {
    defaults.interactive.active.content.id = contentId;
  }
  if (contentItems != null && contentItems != undefined) {
    defaults.interactive.active.content.items = contentItems;
  }
  if (focusIndex != null && focusIndex != undefined) {
    defaults.interactive.active.focus.index = focusIndex;
  }
  if (focusId != null && focusId != undefined) {
    defaults.interactive.active.focus.id = focusId;
  }
  if (focusType != null && focusType != undefined) {
    defaults.interactive.active.focus.type = focusType;
  }
  if (itemIndex != null && itemIndex != undefined) {
    defaults.interactive.active.item.index = itemIndex;

    defaults.interactive.active.content.items[
      defaults.interactive.active.content.index
    ] =
      defaults.interactive.content[
        defaults.interactive.active.content.index
      ].items[itemIndex];
  }
  if (itemId != null && itemId != undefined) {
    defaults.interactive.active.item.id = itemId;
  }
  _focusUI();
}

function _focusUI() {
  $(`.${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  $(`#${defaults.interactive.active.focus.id}`).addClass(
    `${defaults.ui.interactive}__item--active`
  );
}
