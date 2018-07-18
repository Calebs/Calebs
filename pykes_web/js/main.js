jQuery(document).ready(function($) {

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        scroll_top_duration = 1500;

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $('.to-top').addClass('is-visible'): $('.to-top').removeClass('is-visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $('.to-top').addClass('fade-out');
        }
    });

    //smooth scroll to top
    $('body').on('click', '.to-top', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // Smooth scroll down
    $('body').on('click', '.hero_down > a', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, scroll_top_duration);
                return false;
            }
        }
    });
    
     /* General Navigation*/

    //open/close primary navigation
    $('body').on('click', '.primary-nav-trigger', function() {
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('.main_header').toggleClass('menu-is-open');
        $('.main_header').toggleClass('is-active');
    });

    $('[data-toggle="tooltip"]').tooltip({
    });
    
    //primary navigation slide-in effect
    // Toggles the top-navs fixed and scroll state.
    var MQL = 992;

    if($(window).width() > MQL) {
      var headerHeight = $('.main_header').height();
      $(window).on('scroll', {
            previousTop: 0
        }, 
        function () {
          var currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop ) {
            //if scrolling up...
            if (currentTop > 0 && $('.main_header').hasClass('is-fixed')) {
              $('.main_header').addClass('is-visible');
            } else {
              $('.main_header').removeClass('is-visible is-fixed');
            }
          } else {
            //if scrolling down...
            $('.main_header').removeClass('is-visible');
            if( currentTop > headerHeight && !$('.main_header').hasClass('is-fixed')) $('.main_header').addClass('is-fixed');
          }
          this.previousTop = currentTop;
      });
    }
    
});