window._uiScroller = function (type, category, index, scrollerIndex) {
  const scroller = defaults.data.content[category][index];
  const content = scroller.content;
  const format = scroller.format;
  const title = scroller.title;

  defaults.interactive.virtual_menu.content.push({
    id: `${defaults.ui.scrollers}--${scrollerIndex}`,
    format: format,
    category: category,
    // active: false,
    type: "content",
    size: defaults.sections.scrollers_settings[format],
    items: [],
  });

  html = "";
  var items_html = "";

  if (type == "landscape") {
    scrollerH = defaults.sections.scrollers_settings.landscape.height;
    scrollerW = defaults.sections.scrollers_settings.landscape.width;
    scollerG = defaults.sections.scrollers_settings.landscape.gutter;
  } else if (type == "button") {
    scrollerH = defaults.sections.scrollers_settings.button.height;
    scrollerW = defaults.sections.scrollers_settings.button.width;
    scollerG = defaults.sections.scrollers_settings.button.gutter;
  } else if (type == "portrait") {
    scrollerH = defaults.sections.scrollers_settings.portrait.height;
    scrollerW = defaults.sections.scrollers_settings.portrait.width;
    scollerG = defaults.sections.scrollers_settings.portrait.gutter;
  }

  title_html = `
      <div class="row m-0 p-0 g-0">
        <div class="col">
          <div class="ff-os-b fs-md mb-2">${title}</div>
        </div>
      </div>
  `;

  if (type == "landscape") {
    for (let i = 0; i < content.length; i++) {
      defaults.interactive.virtual_menu.content[scrollerIndex].items.push({
        id: `${defaults.ui.scrollers}--${scrollerIndex}__item--${i}`,
        type: "item",
        // active: false,
        type: "content",
      });

      item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div id="${defaults.ui.scrollers}--${scrollerIndex}__item--${i}" class="scroller--items__item scroller--items__item--${i} ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} bg-white position-absolute" 
        data-interactive-type="content" data-interactive-item-index="${i}"
      style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
        <div class="row g-0 top--section h-70">
          <div class="col">
              <div class="row h-100 thumb g-0">
                <div class="col position-relative">
                  <div class="thumbnail position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('${content[i].thumb}')"></div>
                    <div class="dark-mask position-absolute h-50 w-100 bottom-0 ui__img"></div>
                      <div class="row g-0 position-absolute w-100 bottom-0">
                        <div class="col title">
                          <div class="text-white ff-os-b fs-md ms-3 mb-3 text-truncate">
                            ${content[i].title}
                          </div>
                        </div>
                        <div class="col-auto icon">
                          <div class="text-white me-3 pb-3 active-icon position-relative">
                            ${content[i].icon}
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="row g-0 bottom--section h-30 align-items-center">
            <div class="col-auto w-100">
              <div class="row flex-column g-0">
                <div class="col">
                  <div class="ms-3 text-black-1 text-uppercase ff-os-b fs-xxs text-truncate">
                    ${content[i].subtitle}
                  </div>
                </div>

                <div class="col">
                  <div class="ms-3 text-black-1 ff-os-r fs-xxs mt-1 text-truncate">
                    ${content[i].description}
                  </div>
                </div>

                <div class="col">
                  <div class="ms-3 text-grey-3 text-uppercase ff-os-b fs-xxs mt-1 text-truncate">
                    ${content[i].note}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
    }
  } else if (type == "button") {
    for (let i = 0; i < content.length; i++) {
      defaults.interactive.virtual_menu.content[scrollerIndex].items.push({
        id: `${defaults.ui.scrollers}--${scrollerIndex}__item--${i}`,
        type: "item",
        // active: false,
        type: "content",
      });
      item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div id="${defaults.ui.scrollers}--${scrollerIndex}__item--${i}" class="scroller--items__item scroller--items__item--${i} ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} bg-white position-absolute" 
      data-interactive-type="content" data-interactive-item-index="${i}"
      style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
        <div class="row g-0 top--section h-100 justify-content-center align-items-center text-center">
          <div class="col">
            <div class="ff-os-b fs-lg text-blue-2 text-uppercase">${content[i].title}</div>    
          </div>
        </div>
      </div>
    `;
    }
  } else if (type == "portrait") {
    for (let i = 0; i < content.length; i++) {
      defaults.interactive.virtual_menu.content[scrollerIndex].items.push({
        id: `${defaults.ui.scrollers}--${scrollerIndex}__item--${i}`,
        type: "item",
        // active: false,
        type: "content",
      });
      item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div id="${defaults.ui.scrollers}--${scrollerIndex}__item--${i}" class="scroller--items__item scroller--items__item--${i} ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} bg-white position-absolute" 
      data-interactive-type="content" data-interactive-item-index="${i}"
      style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
        <div class="row g-0 top--section h-90">
          <div class="col">
              <div class="row h-100 thumb g-0">
                <div class="col position-relative">
                  <div class="thumbnail position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('${content[i].thumb}')"></div>
                    <div class="dark-mask position-absolute h-50 w-100 bottom-0 ui__img"></div>
                      <div class="row g-0 position-absolute w-100 bottom-0">
                        <div class="col-9 title">
                          <div class="text-white ff-os-b fs-md ms-3 mb-3 text-truncate">
                            ${content[i].title}
                          </div>
                        </div>
                        <div class="col-3 icon text-center">
                          <div class="text-white me-3 pb-3 active-icon position-relative">
                            ${content[i].icon}
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="row g-0 bottom--section h-10 align-items-center">
            <div class="col-auto w-100">
              <div class="row flex-column g-0">
                <div class="col">
                  <div class="ms-3 text-black-1 text-uppercase ff-os-b fs-xxs text-truncate">
                    ${content[i].subtitle}
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
    `;
    }
  }

  scroller_html = `
    <div class="row g-0 mb-4">
      <div class="col">
        <div class="scroller scroller--${scrollerIndex} ${type}" style="height:${scrollerH}px;">
          <div class="scroller--items">
             ${items_html}
          </div>
        </div>
      </div>
    </div>
  `;

  html = title_html + scroller_html;
  return html;
};
