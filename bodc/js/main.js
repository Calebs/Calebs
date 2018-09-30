jQuery(document).ready(function($) {

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        scroll_top_duration = 1500,
        $back_to_top = $('.to-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible'): $back_to_top.removeClass('is-visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    /* General Navigation*/

    //primary navigation slide-in effect
    // Toggles the top-navs fixed and scroll state.
    var MQL = 992;

    if ($(window).width() > MQL) {
        var main_headerHeight = $('.main_header').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();

                // once you scrolling down...
                if (currentTop > main_headerHeight) {
                    $('.main_header').addClass('is-fixed');
                } else {
                    $('.main_header').removeClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }

    //open/close primary navigation
    $('.primary-nav-trigger').on('click', function() {
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('.main_header').toggleClass('menu-is-open');
        $('.main_header').toggleClass('is-active');
        $('body').addClass('overflow-hidden');
    });

});