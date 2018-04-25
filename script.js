(function($) {          
  $(document).ready(function(){
    $('#js-menu').fadeOut();

      $(window).scroll(function(){                          
          if ($(this).scrollTop() > 200) {
              $('#js-menu').fadeIn(500);
          } else {
              $('#js-menu').fadeOut(500);
          }
      });
  });
})(jQuery);