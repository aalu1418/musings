$(".excerpt > p").click(event => {
  $(event.target)
    .parent("div")
    .css("display", "none"); //hide excerpt div
  $(event.target)
    .parent("div")
    .siblings("div")
    .css("display", "block"); //show content div
});

$(document).ready(() => {
  $("h1, .subtitle").css("opacity", "1")
  const frontHeight = $(".frontPage").outerHeight(true) * 0.8;

  //fade in/out front page depending on scroll position
  $(window).scroll(() => {
    const space = frontHeight - $(window).scrollTop()
    if ( space > 0) {
      $(".rain-container").css("opacity", space/frontHeight);
    } else {
      $(".rain-container").css("opacity", 0)
    }
  })

})
