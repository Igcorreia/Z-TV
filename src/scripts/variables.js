window.defaults = {
  mode: "prod",
  root: "#root",
  os: null,
  data: null,
  data_url: "https://next.json-generator.com/api/json/get/V13KQEB-c",
  introsound: new Audio("/src/audio/bell.wav"),
  debug: {
    active: false,
    auto_refresh: true,
    key_press: true,
    os_details: true,
  },
  suffix: {
    show: "show",
    hide: "hide",
    active: "active",
    prepare_animate: "prepare-animation",
    animate: "animate",
  },
  sections: {
    menu: "",
    menu_default: "home",
    featured: "",
    scrollers: "",
    scrollers_settings: {
      landscape: {
        height: 300,
        width: 400,
        gutter: 25,
      },
      portrait: {
        height: 450,
        width: 240,
        gutter: 25,
      },
      buttons: {
        width: 150,
        height: 100,
        gutter: 25,
      },
    },
    preloader_status: true,
    preloader_aimation_duration: 1250,
  },
  ui: {
    debug: "ui__debug",
    preloader: "ui__preloader",
    navigation: "ui__navigation",
    brand: "ui__brand",
    menu: "ui__menu",
    events: "ui__event",
    featured: "ui__featured",
    scrollers: "ui__scrollers",
  },
  signature: `
/***********************************************************
 ***********************************************************
 ** 
 **  👋 Hi there, I am Ignacio, welcome.                     
 ** 
 **  Thanks for visiting, please leave a like or follow me.
 ** 
 **  You may find me @igcorreia on 🐦, 😏📘, 👾
 ** 
 **  --> If you are hiring, I am looking for a fulltime job
 **  --> I am from Europe (Portugal)
 **  --> UI, UX, PRODUCT DESIGN
 **  --> ignacio . r . correia (at) gmail . com
 ** 
 ***********************************************************
 ************************************************************/
`,
};