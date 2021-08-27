window._featured = function () {
  var func = {
    id: defaults.ui.featured,
    html: function () {
      defaults.sections.featured =
        `<div id="${init.ui.featured.id}" class="row g-0 h-80 w-100 position-relative">
            <div class="col w-100 h-100">
             
            </div>
          </div>
        `;
      return defaults.sections.featured;
    },
    // animate: function (sel) {
    //   requestAnimationFrame(function () {
    //     $(sel)
    //       .addClass(`${defaults.ui.events}--${defaults.suffix.prepare_animate}`)
    //       .addClass(`${defaults.ui.events}--${defaults.suffix.animate}`);
    //   });
    // },
    create: function(content){
      let html = func.section(content);
      $('.ui__featured--front').addClass('ui__event--animate-hidden');
      $(`#${init.ui.featured.id} > div`).prepend(html);

      setTimeout(() => {
        requestAnimationFrame(function () {
          $('.ui__featured--front').eq(0)
            .addClass(`${defaults.ui.events}--${defaults.suffix.prepare_animate}`)
            .addClass(`${defaults.ui.events}--${defaults.suffix.animate}`);
            setTimeout(() => {
              $('.ui__event--animate-hidden').slice(1).remove();
            }, 1500);
        });
      }, 10);

      //func.animate($('.ui__featured--front').eq(0));

      // if($('.ui__featured--front').length > 1){
      //   $('.ui__featured--front').last().fadeOut('slow').remove();
      // }
      
      // console.log(html);
    },
    section: function(content){

        if(content === undefined){
          content = defaults.data.ui.home.sections.featured.content;
        }

        let _buttons_html = function () {
          let buttons = "";

          for (let i = 0;i < content.buttons.length;i++) {
            defaults.interactive.featured.push({
              id: `${init.ui.featured.id}__button--${i}`,
              // active: false,
              type: "featured",
            });

            buttons +=
              `<div class="col-auto">
                <div id="${init.ui.featured.id}__button--${i}" class="btn ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} me-3 ff-os-b fs-lg"
                  data-interactive-type="featured" data-interactive-item-index="${i}">
                    <i class="fas fa-${content.buttons[i].icon}"></i>
                    <span class=""> ${content.buttons[i].title}</span>
                </div>
              </div>`;
          }
          return buttons;
        };

        defaults.sections.featured =
          `
                <div class="${init.ui.featured.id}--front w-100 h-100 position-absolute overflow-hidden">
                  <div class="${init.ui.featured.id}--front__section h-100 position-relative">
                  <div class="${init.ui.featured.id}--content row position-absolute h-60 w-100 justify-content-start align-items-center g-0">
                      <div class="col-auto">
                        <div class="${init.ui.featured.id}--front__content" class="position-relative">
                          <div class="row flex-column g-0">
                            <div class="col">
                              <div class="${init.ui.featured.id}--content-icon row justify-content-center align-items-center g-0 mb-3">
                                  <div class="col-auto">${content.icon}</div><div class="col"> <div class="text-blue-2 ff-os-b fs-lg mx-3">${content.label}</div></div>
                              </div>
                              <div class="${init.ui.featured.id}--content-title fs-xxl text-block-1 ff-os-b m-0 p-0 mb-3 text-sd-md">${content.title}</div>
                              <div class="${init.ui.featured.id}--content-description fs-xl text-block-1 m-0 p-0 mb-3 text-sd-md">${content.subtitle}</div>
                              <div class="${init.ui.featured.id}--content-note fs-lg text-block-1 m-0 p-0 mb-3 text-sd-md">${content.description}</div>
                              <div class="${init.ui.featured.id}--content-address fs-md text-block-1 ff-os-sb m-0 p-0 mb-3 text-grey-4 text-sd-md">${content.note}</div>
                            </div>
                            <div class="${init.ui.featured.id}--content-actions row justify-content-start align-items-center g-0">${_buttons_html()}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  <div id="${init.ui.featured.id}--front__mask" class="position-absolute w-100 h-100">
                    <div class="${init.ui.featured.id}--front__mask--left"></div>
                    <div class="${init.ui.featured.id}--front__mask--bottom"></div>
                  </div> 
                  <div class="${init.ui.featured.id}--front__image" class="position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('${content.image}')">
                    </div>          
                   
                  </div>
                </div>

          `;
        return defaults.sections.featured;
    },
    changeContent: function(
      sectionIndex, 
      sectionId, 
      itemIndex,
      itemId,
      itemType,
      itemSubtype
    ){
      if(itemSubtype === 'landscape' || itemSubtype === 'portrait'){
        let contentIndex = defaults.data.ui.home.sections.main.content[sectionIndex].index;
        let contentCategory = defaults.data.ui.home.sections.main.content[sectionIndex].category;
        let data = defaults.data.content[contentCategory][contentIndex].content[itemIndex];
        let featureSection = 
          {
            "icon": defaults.data.ui.home.sections.featured.content.icon,
            "note": data.note,
            "image": data.thumb + data.hd_width + 'x' + data.hd_height,
            "label": "Exclusive",
            "thumb": data.thumb + data.thumb_width + 'x' + data.thumb_height,
            "title": data.title,
            "buttons": [
                {
                    "icon": "caret-right",
                    "style": "solid",
                    "title": "3D Tour"
                },
                {
                    "icon": "caret-right",
                    "style": "outline",
                    "title": "Contact Agent"
                }
            ],
            "subtitle": data.subtitle,
            "description": data.description
        };

      func.create(featureSection);
        
      }
    }
  };

  return func;
};
