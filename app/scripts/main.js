(function() {
  "use strict";

  var MainController = function () {
    this.carouselActive = 1;

    this.init = function () {
      this.registerElements();
      this.registerHandlers();
      this.registerCarouselTimer();
    };

    this.registerElements = function () {
      this.carousel = $('[data-carousel');
      this.carouselThumbs = $('[data-carousel-thumbs] [data-slide-id]');
      this.carouselSlides = $('[data-carousel-slides] [data-slide]');
    };

    this.registerHandlers = function () {
      var self = this;

      this.carouselThumbs.on('click', function (evt) {
        self.activateCarousel($(this).attr('data-slide-id'));
      }); 
    };

    this.activateCarousel = function (id) {
      this.carouselThumbs.removeClass('active');
      this.carouselThumbs.filter('[data-slide-id="'+id+'"]').addClass('active');

      this.carouselSlides.removeClass('carousel-active');
      this.carouselSlides.filter('[data-slide="'+id+'"]').addClass('carousel-active');
    };  

    this.registerCarouselTimer = function () {
      setInterval(function () {
        var isHovered = this.carousel.is(":hover");
        console.log('cursor in hitbox? : ' + isHovered);
      }.bind(this), 300);
    };

    this.rotateSlides = function () {

    };  
  };

  var mainCtrl = new MainController();
  mainCtrl.init();  
})();
