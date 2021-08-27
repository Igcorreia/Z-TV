window._uiScroller = function (type, category, index, scrollerIndex) {
  const scroller = defaults.data.content[category][index];
  const content = scroller.content;
  const format = scroller.format;
  const title = scroller.title;

  defaults.interactive.content.push({
    id: `${defaults.ui.scrollers}--${scrollerIndex}`,
    format: format,
    category: category,
    // active: false,
    type: "content",
    size: defaults.sections.scrollers_settings[format],
    items: [],
  });

  let html = "";
  var items_html = "";
  let scrollerH = 0;
  let scrollerW = 0;
  let scollerG = 0;

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

  let title_html = `
      <div class="row m-0 p-0 g-0">
        <div class="col">
          <div class="ff-os-b fs-md mb-2">${title}</div>
        </div>
      </div>
  `;

  
  if (type == "landscape") {
    for (let i = 0; i < content.length; i++) {
      defaults.interactive.content[scrollerIndex].items.push({
        id: `${defaults.ui.scrollers}--${scrollerIndex}__item--${i}`,
        // type: "item",
        // active: false,
        type: "content",
        subtype: "landscape",
        index: i,
      });

      let item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div id="${defaults.ui.scrollers}--${scrollerIndex}__item--${i}" class="scroller--items__item scroller--items__item--${i} ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} bg-white position-absolute" 
        data-interactive-type="content" data-interactive-item-index="${i}"
      style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
      <div class="${defaults.ui.scrollers}__item-selector"></div>  
      <div class="row g-0 top--section h-70">
          <div class="col">
              <div class="row h-100 thumb g-0">
                <div class="col position-relative">
                <div class="icon3d position-absolute ui__icon3d"><svg xmlns="http://www.w3.org/2000/svg" width="56.601" height="47.312" viewBox="0 0 56.601 47.312"> <g id="Group_55" data-name="Group 55" transform="translate(-3631.7 -1747.081)"> <text id="_3D" data-name="3D" transform="translate(3642 1782)" fill="#fff" font-size="29" font-family="Stem-Bold, Stem" font-weight="700"><tspan x="0" y="0">3D</tspan></text> <g id="Group_53" data-name="Group 53" transform="translate(1908.237 5385.081) rotate(-90)"> <path id="Path_51" data-name="Path 51" d="M3610.688,1777.377s10.83,1.937,10.83-8.168" transform="translate(11 1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/> <g id="Polygon_3" data-name="Polygon 3" transform="translate(3627 1765)" fill="#fff" stroke-linecap="round" stroke-linejoin="round"> <path d="M 8.942539215087891 5.999998569488525 L 2.057459592819214 5.999998569488525 L 5.499999523162842 1.618588805198669 L 8.942539215087891 5.999998569488525 C 8.942532539367676 5.999993801116943 8.942531585693359 5.999996185302734 8.942530632019043 5.999998569488525 L 8.942539215087891 5.999998569488525 Z" stroke="none"/> <path d="M 5.500003814697266 3.237176418304443 L 4.114931583404541 4.999999046325684 L 6.885076999664307 4.999999046325684 L 5.500003814697266 3.237176418304443 M 5.499999523162842 0.61859130859375 C 5.793064594268799 0.61859130859375 6.086129665374756 0.7459836006164551 6.286319732666016 1.000768661499023 L 9.728859901428223 5.382178783416748 C 10.2443790435791 6.038308620452881 9.776969909667969 6.999999046325684 8.942539215087891 6.999999046325684 L 2.057459831237793 6.999999046325684 C 1.223029136657715 6.999999046325684 0.7556190490722656 6.038308620452881 1.271149635314941 5.382178783416748 L 4.713679313659668 1.000768661499023 C 4.913869380950928 0.7459836006164551 5.206934452056885 0.61859130859375 5.499999523162842 0.61859130859375 Z" stroke="none" fill="#fff"/> </g> </g> <g id="Group_54" data-name="Group 54" transform="translate(5411.763 -1843.607) rotate(90)"> <path id="Path_51-2" data-name="Path 51" d="M3610.688,1777.377s10.83,1.937,10.83-8.168" transform="translate(11 1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/> <g id="Polygon_3-2" data-name="Polygon 3" transform="translate(3627 1765)" fill="#fff" stroke-linecap="round" stroke-linejoin="round"> <path d="M 8.942539215087891 5.999998569488525 L 2.057459592819214 5.999998569488525 L 5.499999523162842 1.618588805198669 L 8.942539215087891 5.999998569488525 C 8.942532539367676 5.999993801116943 8.942531585693359 5.999996185302734 8.942530632019043 5.999998569488525 L 8.942539215087891 5.999998569488525 Z" stroke="none"/> <path d="M 5.500003814697266 3.237176418304443 L 4.114931583404541 4.999999046325684 L 6.885076999664307 4.999999046325684 L 5.500003814697266 3.237176418304443 M 5.499999523162842 0.61859130859375 C 5.793064594268799 0.61859130859375 6.086129665374756 0.7459836006164551 6.286319732666016 1.000768661499023 L 9.728859901428223 5.382178783416748 C 10.2443790435791 6.038308620452881 9.776969909667969 6.999999046325684 8.942539215087891 6.999999046325684 L 2.057459831237793 6.999999046325684 C 1.223029136657715 6.999999046325684 0.7556190490722656 6.038308620452881 1.271149635314941 5.382178783416748 L 4.713679313659668 1.000768661499023 C 4.913869380950928 0.7459836006164551 5.206934452056885 0.61859130859375 5.499999523162842 0.61859130859375 Z" stroke="none" fill="#fff"/> </g> </g> </g> </svg></div>
                  <div class="thumbnail position-absolute ui__img img-bg-fit w-100 h-100" style="background-image:url('${content[i].thumb}${content[i].thumb_width}x${content[i].thumb_height}')"></div>
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
      defaults.interactive.content[scrollerIndex].items.push({
        id: `${defaults.ui.scrollers}--${scrollerIndex}__item--${i}`,
        // type: "item",
        // active: false,
        type: "content",
        subtype: "button",
        index: i,
      });
      
      let item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div id="${defaults.ui.scrollers}--${scrollerIndex}__item--${i}" class="scroller--items__item scroller--items__item--${i} ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} bg-white position-absolute" 
      data-interactive-type="content" data-interactive-item-index="${i}"
      style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
      <div class="${defaults.ui.scrollers}__item-selector"></div>  
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
      defaults.interactive.content[scrollerIndex].items.push({
        id: `${defaults.ui.scrollers}--${scrollerIndex}__item--${i}`,
        // type: "item",
        // active: false,
        type: "content",
        subtype: "portrait",
        index: i,
      });
      
      let item_x_pos = (scrollerW + scollerG) * i;

      items_html += `
      <div id="${defaults.ui.scrollers}--${scrollerIndex}__item--${i}" class="scroller--items__item scroller--items__item--${i} ${defaults.ui.interactive} ${defaults.ui.interactive}--${i} bg-white position-absolute" 
      data-interactive-type="content" data-interactive-item-index="${i}"
      style="height:${scrollerH}px; width:${scrollerW}px; transform:translate3d(${item_x_pos}px,0,0)">
      <div class="${defaults.ui.scrollers}__item-selector"></div>  
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

  let scroller_html = `
    
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

  html = `<div class="${defaults.ui.scrollers}_horizontal--row">${title_html}${scroller_html}</div>`;
  return html;
};
