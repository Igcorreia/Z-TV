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

  init.ui.general.focus.top();

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

  // console.log(nav);

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
          init.ui.general.blur.top();
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
        init.ui.general.focus.bottom();
        init.ui.general.blur.top();
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
        init.ui.general.focus.top();
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
          init.ui.general.blur.bottom();
          init.ui.general.focus.top();
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
