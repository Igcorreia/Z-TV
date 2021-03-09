window._settings = function () {
  var func = {
    id: defaults.ui.settings,
    html: function () {
      return `<div id="${init.utils.settings.id}" class="w-100 h-100 row bg-translucid justify-content-center align-items-center g-0 position-fixed">
                <div class="col-auto text-center">
                   <div class="ui_content bg-white shadow-md p-5">
                         <div class="mb-4">
                        <div class="ff-os-b fs-lg">What if Zillow was Netflix</div>
                    </div>  
                    <div class="ui-preloader__label ff-os-r fs-xs">
                        <p>
                            What if Zillow was Netflix is a side project made for fun. <br>This redesign concept has been created to practice my skills with no client restrictions.<br> The main goal was to design an interface and experience that 
I would create if given the opportunity.
                        </p>
                        <p class="mt-5 ff-os-b">Use your Keyboard to Navigate: <kbd><i class="fa fa-arrows"></i></kbd></p><p>Press any key to close instructions.</p>

                        <div class="mt-5">
                            <div class="ff-os-b fs-xs">Behance Design Project</div>
                            <a href="https://www.behance.net/gallery/113430881/What-if-Zillow-was-Netflix" target="_blank" class="mt-2 btn ui__interactive ui__interactive--0 me-3 ff-os-b fs-lg ui__interactive__item--active">Check the entire UI / UX project <i class="fa fa-arrow-right"></i></a>
                        </div>
                        <div class="mt-5">
                            
                        <div class="ff-os-b fs-xs">Author</div>
                            <div class="">Ignacio Correia (@igcorreia)</div>
                                                      
                            <div class="ff-os-b fs-xs mt-3">Follow</div>
                            <div><a href="http://twitter.com/igcorreia" target="_blank" rel="noopener" data-cke-saved-href="http://twitter.com/igcorreia">Twitter </a>~ <a href="https://dribbble.com/igcorreia" target="_blank" rel="noopener" data-cke-saved-href="https://dribbble.com/igcorreia">Dribbble </a>~&nbsp;<a href="http://codepen.io/igcorreia/" target="_blank" rel="noopener" data-cke-saved-href="http://codepen.io/igcorreia/">Codepen</a></div>
                            
                            <div class="ff-os-b fs-xs mt-3">Connect</div>
                            <div>@igcorreia<br />(Telegram, Instagram or Snapchat)</div>

                            <div class="ff-os-b fs-xs mt-3">Credits</div>
                            <div>​​​​​​​All the logo and brands are copyright by Zillow, Inc.<br />To learn more about the copyright visit: <a href="https://www.zillowgroup.com/terms-of-use/" target="_blank" rel="noopener" data-cke-saved-href="https://www.zillowgroup.com/terms-of-use/">https://www.zillowgroup.com/terms-of-use/</a></div>
                            <div>Photos from Unsplash</div>
                            <div>Icons some hand made other from FontAwesome</div>
                        </div>


                    </div>
                   </div>
                </div>
          </div>`;
    },
    show: function () {
      requestAnimationFrame(function () {
        $("#" + defaults.ui.settings).addClass(
          `${defaults.ui.events}--${defaults.suffix.show}`
        );
        $("#" + defaults.ui.settings).removeClass(
          `${defaults.ui.events}--${defaults.suffix.hide}`
        );
      });
    },
    hide: function () {
      requestAnimationFrame(function () {
        $("#" + defaults.ui.settings).addClass(
          defaults.ui.events + "--" + defaults.suffix.hide
        );
        $("#" + defaults.ui.settings).removeClass(
          defaults.ui.events + "--" + defaults.suffix.show
        );
      });
    },
  };
  return func;
};
