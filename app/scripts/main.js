(function() {
  "use strict";

  var MainController = function () {
    this.carouselActive = 1;
    this.carouselRotateSpeed = 1000;  // How often the carousel rotates with no user interaction
    this.carouselHitboxInterval = 100;  // How often we check the hitbox -- can be increased for more performance
    this.debugMode = false;
    this.numSlides = 4;

    this.init = function () {
      this.registerElements();
      this.registerHandlers();
      this.registerCarouselTimer();
    };

    this.registerElements = function () {
      this.carousel = $('[data-carousel');
      this.carouselThumbs = $('[data-carousel-thumbs] [data-slide-id]');
      this.carouselSlides = $('[data-carousel-slides] [data-slide]');

      this.carouselThumbNum = this.carouselThumbs.length;
      this.carouselSlideNum = this.carouselSlides.length;

      if (this.carouselThumbs.length === this.carouselSlides.length) {
        this.numSlides = this.carouselThumbs.length;
      } else {
        throw "Uh-oh!  Number of thumbs does not match number of slides for the carousel element.";
      }
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

    /* This function registers a timer, which rotates the carousel's active slide every 5 seconds (default) the cursor remains outside the carousel's hitbox */
    this.registerCarouselTimer = function () {
      this.carouselRotateTimer = 0;

      this.carouselTimer = setInterval(function () {
        var carouselHovered = this.carousel.is(":hover");
        this.carouselRotateTimer = (carouselHovered) ? 0 : this.carouselRotateTimer + this.carouselHitboxInterval;
        if (this.debugMode) {
          console.log('Time since last rotate = ' + this.carouselRotateTimer);
        }

        if (this.carouselRotateTimer > this.carouselRotateSpeed) {
          this.rotateSlides();
          this.carouselRotateTimer = 0;
        }
      }.bind(this), this.carouselHitboxInterval);
    };

    this.stopCarouselTimer = function () {
      clearInterval(this.carouselTimer);
    }

    this.rotateSlides = function () {
      var activeThumbID = this.carouselThumbs.filter('.active').attr('data-slide-id');
      var carouselNextID = (parseInt(activeThumbID) % this.numSlides) + 1;
      this.activateCarousel(carouselNextID);
    };
  };

  var mainCtrl = new MainController();
  mainCtrl.init();  
})();
