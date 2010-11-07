/*
FormHelper v0.0.1
Author: Ulf Boegeholz <boegeholz@gmail.com>

This jQuery plugin is intended to provide an easy to use hinting system
for HTML forms. Usage is easily done by specifying where and when you expect
the user to enter something in your form. The helper then displays the given
hints next to the formfields, in the order that you specify.

Example:

<script type="text/javascript">
$(document).ready(function (){
$.fn.formhelper([{ field: 'field1', hint : 'This is the first hint', delay : 1000},
                 { field: 'field2', hint : 'Second hint', delay : 2000}]);
});
</script>

Waits for one second before displaying the hint for the first formfield. After
that field is filled and left, the helper waits another 2 seconds to display the
hint for the second field

*/
(function( $ ){

    // This function displays a hint next to the input field
    // it is called upon
    $.fn.activateHelper = function(hint, callback) {
	// Mark the current element for highlighting
	$(this).addClass('highlight');
	// Add new element to display next to the input field
	var $new = $('<span class="highlightNote">'+hint+'</span>');
	$new.insertAfter($(this));
	// When the input field changes, deactivate the helper
	$(this).blur(function () {
	    $new.remove();
	    $(this).removeClass('highlight');
	    callback();
	});
    }

    /* Main function of the plugin
    Supply list of items where input is expected as object
    { field, hint, delay }
    */
    $.fn.formhelper = function(expecting) {
	// If no more inputs are expected terminate
        if (expecting.length == 0)
	    return;
	// Take the first element 
	var e = expecting.shift();
	// Activate helper after given delay
	setTimeout(function (){
	    $('#'+e.field).activateHelper(e.hint, function (){
		// Supply callback function for when the helper gets deactivated
		// In this case, just wait for the rest of the inputs
		$.fn.formhelper(expecting);
	    });
	}, e.delay);
	
    };
})( jQuery );