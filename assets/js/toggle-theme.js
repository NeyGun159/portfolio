$(function(){
     $('.toggle-theme').on('click', function(){
         $('.toggle-theme-moon, .toggle-theme-light').toggleClass('active');
         $(function() {
           if ($('body').attr("data-theme") == "dark") {
             $('body').removeAttr("data-theme", "dark")
             $('body').attr("data-theme", "light")
           } else {
             $('body').removeAttr("light")
             $('body').attr("data-theme", "dark")
           }
         })
     })
   })
