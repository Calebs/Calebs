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

	var close_btn = $(".implicit_close > .abort"),
        mother_container = $(".implicit_close"),
        dropdown_container = $(".implicit_close > .dropdown-menu");

	close_btn.on('click', function() {
        if(mother_container.hasClass("show")){
            mother_container.removeClass("show");
            dropdown_container.removeClass("show");
        }
	});
    
    // Main nav fix state transition 
    
    var MQL = 992;
    
    if($(window).width() > MQL) {
      var headerHeight = $('.main_header').height();
      $(window).on('scroll',
      {
            previousTop: 0
        }, 
        function () {
          var currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop ) {
            //if scrolling up...
            if (currentTop > 0 && $('.main_header').hasClass('nav_stuck')) {
              $('.main_header').removeClass('menu_collapsed');
            } else {
              $('.nav_header').addClass('menu_collapsed');
            }
          } else {
            //if scrolling down...
            $('.main_header').addClass('menu_collapsed');
            if( currentTop > headerHeight && !$('.main_header').hasClass('nav_stuck')) $('.main_header').addClass('nav_stuck menu_collapsed');
          }
          this.previousTop = currentTop;
      });
    }

     //open/close primary navigation
    $('.primary-nav-trigger').on('click', function() {
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('body').toggleClass('overflow_hidden');
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
});