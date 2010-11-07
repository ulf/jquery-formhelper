jquery-formhelper
=================

This jQuery plugin is intended to provide an easy to use hinting system
for HTML forms. Usage is easily done by specifying where and when you expect
the user to enter something in your form. The helper then displays the given
hints next to the formfields, in the order that you specify.

Example
-------

    <script type="text/javascript">
    $(document).ready(function (){
    $.fn.formhelper([{ field: 'field1', hint : 'This is the first hint', delay : 1000},
                     { field: 'field2', hint : 'Second hint', delay : 2000}]);
    });
    </script>

Waits for one second before displaying the hint for the first formfield. After
that field is filled and left, the helper waits another 2 seconds to display the
hint for the second field
