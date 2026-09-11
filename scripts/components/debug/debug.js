import { defaults } from "../../variables.js";
import { detectOS } from "../os/os.js";

export const debug = {
  id: defaults.ui.debug,
  setup: function () {
    if (defaults.debug.key_press === true) {
      osKeyPress();
      osDetails();
      osAutoRefresh();
    }
  },
  html: function () {
    if (defaults.debug.active === true) {
      return `<div id="${debug.id}" class="position-fixed text-white"></div>
          <div id="${debug.id}__horazion" class="position-fixed"></div>
      </div>
      `;
    } else {
      return "";
    }
  },
  prepend: function (data) {
    $(`#${debug.id}`).prepend(data);
  },
};

function osDetails() {
  if (defaults.debug.os_details === true) {
    defaults.os = detectOS();

    $(`#${debug.id}`).append(
      JSON.stringify(
        {
          browser: defaults.os.browser,
          engine: defaults.os.engine,
          system: defaults.os.system,
        },
        null,
        2
      )
    );
  }
}

function osAutoRefresh() {
  if (defaults.debug.auto_refresh === true) {
    if (defaults.os && defaults.os.system.x11 == true) {
      setInterval(function () {
        window.location = window.location;
      }, 5000);
    }
  }
}

function osKeyPress() {
  document.addEventListener("keydown", function (event) {
    debug.prepend(`<div> Key Pressed Code: ${event.which}</div>`);
  });
}
