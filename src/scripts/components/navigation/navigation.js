window._navigation = function () {
  console.log("--load interactivity--");
  console.log(defaults.interactive.virtual_menu);

  // Activate Default Menu
  if (defaults.interactive.virtual_menu.active_item.id == null) {
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

  defaults.interactive.virtual_menu.active_item.id =
    defaults.interactive.virtual_menu.featured[0].id;

  defaults.interactive.virtual_menu.active_item.index = 0;

  defaults.interactive.virtual_menu.active_item.type =
    defaults.interactive.virtual_menu.featured[0].type;

  defaults.interactive.virtual_menu.active_item.items = active_items;

  defaults.interactive.virtual_menu.active_item.itemsIndex =
    active_items[0].index;

  defaults.interactive.virtual_menu.active_item.itemsId = active_items[0].id;
  _updateVirtualMenu();
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
  var nav = _prepareNavigation();
  //MENU DATA
  menu = defaults.interactive.virtual_menu.menu;
  //CONTENT DATA
  content = defaults.interactive.virtual_menu.content;
  //FEATURED DATA
  featured = defaults.interactive.virtual_menu.featured;
  //ITEMS DATA
  items = defaults.interactive.virtual_menu.active_item.items;

  if (direction == "up") {
    if (nav.current_content_items_index !== null) {
      console.log("IAM current_content_items_index-- up");
    }
    if (nav.current_content_index !== null) {
      console.log("IAM current_content_index -- up");
    }
    if (nav.current_featured_index !== null) {
      console.log("IAM current_featured_index -- up");
    }
    if (nav.current_menu_index !== null) {
      console.log("IAM current_menu_index -- up");
      // if (nav.prev_menu_index !== null) {
      //   _updateVirtualMenu(
      //     nav.prev_menu_id,
      //     nav.prev_menu_index,
      //     nav.prev_menu_type
      //   );
      // }
    }
  }

  if (direction == "right") {
    if (nav.current_content_items_index !== null) {
      console.log("IAM current_content_items_index-- right");
    }
    if (nav.current_content_index !== null) {
      console.log("IAM current_content_index -- right");
    }
    if (nav.current_featured_index !== null) {
      console.log("IAM current_featured_index -- right");
      if (nav.next_featured_index !== null) {
        _updateVirtualMenu(
          nav.next_featured_id,
          nav.next_featured_index,
          nav.next_featured_type
        );
      }
    }
    if (nav.current_menu_index !== null) {
      console.log("IAM current_menu_index -- right");
      // _updateVirtualMenu(featured[0].id, 0, "featured");
    }
  }

  if (direction == "down") {
    if (nav.current_content_items_index !== null) {
      console.log("IAM current_content_items_index-- down");
    }
    if (nav.current_content_index !== null) {
      console.log("IAM current_content_index -- down");
    }
    if (nav.current_featured_index !== null) {
      console.log("IAM current_featured_index -- down");
      // _updateVirtualMenu(content[0].id, 0, "content");
    }
    if (nav.current_menu_index !== null) {
      console.log("IAM current_menu_index -- down");
      // if (nav.next_menu_index !== null) {
      //   _updateVirtualMenu(
      //     nav.next_menu_id,
      //     nav.next_menu_index,
      //     nav.next_menu_type
      //   );
      // }
    }
  }

  if (direction == "left") {
    if (nav.current_content_items_index !== null) {
      console.log("IAM current_content_items_index-- left");
    }
    if (nav.current_content_index !== null) {
      console.log("IAM current_content_index -- left");
    }
    if (nav.current_featured_index !== null) {
      console.log("IAM current_featured_index -- left");
      if (nav.prev_featured_index !== null) {
        _updateVirtualMenu(
          nav.prev_featured_id,
          nav.prev_featured_index,
          nav.prev_featured_type
        );
      }
      // if (nav.prev_featured_index == null) {
      //   _updateVirtualMenu(menu[0].id, 0, "menu");
      // }
    }
    // if (nav.current_menu_index !== null) {
    //   console.log("IAM current_menu_index -- left");
    // }
  }
}

function _prepareNavigation() {
  var currentItem = defaults.interactive.virtual_menu.active_item;
  var areas = ["featured", "menu", "content"];
  var times = ["current", "prev", "next"];
  var values = ["index", "id", "type"];
  var nav = {
    active_item_type: currentItem.type,
    active_item_index: currentItem.index,
    active_child_items_index: currentItem.index,
  };
  var currentChildItem =
    currentItem.type == "content" ? currentItem.items[currentItem.index] : null;

  for (let a = 0; a < areas.length; a++) {
    const area = areas[a];

    for (let t = 0; t < times.length; t++) {
      const time = times[t];

      for (let v = 0; v < values.length; v++) {
        const value = values[v];

        //SECTIONS
        if (time == "current" && value == "index") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area ? currentItem.index : null;
        }
        if (time == "current" && value == "type") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area ? currentItem.type : null;
        }
        if (time == "current" && value == "id") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area ? currentItem.id : null;
        }
        if (time == "prev" && value == "index") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area && currentItem.index > 0
              ? currentItem.index - 1
              : null;
        }
        if (time == "prev" && value == "id") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area && currentItem.index > 0
              ? defaults.interactive.virtual_menu[area][currentItem.index - 1]
                  .id
              : null;
        }
        if (time == "prev" && value == "type") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area && currentItem.index > 0
              ? currentItem.type
              : null;
        }
        if (time == "next" && value == "index") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area &&
            currentItem.index <
              defaults.interactive.virtual_menu[area].length - 1
              ? currentItem.index + 1
              : null;
        }
        if (time == "next" && value == "type") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area &&
            currentItem.index <
              defaults.interactive.virtual_menu[area].length - 1
              ? currentItem.type
              : null;
        }
        if (time == "next" && value == "id") {
          nav[`${time}_${area}_${value}`] =
            currentItem.type == area &&
            currentItem.index <
              defaults.interactive.virtual_menu[area].length - 1
              ? defaults.interactive.virtual_menu[area][currentItem.index + 1]
                  .id
              : null;
        }
        if (time == "current" && value == "index" && area == "content") {
          nav[`${time}_${area}_items_${value}`] =
            currentItem.type == area && area == "content"
              ? currentChildItem.index
              : null;
        }
        if (time == "current" && value == "id" && area == "content") {
          nav[`${time}_${area}_items_${value}`] =
            area == "content" && currentItem.type == "content"
              ? currentChildItem.id
              : null;
        }
      }
    }
  }
  console.log(nav);
  return nav;
}

