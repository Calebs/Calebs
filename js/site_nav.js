$(function() {

    var main_container = $('.sd-main-content'),
        nav_button = $('.primary-nav-trigger'),
        off_canvas_menu = $(".st-menu"),
        side_nav = $(".aside_content"),
        main_content = $(".main_content"),
        filter_bar = $(".content_aside"),
        filter_trigger = $('.panel_handle'),
        sub_nav = $('.left_nav'),
        resetMenu = function() {
            main_container.removeClass('st-menu-open');
        };

    var resizing = false;
    moveNavigation();
    $(window).on('resize', function() {
        if (!resizing) {
            (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300): window.requestAnimationFrame(moveNavigation);
            resizing = true;
        }
    });

    function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.sd-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    }

    function moveNavigation() {
        var mq = checkMQ();

        if (mq == 'mobile') {
            detachElements();
            side_nav.appendTo(off_canvas_menu);
            sub_nav.appendTo(off_canvas_menu);
            filter_bar.addClass("panel_rendered");
        } else if ((mq == 'tablet') || (mq == 'desktop')) {
            resetMenu();
            detachElements();
            filter_bar.removeClass("panel_rendered");
            side_nav.insertBefore(main_content);
        }
        resizing = false;
    }

    function detachElements() {
        side_nav.detach();
    }

    nav_button.on("click", function() {
        $('.menu-icon').toggleClass('is-clicked');
        event.preventDefault();
        event.stopPropagation();
        setTimeout(function() {
            main_container.toggleClass('st-menu-open');
            $('body').toggleClass('overflow-hidden');
        }, 25);
    });


    /*Alert*/
        
    /*Responsive mobile nav script*/
    var openTray = $('.has_sub > .mainTrigger');
    
    openTray.on('click', function(e) {
        e.preventDefault();
        event.stopPropagation();
        $(this).parents(".mobile_nav").find(".linkNavMain").removeClass('showTray');
        $(this).parents(".linkNavMain").addClass('showTray');
    });

    $(document).on('click', function() {
        if (main_container.hasClass('st-menu-open')) {
            main_container.removeClass('st-menu-open');
            $('.menu-icon').toggleClass('is-clicked');
        }
        $('body').removeClass('overflow-hidden');
    });
});