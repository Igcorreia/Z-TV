window._virtualMenu = function (
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
  itemId,
  focusSubtype
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
  // if (focusSubtype != null && focusSubtype != undefined) {
  //   defaults.interactive.active.focus.subtype = focusSubtype;
  // }
  if (itemIndex != null && itemIndex != undefined) {
    defaults.interactive.active.item.index = itemIndex;

    defaults.interactive.active.content.items[
      defaults.interactive.active.content.index
    ] =
      defaults.interactive.content[
        defaults.interactive.active.content.index
      ].items[itemIndex];

    _navigation_scroller();
  }
  if (itemId != null && itemId != undefined) {
    defaults.interactive.active.item.id = itemId;
  }
  _focusUI();

  if(focusType == 'content'){
    _focusFEATUREDUI();
  }
};

function _focusUI() {
  $(`.${defaults.ui.interactive}__item--active`).removeClass(
    `${defaults.ui.interactive}__item--active`
  );
  $(`#${defaults.interactive.active.focus.id}`).addClass(
    `${defaults.ui.interactive}__item--active`
  );
  
}

function _focusFEATUREDUI(){
  let activeContent = defaults.interactive.active.content;
  let activeSection = defaults.interactive.active.content.items[activeContent.index];
  
  init.ui.featured.changeContent(
    activeContent.index, 
    activeContent.id, 
    activeSection.index,
    activeSection.id,
    activeSection.type,
    activeSection.subtype
    );
}