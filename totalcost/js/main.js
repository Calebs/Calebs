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

    $('[data-toggle="tooltip"]').tooltip({
    });

    // Smooth scroll down
    $('.hero_down > a').click(function() {
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
    
    /*Services list filter on mobile*/
    
    //open/close Filter panel
    $("body").on('click','.toggle_filter', function() {
        event.stopPropagation();
        $('body').addClass('expand_filter');
    });
    
    //open/close Filter panel
    $('body').on('click','.flWidget_Header > .close_dialog', function(event) {
        event.stopPropagation();
        closeFilter();
    });
    
    $('.widget_overlay').on('click', function(){
		closeFilter();
	});
    
    function closeFilter() {
		$('body').removeClass('expand_filter');
	}

    /* General Navigation*/

    //open/close primary navigation
    $('.primary-nav-trigger').on('click', function() {
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('.main_header').toggleClass('menu-is-open');
        $('.main_header').toggleClass('is-active');
    });

    //open search widget
    $('.btn_search_trigger > a').on('click', function() {
        event.stopPropagation();
        $('.navbar_search_form').addClass('has_value');
        $('.main_header').addClass('show_search');
    });

    $('.navbar_search_reset').on('click', function() {
        event.stopPropagation();
        if($('.main_header').hasClass('show_search')) {
            $('.main_header').removeClass('show_search');
        }
    });

    $('.form-control').on('input', function() {
        var $input_field = $(this).closest('.funky_form');
        if (this.value) {
            $input_field.addClass('not_empty');
        } else {
            $input_field.removeClass('not_empty');
        }
    });

    $('.navbar_search_input').on('input', function(){
        var parent_container = $(this).closest('.navbar_search_form');

        if(this.value) {
            parent_container.addClass('has_value');
        } else if (!($('.main_header').hasClass('show_search'))) {
            parent_container.removeClass('has_value');
        }
    });

    var subNav = $(".sticky_nav"),
        navScrolled = "fix__top",
        scroll_offset_top = 500; 

    $(window).scroll(function() {
        if($(this).scrollTop() > scroll_offset_top) {
            subNav.addClass(navScrolled);
        } else {
            subNav.removeClass(navScrolled);
        }
    });

     /*Custom Selector*/
    var selector_input = $(".cst_selector"),
        target_container = $('.cst_select_list');
        

    selector_input.on('click', function() {
        if ($(this).attr("checked"), true) {
            $(this).parents(".select_radio").find(".select_item").removeClass('selected');
            $(this).parents(".select_item").addClass("selected");
        } else {
            $(this).parents(".select_item").removeClass('selected');
        }
    });

});