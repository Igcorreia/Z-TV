window._menu = function () {
  var func = {
    id: defaults.ui.menu,
    html: function () {
      for (i = 0; i < defaults.data.menu.length; i++) {
        defaults.interactive.menu.push({
          id: defaults.ui.menu + "--" + defaults.data.menu[i].name,
          type: "menu",
          // active: false,
        });

        const newLocal =
          '<div class="col"><a id="' +
          defaults.ui.menu +
          "--" +
          defaults.data.menu[i].name +
          `" class="` +
          defaults.ui.menu +
          `--uimenuitem btn btn-link mb-32 ${defaults.ui.interactive} ${defaults.ui.interactive}--${i}"
            data-interactive-type="menu" data-interactive-item-index="${i}"
          href="` +
          defaults.data.menu[i].path +
          `">` +
          defaults.data.menu[i].svg +
          `<div id="` +
          defaults.ui.menu +
          `--bar" class="menu-bar ms-auto me-auto"></div>
                    </a>
                </div>
            `;
        defaults.sections.menu += newLocal;
      }
      defaults.sections.menu = `<div id="ui-left__menu">
            <div class="row flex-column g-0 no-gutters mx-5 text-center">${defaults.sections.menu}</div>
          </div>`;

      return defaults.sections.menu;
    },
    // change: function (id) {
    //   init.ui.update.deactivate(`.${defaults.ui.menu}--menuitem`);
    //   init.ui.update.activate(id);
    // },
  };

  return func;
};
