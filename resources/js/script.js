$(document).ready(function(){
    
           $("[data-fancybox]").fancybox({

              protect: true,

            });
           
    $("#filters a").click(function(){

         $("#filters .current").removeClass("current");
         $(this).addClass("current");

         var selector = $(this).attr("data-filter");

         $(".items").isotope({
           filter:selector,
           animationOptions:{
           duration:1500,
           easing: 'linear',
           queue: false
           }
         });

         return false;
       });
});