
        $(document).ready(item => {
            (function ($) {
                $('#filtrar').keyup(function () {
                    var rex = new RegExp($(this).val(), 'i');
                    $('.buscar tr').hide();
                    $('.buscar tr').filter(function () {
                          return rex.test($(this).text());
                    }).show();
                })
            }(jQuery));
        });

        $(document).ready(function() {
            $("#cont1").jpaginate() 
        });
        

        
    
    
    