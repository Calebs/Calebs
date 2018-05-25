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

    /* Search form */

    $('body').on('input', '.search_input', function(){
        var parent_container = $(this).closest('.search_form');

        if(this.value) {
            parent_container.addClass('has_value');
        } else {
            parent_container.removeClass('has_value');
        }
    });

    $('[data-toggle="tooltip"]').tooltip({
    });
    
    /*Custom Selector*/
    var selector = $(".cst_selector"),
        target_container = $('.custom_selector');
        
    selector.on('click', function() {
        if ($(this).attr("checked"), true) {
            $(this).parents(".custom_selector").find(".selector_item").removeClass('selected');
            $(this).parents(".selector_item").addClass("selected");
        } else {
            $(this).parents(".selector_item").removeClass('selected');
        }
    });
    
    //open/close sidbar menu panel
    $("body").on('click','.menu_toggle > a', function() {
        event.stopPropagation();
        $('body').addClass('expand_filter');
    });
    
     //open/close sidbar menu panel
    $('body').on('click','.close_dialog', function(event) {
        event.stopPropagation();
        $('body').removeClass('expand_filter');
    });
    
    // Expand the business account switcher
    $('body').on('click','.act_switcher_toggle', function(event) {
        var parent_container = $(this).closest('.pane_cta');
        event.preventDefault();
        event.stopPropagation();
        parent_container.toggleClass('is_expanded');
    });

    /*Info tooltip*/
    
    var tip_trigger = $('.info_trigger'),
        info_container = $('.has_details');
    
    tip_trigger.on('click', function(e) {
        e.preventDefault();
        event.stopPropagation();
        $(this).parents('.has_details').toggleClass("info_open");
    });
    
    $(document).on('click', function() {
        if(info_container.hasClass('info_open')) {
           info_container.removeClass('info_open'); 
        }
    });
    
});