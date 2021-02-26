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

  defaults.interactive.virtual_menu.active_item = {
    contentChildItemsId: active_items[0].id,
    contentChildItemsIndex: 0,
    contentIndex: 0,
    id: defaults.interactive.virtual_menu.featured[0].id,
    index: 0,
    items: active_items,
    type: defaults.interactive.virtual_menu.featured[0].type,
    menuIndex: 0,
    menuId: defaults.interactive.virtual_menu.menu[0].id,
    lastIndex: 0,
    lastId: defaults.interactive.virtual_menu.featured[0].id,
    lastType: defaults.interactive.virtual_menu.featured[0].type,
  };

  _updateVirtualMenu();
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
  var nav = _prepareNavigation();
  var menu = defaults.interactive.virtual_menu.menu;
  var content = defaults.interactive.virtual_menu.content;
  var featured = defaults.interactive.virtual_menu.featured;
  var items = defaults.interactive.virtual_menu.active_item.items;

  if (nav.active_item_type == "featured") {
    switch (direction) {
      case "up":
        console.log("up");
        break;
      case "right":
        if (nav.next_featured_id != null) {
          console.log("right");
          _updateVirtualMenu(
            nav.next_featured_id,
            nav.next_featured_index,
            nav.next_featured_type,
            nav.active_content_index,
            nav.active_content_childItemsIndex,
            nav.active_content_childItemsId,
            nav.active_menu_id,
            nav.active_menu_index,
            nav.last_item_index,
            nav.last_item_id,
            nav.last_item_type
          );
        }

        break;
      case "left":
        if (nav.prev_featured_id != null) {
          console.log("left");
          _updateVirtualMenu(
            nav.prev_featured_id,
            nav.prev_featured_index,
            nav.prev_featured_type,
            nav.active_content_index,
            nav.active_content_childItemsIndex,
            nav.active_content_childItemsId,
            nav.active_menu_index,
            nav.active_menu_id,
            nav.last_item_index,
            nav.last_item_id,
            nav.last_item_type
          );
        }
        if (nav.prev_featured_id == null) {
          _updateVirtualMenu(
            nav.active_menu_id,
            nav.active_menu_index,
            "menu",
            nav.active_content_index,
            nav.active_content_childItemsIndex,
            nav.active_content_childItemsId,
            nav.active_menu_index,
            nav.active_menu_id,
            nav.active_item_index,
            nav.active_item_id,
            nav.active_item_type
          );
        }
        break;
      case "down":
        _updateVirtualMenu(
          nav.active_content_childItemsId,
          nav.active_content_childItemsIndex,
          "content",
          nav.active_content_index,
          nav.active_content_childItemsIndex,
          nav.active_content_childItemsId,
          nav.active_menu_index,
          nav.active_menu_id,
          nav.active_item_index,
          nav.active_item_id,
          nav.active_item_type
        );
        break;
    }
  }
  if (nav.active_item_type == "menu") {
    switch (direction) {
      case "up":
        if (nav.prev_menu_id != null) {
          console.log("up");
          _updateVirtualMenu(
            nav.prev_menu_id,
            nav.prev_menu_index,
            nav.prev_menu_type,
            nav.active_content_index,
            nav.active_content_childItemsIndex,
            nav.active_content_childItemsId,
            nav.prev_menu_index,
            nav.prev_menu_id,
            nav.last_item_index,
            nav.last_item_id,
            nav.last_item_type
          );
        }
        break;
      case "down":
        if (nav.next_menu_id != null) {
          console.log("down");
          _updateVirtualMenu(
            nav.next_menu_id,
            nav.next_menu_index,
            nav.next_menu_type,
            nav.active_content_index,
            nav.active_content_childItemsIndex,
            nav.active_content_childItemsId,
            nav.next_menu_index,
            nav.next_menu_id,
            nav.last_item_index,
            nav.last_item_id,
            nav.last_item_type
          );
        }
        break;
      case "right":
        _updateVirtualMenu(
          nav.last_item_id,
          nav.last_item_index,
          nav.last_item_type,
          nav.active_content_index,
          nav.active_content_childItemsIndex,
          nav.active_content_childItemsId,
          nav.active_menu_index,
          nav.active_menu_id,
          nav.active_item_index,
          nav.active_item_id,
          nav.active_item_type
        );

        break;
      case "left":
        console.log("left");
        break;
    }
  }
  if (nav.active_item_type == "content") {
    switch (direction) {
      case "up":
        console.log("up");
        break;
      case "down":
        console.log("down");
        break;
      case "right":
        console.log("right");
        break;
      case "left":
        console.log("left");
        break;
    }
  }
  console.table(nav);
}

