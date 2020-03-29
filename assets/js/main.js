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
})
