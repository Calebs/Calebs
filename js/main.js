jQuery(document).ready(function($){

	   // browser window scroll (in pixels) after which the "back to top" link is shown
     var offset = 300,
		  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		  offset_opacity = 1200,
		  scroll_top_duration = 1500,
        header_offset = 70,
        navScrolled = "fix_top",
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

      //primary navigation slide-in effect
        var headerHeight = $('.mainHeader').height();
        $(window).on('scroll',
        {
              previousTop: 0
          }, 
          function () {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop ) {
              //if scrolling up...
              if (currentTop > 0 && $('.mainHeader').hasClass('is-fixed')) {
                $('.mainHeader').addClass('is-visible');
              } else {
                $('.mainHeader').removeClass('is-visible is-fixed');
              }
            } else {
              //if scrolling down...
              $('.mainHeader').removeClass('is-visible');
              if( currentTop > headerHeight && !$('.mainHeader').hasClass('is-fixed')) $('.mainHeader').addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });

      // Smooth scroll down
      $('.to_reforms').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, scroll_top_duration);
              return false;
            }
          }
      });

      //open/close primary navigation
      $('.primary-nav-trigger').on('click', function(){
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('.mainHeader').toggleClass('menu-is-open');
        $('.mainHeader').toggleClass('is-active');
        $('body').toggleClass('scroll_stop');
      });

    /*Widget toggling*/

    var projects_trigger = $('.toggle_projects'),
        close_btn = $('.close_dialog'),
        br_projects = $('.projectspanel');

    projects_trigger.on('click', function(e) {
        e.preventDefault();
        br_projects.addClass('show_widget');
        $('body').addClass('scroll_stop');
    });

    close_btn.on("click", function() {
        $(this).parents('.floatingWidget').removeClass("show_widget");
        $('body').removeClass('scroll_stop');
    });

    var subNav = $(".sticky_nav"),
        navScrolled = "fix__top",
        scroll_offset_top = 500; //$(".slide_item").height()

      $(window).scroll(function() {
         if($(this).scrollTop() > scroll_offset_top) {
             subNav.addClass(navScrolled);
         } else {
             subNav.removeClass(navScrolled);
         }
      });
    
});