function _prepareNavigation() {
  var currentItem = defaults.interactive.virtual_menu.active_item;
  var areas = ["featured", "menu", "content"];
  var times = ["current", "prev", "next"];
  var values = ["index", "id", "type"];
  var nav = {
    active_item_id: currentItem.id,
    active_item_index: currentItem.index,
    active_item_type: currentItem.type,
    active_content_index: currentItem.contentIndex,
    active_content_childItemsIndex: currentItem.contentChildItemsIndex,
    active_content_childItemsId: currentItem.contentChildItemsId,
    active_menu_index: currentItem.menuIndex,
    active_menu_id: currentItem.menuId,
    last_item_index: currentItem.lastIndex,
    last_item_id: currentItem.lastId,
    last_item_type: currentItem.lastType,
  };

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
            currentItem.type == area
              ? defaults.interactive.virtual_menu[area][currentItem.index].id
              : null;
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
              ? currentItem.contentChildItemsIndex
              : null;
        }
        if (time == "current" && value == "id" && area == "content") {
          nav[`${time}_${area}_items_${value}`] =
            area == "content" && currentItem.type == "content"
              ? currentItem.contentChildItemsId
              : null;
        }

        if (time == "next" && value == "index" && area == "content") {
          nav[`${time}_${area}_items_${value}`] =
            currentItem.type == area &&
            area == "content" &&
            currentItem.contentChildItemsIndex <
              defaults.interactive.virtual_menu[area][currentItem.index].items
                .length -
                1
              ? currentItem.contentChildItemsIndex + 1
              : null;
        }
      }
    }
  }
  //   console.log(nav);
  return nav;
}

function _updateVirtualMenu(
  activeId,
  activeIndex,
  activeType,
  contentIndex,
  contentChildItemsIndex,
  contentChildItemsId,
  menuIndex,
  menuId,
  lastIndex,
  lastId,
  lastType
) {
  console.error(
    `id: ${activeId}  |  
        index: ${activeIndex}  |  
        type: ${activeType}  |  
        contentIndex: ${contentIndex}  |  
        contentChildItemsIndex: ${contentChildItemsIndex}  |  
        contentChildItemsId: ${contentChildItemsId}  |  
        menuIndex: ${menuIndex}  |  
        menuId: ${menuId}  |  
        lastIndex: ${lastIndex}  |  
        lastId: ${lastId}  |  
        lastType: ${lastType}  |  
    `
  );

  if (activeId != undefined) {
    defaults.interactive.virtual_menu.active_item.id = activeId;
  }
  if (activeIndex != undefined) {
    defaults.interactive.virtual_menu.active_item.index = activeIndex;
  }
  if (activeType != undefined) {
    defaults.interactive.virtual_menu.active_item.type = activeType;
  }
  if (contentIndex != undefined) {
    defaults.interactive.virtual_menu.active_item.contentIndex = contentIndex;
  }
  if (contentChildItemsIndex != undefined) {
    defaults.interactive.virtual_menu.active_item.contentChildItemsIndex = contentChildItemsIndex;
  }
  if (contentChildItemsId != undefined) {
    defaults.interactive.virtual_menu.active_item.contentChildItemsId = contentChildItemsId;
  }
  if (menuIndex != undefined) {
    defaults.interactive.virtual_menu.active_item.menuIndex = menuIndex;
  }
  if (menuId != undefined) {
    defaults.interactive.virtual_menu.active_item.menuId = menuId;
  }
  if (lastIndex != undefined) {
    defaults.interactive.virtual_menu.active_item.lastIndex = lastIndex;
  }
  if (lastId != undefined) {
    defaults.interactive.virtual_menu.active_item.lastId = lastId;
  }
  if (lastType != undefined) {
    defaults.interactive.virtual_menu.active_item.lastType = lastType;
  }

  console.log(defaults.interactive.virtual_menu.active_item);

  _updateUI();
}

function _updateUI() {
  console.log("-- update ui --");

  $(`.${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  //   if (defaults.interactive.virtual_menu.active_item.type == "content") {
  //     $(`#${defaults.interactive.virtual_menu.active_item.itemsId}`).addClass(
  //       `${defaults.ui.interactive}__item--active`
  //     );
  //   }
  //   else
  {
    $(`#${defaults.interactive.virtual_menu.active_item.id}`).addClass(
      `${defaults.ui.interactive}__item--active`
    );
  }
}
