import { defaults } from "../../variables.js";

export const brand = {
  id: defaults.ui.brand,
  html: function () {
    return `<div id="${brand.id}" class="position-fixed brand bottom-0 end-0 ">
          <div class="row g-0">
              <div class="col">
               ${defaults.data.branding.logo.svg}
              </div>
          </div>
      </div>`;
  },
};
