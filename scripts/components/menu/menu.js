import { defaults } from "../../variables.js";

export const menu = {
  id: defaults.ui.menu,
  html: function () {
    let items = "";

    for (let i = 0; i < defaults.data.menu.length; i++) {
      defaults.interactive.menu.push({
        id: `${menu.id}--${defaults.data.menu[i].name}`,
        type: "menu",
      });

      items += `<div class="col">
          <a id="${menu.id}--${defaults.data.menu[i].name}" class="${menu.id}--uimenuitem btn btn-link mb-32 ${defaults.ui.interactive} ${defaults.ui.interactive}--${i}" data-interactive-type="menu" data-interactive-item-index="${i}" href="${defaults.data.menu[i].path}">
            <span class="${menu.id}--svg ${menu.id}--svg-default">${defaults.data.menu[i].svg}</span>
            <span class="${menu.id}--svg ${menu.id}--svg-hover">${defaults.data.menu[i].svg_hover}</span>
            <span class="${menu.id}--name text-capitalize fs-lg text-block-1 ms-4 m-0 p-0 mb-3 text-sd-md text-black-1 position-absolute">${defaults.data.menu[i].name}</span>
            <div class="${menu.id}--bar menu-bar ms-auto me-auto"></div>
          </a>
      </div>`;
    }

    return `<div class="row h-100 justify-content-center align-items-center g-0">
      <div class="col-auto w-100">
      <div id="ui-left__menu" class="position-relative">
          <div class="row flex-column g-0 no-gutters mx-5 text-center">${items}</div>
        </div></div></div>`;
  },
};