function _updateVirtualMenu(id, index, type, childId, childIndex) {
  if (id !== null && id !== undefined && id != "") {
    defaults.interactive.virtual_menu.active_item.id = id;
  }
  if (index !== null && index !== undefined && index != "") {
    defaults.interactive.virtual_menu.active_item.index = index;
  }
  if (type !== null && type !== undefined && type != "") {
    defaults.interactive.virtual_menu.active_item.type = type;
  }
  // if (
  //   type == "content" &&
  //   childId !== null &&
  //   childId !== undefined &&
  //   childId != ""
  // ) {
  //   defaults.interactive.virtual_menu.active_item.itemsId = childId;
  // }
  // if (
  //   type == "content" &&
  //   childIndex !== null &&
  //   childIndex !== undefined &&
  //   childIndex != ""
  // ) {
  //   defaults.interactive.virtual_menu.active_item.itemsIndex = childIndex;
  // }

  _updateUI();
}

function _updateUI() {
  console.log("-- update ui --");
  console.log(defaults.interactive.virtual_menu);

  $(`.${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  if (defaults.interactive.virtual_menu.active_item.type == "content") {
    $(`#${defaults.interactive.virtual_menu.active_item.itemsId}`).addClass(
      `${defaults.ui.interactive}__item--active`
    );
  } else {
    $(`#${defaults.interactive.virtual_menu.active_item.id}`).addClass(
      `${defaults.ui.interactive}__item--active`
    );
  }

  //
}
