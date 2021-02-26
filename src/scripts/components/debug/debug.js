window._debug = function () {
  if (defaults.debug.key_press === true) {
    _osKeyPress();
    _osDetails();
    _osAutoRefresh();
  }

  var func = {
    id: defaults.ui.debug,
    html: function () {
      if (defaults.debug.active === true) {
        return `<div id="${init.utils.debug.id}" class="position-fixed text-white"></div>
            <div id="${init.utils.debug.id}__horazion" class="position-fixed"></div>
        </div>
        `;
      } else {
        return "";
      }
    },
    prepend: function (data) {
      $(`#${defaults.ui.debug}`).prepend(data);
    },
    show: function () {
      init.ui.update.show(this.id);
    },
    hide: function () {
      init.ui.update.hide(this.id);
    },
  };
  return func;
};

function _osDetails() {
  if (defaults.debug.os_details === true) {
    defaults.os = window._os();

    $(`#${defaults.ui.debug}`).append(
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

function _osAutoRefresh() {
  if (defaults.debug.auto_refresh === true) {
    if (defaults.os.system.x11 == true) {
      setInterval(function () {
        window.location = window.location;
      }, 5000);
    }
  }
}

function _osKeyPress() {
  document.addEventListener("keydown", function (event) {
    const newLocal = event.which;
    $("#" + defaults.ui.debug).prepend(
      `<div> Key Pressed Codd: ${newLocal}</div>`
    );
  });
}
