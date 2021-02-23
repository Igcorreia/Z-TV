window._navigation = function () {
  console.log("--load interactivity--");
  // Activate Default Menu

  if (defaults.interactive.virtual_menu.active_item.id == null) {
    console.log("Load Default Menu and Section");
    _chooseDefaultContent();
  }
  // On KeyPress Invoke
  // Change Focus
  // Animate Scroller
  // Animate Buttons
  // Animate Menu
};

function _chooseDefaultContent() {
  defaults.interactive.virtual_menu.active_item.id =
    defaults.interactive.virtual_menu.featured[0].id;
  defaults.interactive.virtual_menu.active_item.index = 0;
  defaults.interactive.virtual_menu.active_item.type = "featured";
  _changeVirtualItem();
}

function _changeVirtualItem() {
  var index = defaults.interactive.virtual_menu.active_item.index;
  var type = defaults.interactive.virtual_menu.active_item.type;
  defaults.interactive.virtual_menu[type][index].active = true;
}

function _changeActiveMenu(sel) {}

function _changeActiveContent() {}

function _changeActiveFeatured(sel) {}

function _changeFeaturedContent(sel) {}
