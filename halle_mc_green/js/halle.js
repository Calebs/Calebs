jQuery(document).ready(function($) {

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		scroll_top_duration = 1500,
		$back_to_top = $('.to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	/*Explicit Close for Dropdown*/
	$('.dropdown.implicit_close').on({
	    "shown.bs.dropdown": function() { this.closable = false; },
	    // "click": function() { this.closable = true; },
	    "hide.bs.dropdown":  function() { return this.closable; }
	});

	var close_btn = $(".dropdown.implicit_close .abort");
	var mother_container = $(".dropdown.implicit_close");

	close_btn.on('click', function() {
	  mother_container.removeClass("open");
	});


	var toggle_box = $("#emailsubscribe");
    var form_box = $(".sub_form");

    toggle_box.on("focus", function(event) {
    	event.preventDefault();
        form_box.addClass('is_visible');
    });
    
    /* responsive navigation*/
    
    var menu_wrap = $('.main_menu'),
        filter_trigger = $('.menu-trigger'),
        close_button = $('.nav_close')
    
    filter_trigger.on('click', function() {
        setTimeout( function() {
            menu_wrap.addClass("is_opened");
        }, 25 );
    });
    
    close_button.on('click', function() {
        menu_wrap.removeClass("is_opened");
    }); 
        	
});