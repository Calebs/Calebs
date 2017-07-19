$(function() {

    /*Collapse and expand post widget*/
    var input_field = $('.post_input_widget'),
        other_trigger = $('.post_type_nav a'),
        close_widget = $('.collapse_widget'),
        obj_tray = $('.new_post_widget');
    
    other_trigger.on("click", function() {
       expand_widget(); 
    });

    input_field.on("click", function(event) {
        expand_widget();
    });
    
    close_widget.on("click", function() {
        collapse_widget()
    });
    
    function expand_widget() {
        obj_tray.addClass("widget_expanded");
    };
    
    function collapse_widget() {
        obj_tray.removeClass("widget_expanded");
    };

});

