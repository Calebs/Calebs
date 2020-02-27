jQuery(document).ready(function($){
  
    $('[data-toggle="tooltip"]').tooltip();


    /* General Navigation*/    
    //open/close primary navigation
    $('.primary-nav-trigger').on('click', function(event){
        event.stopPropagation();
        $('.menu-icon').toggleClass('is-clicked');
        $('header[role="banner"]').toggleClass('menu-is-open');
        $('body').toggleClass('showNavMenu');
        $('header[role="banner"]').toggleClass('is-active');
        $('body').toggleClass('scroll_lock');
    });
});