jQuery(document).ready(function($) {
  var navToggle = $(".js-nav-toggle"),
    mainNav = $(".js-main-nav"),
    win = $(window),
    doc = $(document),
    fixedHeader = $(".main_header--fixed"),
    bannerContent = $(".hero-banner-item__content");


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
    //OPacity Parallax on hero-content
    var scrollTop = $(this).scrollTop();
    bannerContent.css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 + ((elementHeight - scrollTop) / elementHeight) * 0.9;
      }
    });
  });
  /* SLIDER */
  var slider = function(sliderElement) {
    if (sliderElement.length > 1) {
      sliderElement.each(function(index, element) {
        slider(sliderElement.eq(index));
      });
      return;
    }

    var self = this,
      slideIndex = 0,
      innerSlider = sliderElement.find(" .slider-wrap"),
      slides = innerSlider.find(" .hero-banner-item"),
      firstSlide = slides.first(),
      prevBtn = sliderElement.find(".prev-slide"),
      nextBtn = sliderElement.find(".next-slide");

    self.slideToIndex = function(index) {
      var maxSlideIndex = innerSlider.find(" .hero-banner-item").length - 1;

      if (index < 0) index = maxSlideIndex;
      else if (index > maxSlideIndex) index = 0;

      slideIndex = index;

      var scrollStepSize = firstSlide.width();
      var newScrollLeft = slideIndex * scrollStepSize;

      innerSlider.stop().animate({ scrollLeft: newScrollLeft });
    };

    self.sliderItem = function(next) {
      slideIndex = slideIndex + (next ? 1 : -1);
      self.slideToIndex(slideIndex);
    };

    prevBtn.click(function(e) {
      e.preventDefault();
      self.sliderItem(false);
    });
    nextBtn.click(function(e) {
      e.preventDefault();
      self.sliderItem(true);
    });

    innerSlider.scroll();
  };

  $(function() {
    var s = new slider($(".js-slider"));
    s.sliderItem(true);
    s.slideToIndex(3);
  });
});
