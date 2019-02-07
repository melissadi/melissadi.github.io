$('.navButtons>li').hover(
  function () {
    $("ul",this).removeClass("hide");
  },
  function () {
    $('ul', this).addClass("hide");
  }
);
