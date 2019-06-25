jQuery(document).ready(function($) {
 var navToggle = $(".js-nav-toggle"),
    mainNav = $(".js-main-nav"),
    win = $(window),
    doc = $(document),
    fixedHeader = $(".main_header--fixed");

  /* NAV TOGGLE */
  navToggle.click(function(e) {
    e.preventDefault();
    $(this).toggleClass("is--active");
    $(this)
      .parent()
      .find(mainNav)
      .toggleClass("is--active");
    $(this)
      .parent()
      .find(mainNav)
      .fadeToggle(300);
  });

  /* HEADER FIXED */
  win.scroll(function() {
    if (doc.scrollTop() > 100) {
      fixedHeader.addClass("is--active");
    } else {
      fixedHeader.removeClass("is--active");
    }
  });
});
