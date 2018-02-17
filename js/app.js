
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
          $('#menu').addClass('blackback');
          $('#Logo').addClass('DCLogoHover');
        } else {
          $('#menu').removeClass('blackback');
          $('#Logo').removeClass('DCLogoHover');
        }
      });

      $('#title').addClass('animated slideInDown');

      
});

