window._prepareNavigation = function () {
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
};
