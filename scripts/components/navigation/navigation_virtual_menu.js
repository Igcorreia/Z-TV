window._virtualMenu = function (options) {
  options = options || {};
  var active = defaults.interactive.active;

  _assignIfSet(active.menu, options.menu, ["index", "id"]);
  _assignIfSet(active.featured, options.featured, ["index", "id"]);
  _assignIfSet(active.content, options.content, ["index", "id", "items"]);
  _assignIfSet(active.focus, options.focus, ["index", "id", "type"]);

  var item = options.item || {};
  if (item.index != null) {
    active.item.index = item.index;
    active.content.items[active.content.index] =
      defaults.interactive.content[active.content.index].items[item.index];
    _navigation_scroller();
  }
  if (item.id != null) {
    active.item.id = item.id;
  }

  _focusUI();

  if (options.focus && options.focus.type == "content") {
    _focusFEATUREDUI();
  }
};

function _assignIfSet(target, source, keys) {
  if (!source) return;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}

function _focusUI() {
  $(`.${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  $(`#${defaults.interactive.active.focus.id}`).addClass(
    `${defaults.ui.interactive}__item--active`
  );
}

function _focusFEATUREDUI() {
  let activeContent = defaults.interactive.active.content;
  let activeSection = activeContent.items[activeContent.index];

  init.ui.featured.changeContent(
    activeContent.index,
    activeContent.id,
    activeSection.index,
    activeSection.id,
    activeSection.type,
    activeSection.subtype
  );
}
