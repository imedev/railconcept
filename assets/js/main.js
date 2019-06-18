
  $initial_height= $small=$bottom=0;
    $initial_height =  $("#header").css("height");
    $small=$("#header").css("padding-top");
    $bottom = $("#header").css("padding-bottom");



$(window).scroll(function(){

    if($(document).scrollTop() > 0) {

      $("#header").css("height",parseInt($initial_height)-parseInt($small)+parseInt($bottom));
     $("#header").css("padding-top","0px");
     $("#header").css("padding-bottom","0px");
     $("#header").addClass("navshadow");

    } else {

       $("#header").css("padding-top",parseInt($small));
       $("#header").css("padding-bottom",parseInt(  $bottom ));
       $("#header").css("height",parseInt($initial_height));
    $("#header").removeClass("navshadow");

    }
});


$(document).ready(function(){
    $(".nav-item").click(function(){
        if (!$(this).hasClass("not-underline") ) {
        $('.nav-link').removeClass('selected');

        $(this).children().first().addClass("selected");
        }

    });

    $('#blogCarousel').carousel({
 interval: 5000
});

  });
