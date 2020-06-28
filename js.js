$(document).ready(function(){
    $("#aboutme-btn").click(function(){
        $("#about").css('left','0');
        $('.inner-wrapper-img').css('opacity','.3');
         $('.navigation').css('opacity','.3');
    });

     $("#aboutme").click(function(){
        $("#about").css('left','0');
        $('.inner-wrapper-img').css('opacity','.3');
         $('.navigation').css('opacity','.3');
         $(".side-nav").css('right','-100px');
    });

    $('.close').click(function(){
    	$('#about').css('left','-100%');
    	 $('.inner-wrapper-img').css('opacity','1');
         $('.navigation').css('opacity','1');
    })

     $("#menu-bar").click(function(){
      $(".side-nav").css('right','0px'); 
    });

        $('.side-nav-close').click(function(){
        $(".side-nav").css('right','-100px'); 
    });

      
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
     && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});