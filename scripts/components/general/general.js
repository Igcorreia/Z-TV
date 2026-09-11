import { defaults } from "../../variables.js";
import { preloader } from "../preloader/preloader.js";
import { menu } from "../menu/menu.js";
import { featured } from "../featured/featured.js";
import { scrollers } from "../scroller/scroller.js";
import { brand } from "../brand/brand.js";
import { debug } from "../debug/debug.js";

export const general = {
  html: function () {
    return (
      preloader.html() +
      `
          <div id="ui" class="row h-100 w-100 g-0 no-gutters align-items-center justify-content-center position-fixed top-0 start-0" g-0>
              <div id="ui__left" class="col-auto h-100 position-relative">` +
      menu.html() +
      `</div>
              <div id="ui__right" class="col h-100  position-relative">` +
      featured.html() +
      scrollers.html() +
      brand.html() +
      `</div>
          </div>
          ` +
      debug.html()
    );
  },
  inject: function () {
    $(defaults.root).append(general.html());
    featured.create();
  },
  focus: {
    top: function () {
      $("#ui__right").addClass(`${defaults.ui.interactive}__top--active`);
    },
    left: function () {
      $("#ui__left").addClass(`${defaults.ui.interactive}__left--active`);
    },
    bottom: function () {
      $("#ui__scrollers").addClass(
        `${defaults.ui.interactive}__bottom--active`
      );
    },
  },
  blur: {
    top: function () {
      $("#ui__right").removeClass(`${defaults.ui.interactive}__top--active`);
    },
    left: function () {
      $("#ui__left").removeClass(`${defaults.ui.interactive}__left--active`);
    },
    bottom: function () {
      $("#ui__scrollers").removeClass(
        `${defaults.ui.interactive}__bottom--active`
      );
    },
  },
};
