/*File upload Script 
Changes the name of the upload button to the name of the file selected for upload
*/

;
(function($, window, document, undefined) {
    $('.inputfile').each(function() {
        var $input = $(this),
            $label = $input.next('label'),
            labelVal = $label.html();

        $input.on('change', function(e) {
            var fileName = '';

            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else if (e.target.value)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                $label.find('span').html(fileName);
            else
                $label.html(labelVal);
        });

        // Firefox bug fix
        $input
            .on('focus', function() { $input.addClass('has-focus'); })
            .on('blur', function() { $input.removeClass('has-focus'); });
    });

    /*Explicit Close for Dropdown*/
    $('.dropdown.implicit_close').on({
        "shown.bs.dropdown": function() { this.closable = false; },
        // "click": function() { this.closable = true; },
        "hide.bs.dropdown": function() { return this.closable; }
    });

    var close_btn = $(".dropdown.implicit_close .abort");
    var mother_container = $(".dropdown.implicit_close");

    close_btn.on('click', function() {
        mother_container.removeClass("open");
    });

    var back_btn = $(".goBack");

    back_btn.on('click', function() {
        prompt = confirm("Are you sure you want to leave and abandone all your changes?");
        if (prompt == true) {
            window.history.back();
            return true;
        } else {
            return false;
        }
    });

    /*Custom Audio Player*/
    var cust_player = $(".cust_player"),
        main_control = $(".main_player");

    cust_player.on('click', function(event) {
        var curr_cust_player = $(event.target).parents('svg');
        var media_player = curr_cust_player.prev()[0];

        if (curr_cust_player.attr('class').includes('played')) {
            media_player.pause();
            curr_cust_player.attr("class", "cust_player");
        } else {
            media_player.play();
            curr_cust_player.attr("class", "cust_player played");
        }
    });

    main_control.on('ended', function(event) {
        var button = $(event.target).next();
        button.attr("class", "cust_player");
    });

    var commentInput = $(".comment_inner .form-control"),
        commentControl = $(".comment_inner .form_action"),
        inputSME = $(".comment_inner .post_input"),
        mediaInput = $(".comment_inner .action_botton"),
        controlDismiss = $(".comm_dismiss");

    $(".comment_inner").addClass("is_collapsed");

    commentInput.on("focus", function() {
        $(this).parents(".comment_inner").removeClass("is_collapsed");
    });

    inputSME.on("click", function() {
        $(this).parents(".comment_inner").removeClass("is_collapsed");
    });

    mediaInput.on('click', function() {
        $(this).parents(".comment_inner").removeClass("is_collapsed");
    });

    controlDismiss.on('click', function(e) {
        e.preventDefault();
        $(this).parents(".comment_inner").addClass("is_collapsed");
    });

    /*Category and subcategory selection control*/
    var open_subcats = $('.has_children .cat_button'),
        subcat_panel = $('.alt_panel'),
        go_back = $('.track_back'),
        mother_panel = $('.modal-body, .widget_content');

    open_subcats.on('click', function(e){
        if(!(mother_panel.hasClass("is_opened"))) {
            $(this).parents(".modal-body, .widget_content").addClass("is_opened");
        }
    });

    go_back.on('click', function() {
        if(mother_panel.hasClass("is_opened")) {
            mother_panel.removeClass("is_opened");
        }
    });

    /*Widget toggling*/

    var filter_trigger = $('#trigger_filter'),
        search_trigger = $('#trigger_search'),
        filter_widget = $('.catFilter'),
        close_btn = $('.close_dialog'),
        search_widget = $('.searchWidget');

    filter_trigger.on('click', function(e) {
        e.preventDefault();
        filter_widget.addClass('show_widget');
    });

    search_trigger.on('click', function(e) {
        e.preventDefault();
        search_widget.addClass('show_widget');
    });

    close_btn.on("click", function() {
        $(this).parents('.floatingWidget').removeClass("show_widget");
        mother_panel.removeClass("is_opened");
    });

     /*Custom Selector*/
    var selector_input = $(".select_radio .select_control"),
        selector_input_check = $(".select_check .select_control"),
        target_container = $('.my_selector');


    selector_input.on('click', function() {
        if ($(this).attr("checked"), true) {
            $(this).parents(".select_radio").find(".my_selector").removeClass('active');
            $(this).parents(".my_selector").addClass("active");
        } else {
            $(this).parents(".my_selector").removeClass('active');
        }
    });

    selector_input_check.on('click', function() {
        $(this).parents(".my_selector").toggleClass("active");
    });


})(jQuery, window, document);

/*End of file upload script*/