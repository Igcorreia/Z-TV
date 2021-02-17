/*
 *
 *
 */

var defaults = {
  debug: true,
  mode: "prod",
  ui: "",
  nav: "",
  homepage: "",
  collections: "",
  brand: `<svg id="Logo_with_Mark" data-name="Logo with Mark" xmlns="http://www.w3.org/2000/svg" width="302.556" height="63" viewBox="0 0 302.556 63"> <g id="Logo" transform="translate(79.198 3)"> <path id="Path_1" data-name="Path 1" d="M147.821,43.748c0-11.695,9.124-20.209,20.475-20.209,11.243,0,20.475,8.514,20.475,20.209,0,11.726-9.232,20.209-20.475,20.209C156.946,63.942,147.821,55.474,147.821,43.748ZM77.734,9.548V11.88c0,.885-.618,1.192-.787,1.555L54.9,51.521c-.045.063.692,0,.787,0H78.521V63.18H36.784V60.848a4.115,4.115,0,0,1,.787-2.332L58.834,21.207c.045-.078.093-.777,0-.777H37.571V9.548ZM213.184,63.18H201.371L189.559,24.316h11.813l3.938,11.659c1.165,3.856,3.15,10.882,3.15,10.882.031.095-.014.078,0,0,0,0,2-7.169,3.15-10.882l3.938-11.659h8.663l3.15,11.659c1.213,3.983,3.15,10.882,3.15,10.882.029.095.74.095.788,0,0,0,1.985-6.98,3.15-10.882l3.15-11.659h11.025L236.809,63.18H225.784l-3.15-10.1c-1.153-3.793-3.15-10.882-3.15-10.882-.031-.095.014-.095,0,0,0,0-1.923,7.009-3.15,10.882ZM99,63.18H86.4V24.316H99Zm8.662-59.073h12.6V63.18h-12.6Zm22.05,0h11.813V63.18H129.709Zm47.25,39.641c0-5.721-3.9-9.327-8.663-9.327-4.866,0-8.662,3.606-8.662,9.327,0,5.77,3.8,9.327,8.662,9.327C173.054,53.078,176.959,49.517,176.959,43.748Zm77.963-28.759a4.764,4.764,0,0,0-4.725,4.664,4.725,4.725,0,0,0,9.45,0A4.764,4.764,0,0,0,254.921,14.989Zm0,8.55a4.057,4.057,0,0,1-3.937-3.886,3.938,3.938,0,0,1,7.875,0A4.056,4.056,0,0,1,254.921,23.539Zm0-6.218c1.057,0,2.362.463,2.362,1.555,0,.836-.905,1.287-1.575,1.555l1.575,1.555h-1.575l-.787-1.555h-.788v1.555h-.788V17.321Zm0,.777h-.788v1.555h.788c.576,0,1.575-.148,1.575-.777S255.5,18.1,254.921,18.1ZM92.7,4.884a7.116,7.116,0,0,1,7.088,7,7.088,7.088,0,0,1-14.175,0A7.112,7.112,0,0,1,92.7,4.884Z" transform="translate(-36.784 -4.107)" fill="#006aff" /> </g> <g id="Mark"> <path id="Path_2" data-name="Path 2" d="M14.963,55.254a.71.71,0,0,1-.788,0L9.45,49.032a.674.674,0,0,1,0-.778c4.03-5.994,12.08-15.494,17.325-19.441.094-.063.11-.049,0,0C21.312,30.621,5.744,37.958,0,41.256v21H55.913V42.033C48.3,43.348,25.344,49.831,14.963,55.254ZM37.8,17.148c.281-.063.617-.19.787,0,.968,1.093,3.884,5.175,4.725,6.221.156.19.125-.11,0,0A115.441,115.441,0,0,0,25.988,40.478c-.077.112-.062.017,0,0,6.743-2.949,22.79-7.239,29.925-8.554V22.592L28.35.04,0,22.592V32.7C8.662,27.471,28.715,19.446,37.8,17.148Z" transform="translate(0 -0.04)" fill="#006aff" /> </g> </svg>`,
  items: "",
};

console.log("-- APP LOADED --");

var init = {
  debug: {
    inject: function () {},
    open: function () {},
    close: function () {},
    destroy: function () {},
  },
  preloader: {
    inject: function () {},
    open: function () {},
    close: function () {},
    destroy: function () {},
  },
  utils: {
    nav: function () {},
    brand: {
      html:
        `
        <div class="position-fixed bottom-0 end-0 pb-5 pe-5 pt-5 ps-5" id="brand">
            <div class="row g-0">
                <div class="col">
                 ` +
        defaults.brand +
        `
                </div>
            </div>
        </div>`,
      inject: function () {
        $("body").append(this.html);
      },
    },
    horizon: {
      html: '<div id="horazion" class="position-fixed"></div>',
      inject: function () {
        $("body").append(this.html);
      },
    },
  },
  ui: {
    general: {
      html: `
            <div id="UI" class="row h-100 w-100 g-0 no-gutters align-items-center justify-content-center position-fixed top-0 start-0">
                <div id="UI-LEFT" class="col-auto"></div>
                <div id="UI-RIGTH" class="col h-100"></div>
            </div>
            `,
      inject: function () {
        $("body").append(this.html);
      },
    },
    detail: {
      inject: function () {},
      open: function () {},
      close: function () {},
      destroy: function () {},
    },
    menu: {
      inject: function () {},
      open: function () {},
      close: function () {},
      destroy: function () {},
    },
    hscroller: {
      inject: function () {},
      open: function () {},
      close: function () {},
      destroy: function () {},
    },
  },
  startup: function () {
    console.log("-- STARTUP --");
    this.ui.general.inject();
    this.utils.horizon.inject();
    this.utils.brand.inject();
  },
};

window.addEventListener("DOMContentLoaded", function () {
  init.startup();
});

console.log("-- APP END --");
