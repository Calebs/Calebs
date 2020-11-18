$(document).ready(function(){
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
    
	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
        }, scroll_top_duration
		);
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
        var topicBtn = $('.listNavItemBtn'),
            switchTopic = $('.collapsePane');

        topicBtn.on('click', function(evLock) {
            evLock.stopPropagation();
            hideTopics();
        });

        switchTopic.on('click', function(evLock) {
            evLock.stopPropagation();
            showTopics();
        });
    }

    function showTopics() {
        $('.questionPoolLayout').removeClass('showPane');
    }

    function hideTopics() {
        $('.questionPoolLayout').addClass('showPane');
    }
        
    // Show and hide password, user login
    var visualTrigger = $('#showPass');
    var pwd_input = $('.user_pass');

    visualTrigger.on('click',function() {
      $(this).toggleClass('show_pass');
      
      if (pwd_input.attr("type") == "password") {
          pwd_input.attr("type", "text");
      } else {
          pwd_input.attr("type", "password");
      }
    });

    /*Show more collapsed items in a list with more than 4 items*/
    var show_more_toggle = $(".collapsetoggle");
        show_more_toggle.on('click', function() {
        $(this).parents(".collapsibleBlock").toggleClass('blockCollapsed');
    });

     /*Custom Selector*/
    var selector = $(".pillSelectControl");
        //selectorLabel = $(".pillWrapper");
     
    selector.on('change', function() {
        $(this).parents(".selectorItem").toggleClass("selected");
    });
        
    $('#appNotifications').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('scroll_lock');
        $('body').addClass('drawerActive');
    });

    //open/close Filter panel
    $('body').on('click','.offScreenDrawerContentWrapper .close_dialog, .offscreenDrawerBackdrop', function(event) {
        event.stopPropagation();
        closeDialog();
    });

    

    function closeDialog() {
        $('body').removeClass('scroll_lock');
        $('body').removeClass('drawerActive');
    }
    
    var hideOverlayBtn = $('.overlayToggle');

    hideOverlayBtn.on('click', function(e) {
        e.preventDefault();
        $(this).parents(".showcaseCta").addClass("hideOverlay");
    });

    /*Video Widget*/
    
    var video_launcher = $('.watch_vid'),
        close_widget = $('.widget_dismiss > button '),
        video_widget_block = $('.video_widget');

    video_launcher.on('click', function(e) {
        e.preventDefault();
        video_widget_block.addClass('show_widget');
        $('body').addClass('scroll_lock');
    });

    close_widget.on("click", function() {
        $(this).parents('.video_widget').removeClass("show_widget");
        $('body').removeClass('scroll_lock');
    });

});