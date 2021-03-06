window._navigation_scroller = function () {
  content = defaults.data.ui.home.sections.main.content;
  scoller_settings = defaults.sections.scrollers_settings;

  var row = defaults.interactive.active.content.index;
  var col = defaults.interactive.active.item.index;

  var colW = scoller_settings[content[row].type].width;
  var colH = scoller_settings[content[row].type].height;
  var colG = scoller_settings[content[row].type].gutter;

  var scrollerSize = (-colW - colG) * col;

  var verticalH = 0;
  var verticalG = scoller_settings.title.height;

  for (let i = 0; i < row; i++) {
    verticalH += scoller_settings[content[i].type].height;
    verticalH += verticalG;

    $(".ui__scrollers_horizontal--row")
      .eq(i)
      .addClass("ui__scrollers_horizontal--row--hide");
  }

  for (let a = content.length; a >= row; a--) {
    $(".ui__scrollers_horizontal--row")
      .eq(i)
      .removeClass("ui__scrollers_horizontal--row--hide");
  }

  console.log(row + " - " + col + " - " + verticalH);

  $(".ui__scrollers--selector").attr(
    "style",
    `width:${colW}px;height:${colH}px`
  );

  $(".scroller_vertical--items").attr(
    "style",
    `transform: translate3d(0px,-${verticalH}px, 0px);`
  );

  $(".scroller--items")
    .eq(row)
    .attr("style", `transform: translate3d(${scrollerSize}px, 0px, 0px);`);
};
