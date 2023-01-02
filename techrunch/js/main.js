jQuery(document).ready(function($){
  $('[data-toggle="tooltip"]').tooltip();

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		scroll_top_duration = 2000,
        $back_to_top = $('.to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('fade-out');
		}
	});
    
    /* General Navigation*/

   //primary navigation slide-in effect
    // Toggles the top-navs fixed and scroll state.
    var MQL = 768;

    if ($(window).width() > MQL) {
        var headerHeight = $('.preAuthHeader').height();
        $(window).on('scroll', {
            previousTop: 0
          },
          function() {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop) {
                //if scrolling up...
                if (currentTop > 0 && $('.preAuthHeader').hasClass('is-fixed')) {
                    $('.preAuthHeader').addClass('is-visible');
                } else {
                    $('.preAuthHeader').removeClass('is-visible is-fixed');
                }
            } else {
                //if scrolling down...
                $('.preAuthHeader').removeClass('is-visible');
                if (currentTop > headerHeight && !$('.preAuthHeader').hasClass('is-fixed')) {
                    $('.preAuthHeader').addClass('is-fixed');
                }
            }
            this.previousTop = currentTop;
        });
    }
        //open/close primary navigation
    $('.primary-nav-trigger').on('click', function(event){
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('header[role="banner"]').toggleClass('menu-is-open');
        $('header[role="banner"]').toggleClass('is-active');
        $('body').toggleClass('scroll_lock');
    });
    
    if ($(window).width() < MQL) {
        $('.ft_block_segment.panel-collapse').addClass('collapse');
    }

     /*Custom Selector*/
     var selector = $(".pillSelectControl"), 
        selectorLabel = $(".pillWrapper");
     
        selector.on('change', function() {
          $(this).parents(".selectorItem").toggleClass("selected");
      });

});