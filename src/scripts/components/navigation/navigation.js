window._navigation = function () {
  console.log("--load interactivity--");
  console.log(defaults.interactive.virtual_menu);

  // Activate Default Menu
  if (defaults.interactive.virtual_menu.active_item.id == null) {
    console.log("Load Default Menu and Section");
    _chooseDefaultContent();
  }

  // On KeyPress Invoke
  _keyNavigation();
};

function _chooseDefaultContent() {
  var active_items = [];
  var active_item = {};

  for (let i = 0; i < defaults.interactive.virtual_menu.content.length; i++) {
    active_item = defaults.interactive.virtual_menu.content[i].items[0];
    active_item.index = 0;
    active_items.push(active_item);
  }

  _updateVirtualMenu(
    defaults.interactive.virtual_menu.featured[0].id,
    0,
    defaults.interactive.virtual_menu.featured[0].type,
    active_items,
    0
  );
}

function _keyNavigation() {
  document.addEventListener("keydown", function (event) {
    const newLocal = event.which;
    var direction = null;

    switch (newLocal) {
      case 38:
        direction = "up";
        break;
      case 39:
        direction = "right";
        break;
      case 40:
        direction = "down";
        break;
      case 37:
        direction = "left";
        break;
    }

    _navigateInterface(direction);
  });
}

function _navigateInterface(direction) {
  console.log("_navigateInterface");
  activeVirtualMenu = defaults.interactive.virtual_menu;
  activeItemId = defaults.interactive.virtual_menu.active_item.id;
  activeItemIndex = defaults.interactive.virtual_menu.active_item.index;
  activeItemType = defaults.interactive.virtual_menu.active_item.type;
  menu = defaults.interactive.virtual_menu.menu;
  content = defaults.interactive.virtual_menu.content;
  featured = defaults.interactive.virtual_menu.featured;
  activeChildItemIndex =
    defaults.interactive.virtual_menu.active_item.items[activeItemIndex].index;

  console.log(activeChildItemIndex);

  if (direction === "up") {
    if (activeItemType === "menu" && activeItemIndex > 0) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.menu[activeItemIndex - 1].id,
        activeItemIndex - 1,
        "menu"
      );
    }
    if (activeItemType === "featured") {
      console.log("this is the only featured");
    }
    if (activeItemType === "content" && activeItemIndex > 0) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.content[activeItemIndex - 1].id,
        activeItemIndex - 1,
        "content"
      );
    } else if (activeItemType === "content" && activeItemIndex == 0) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.featured[0].id,
        0,
        "featured"
      );
    }
  } else if (direction === "right") {
    if (activeItemType === "menu") {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.featured[0].id,
        0,
        "featured"
      );
    }
    if (
      activeItemType === "featured" &&
      activeItemIndex < featured.length - 1
    ) {
      console.log("On a featured, move right");
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.featured[activeItemIndex + 1].id,
        activeItemIndex + 1,
        "featured"
      );
    }
    if (
      activeItemType === "content" &&
      activeChildItemIndex < content[activeItemIndex].items.length
    ) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.menu[activeItemIndex].id,
        activeItemIndex,
        "menu",
        null,
        activeChildItemIndex + 1
      );
    }
  } else if (direction === "down") {
    if (activeItemType === "menu" && activeItemIndex < menu.length - 1) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.menu[activeItemIndex + 1].id,
        activeItemIndex + 1,
        "menu"
      );
    }
    if (activeItemType === "featured") {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.content[0].id,
        0,
        "content"
      );
    }
    if (activeItemType === "content" && activeItemIndex < content.length - 1) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.content[activeItemIndex + 1].id,
        activeItemIndex + 1,
        "content"
      );
    }
  } else if (direction === "left") {
    if (activeItemType === "menu") {
      console.log("Do Nothing Already on the Menu");
    }
    if (activeItemType === "featured" && activeItemIndex > 0) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.featured[activeItemIndex - 1].id,
        activeItemIndex - 1,
        "featured"
      );
    } else if (activeItemType === "featured" && activeItemIndex == 0) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.menu[0].id,
        0,
        "menu"
      );
    }
    if (activeItemType === "content" && activeItemIndex <= 0) {
      console.log("On a content, move left");
    } else if (activeItemType === "content" && activeItemIndex == 0) {
      _updateVirtualMenu(
        defaults.interactive.virtual_menu.menu[0].id,
        0,
        "menu"
      );
    }
  }
}

function _updateVirtualMenu(id, index, type, items, childIndex) {
  if (id !== null && id !== undefined) {
    defaults.interactive.virtual_menu.active_item.id = id;
  }
  if (index !== null && index !== undefined) {
    defaults.interactive.virtual_menu.active_item.index = index;
  }
  if (type !== null && type !== undefined) {
    defaults.interactive.virtual_menu.active_item.type = type;
  }
  if (items !== null && items !== undefined) {
    defaults.interactive.virtual_menu.active_item.items = items;
  }
  if (childIndex !== null && items !== undefined) {
    defaults.interactive.virtual_menu.active_item.items[
      index
    ].index = childIndex;
  }
  console.log(defaults.interactive.virtual_menu);
  _updateUI();
}

function _updateUI() {
  console.log("-- update ui --");
  $(`${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  $(`#${defaults.interactive.virtual_menu.active_item.id}`).addClass(
    `${defaults.ui.interactive}__item--active`
  );
}
