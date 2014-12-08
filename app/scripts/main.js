(function() {
  'use strict';

  var MainController = function () {
    this.carouselActive = 1;
    this.carouselRotateSpeed = 5000;  // How often the carousel rotates with no user interaction
    this.carouselHitboxInterval = 100;  // How often we check the hitbox -- can be increased for more performance
    this.debugMode = false;
    this.numSlides = 4;

    if (this.debugMode) {
      this.carouselRotateSpeed = 1000; 
    }

    this.init = function () {
      this.registerElements();
      this.registerHandlers();
      this.registerCarouselTimer();
    };

    this.registerElements = function () {
      this.carousel = $('[data-carousel]');
      this.carouselThumbs = $('[data-carousel-thumbs] [data-slide-id]');
      this.carouselSlides = $('[data-carousel-slides] [data-slide]');

      this.carouselThumbNum = this.carouselThumbs.length;
      this.carouselSlideNum = this.carouselSlides.length;

      if (this.carouselThumbs.length === this.carouselSlides.length) {
        this.numSlides = this.carouselThumbs.length;
      } else {
        throw 'Uh-oh!  Number of thumbs does not match number of slides for the carousel element.';
      }

      this.navbar = $('[data-tab-navigation]');
      this.navbarTabs = $('[data-tab-navigation] li');
      this.navbarTabContent = $('[data-tab-content]');
      this.tabContent = $('[data-page="content"]');
      this.tabNoContent = $('[data-page="nocontent"]');

      this.collapseCtrls = $('[data-collapse-ctrl]');
      this.collapseBodies = $('[data-collapse-body]');
    };

    this.registerHandlers = function () {
      var self = this;

      this.carouselThumbs.on('click', function () {
        self.activateCarousel($(this).attr('data-slide-id'));
      }); 

      this.navbarTabs.on('click', function () {
        self.activateTab($(this));
      });

      this.collapseCtrls.on('click', function () {
        var collapseID = $(this).attr('data-collapse-ctrl');
        self.collapseBodies.filter('[data-collapse-body="'+collapseID+'"]').toggleClass('collapsed');
      });
    };

    this.activateTab = function ($tab) {
      var page = $tab.attr('data-page');

      if (page === "4") {
        this.tabContent.show();
        this.tabNoContent.hide();
      } else {
        this.tabContent.hide();
        this.tabNoContent.show();
      }

      this.navbarTabs.removeClass('active');
      $tab.addClass('active');
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

      this.carousel.hover(function () {
        $(this).toggleClass('hover');
      })

      this.carouselTimer = setInterval(function () {
        var carouselHovered = this.carousel.hasClass('hover');
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
    };

    this.rotateSlides = function () {
      var activeThumbID = this.carouselThumbs.filter('.active').attr('data-slide-id');
      var carouselNextID = (parseInt(activeThumbID) % this.numSlides) + 1;
      this.activateCarousel(carouselNextID);
    };
  };

  $(document).ready(function () {
    var mainCtrl = new MainController();
    mainCtrl.init();  
  });
})();