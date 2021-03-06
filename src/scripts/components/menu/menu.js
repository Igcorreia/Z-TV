window._menu = function () {
  var func = {
    id: defaults.ui.menu,
    html: function () {
      for (i = 0; i < defaults.data.menu.length; i++) {
        defaults.interactive.menu.push({
          id: `${defaults.ui.menu}--${defaults.data.menu[i].name}`,
          type: "menu",
        });

        const newLocal = `<div class="col">
            <a id="${defaults.ui.menu}--${defaults.data.menu[i].name}" class="${defaults.ui.menu}--uimenuitem btn btn-link mb-32 ${defaults.ui.interactive} ${defaults.ui.interactive}--${i}" data-interactive-type="menu" data-interactive-item-index="${i}" href="${defaults.data.menu[i].path}">
              <span class="${defaults.ui.menu}--svg ${defaults.ui.menu}--svg-default">${defaults.data.menu[i].svg}</span>
              <span class="${defaults.ui.menu}--svg ${defaults.ui.menu}--svg-hover">${defaults.data.menu[i].svg_hover}</span>
              <span class="${defaults.ui.menu}--name text-capitalize fs-lg text-block-1 ms-4 m-0 p-0 mb-3 text-sd-md text-black-1 position-absolute">${defaults.data.menu[i].name}</span>
              <div class="${defaults.ui.menu}--bar menu-bar ms-auto me-auto"></div>
            </a>
        </div>`;
        defaults.sections.menu += newLocal;
      }
      defaults.sections.menu = `<div class="row h-100 justify-content-center align-items-center g-0">
        <div class="col-auto w-100">
        <div id="ui-left__menu" class="position-relative">
            <div class="row flex-column g-0 no-gutters mx-5 text-center">${defaults.sections.menu}</div>
          </div></div></div>`;

      return defaults.sections.menu;
    },
  };

  return func;
};
