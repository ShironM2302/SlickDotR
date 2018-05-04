(function ($) {
    $(document).ready(function () {

        // nav fade in and fade out
        $('#js-menu').fadeOut();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#js-menu').fadeIn(500);
            } else {
                $('#js-menu').fadeOut(500);
            }
        });
    });

    //nav menu open
    $(".menu").click(function () {
        $(this).toggleClass('menu-cross');
        $('.overlay-nav').toggleClass('overlay-nav-active');
    })

    // slideshow events
    $(".events-slideshow > div:gt(0)").hide();  

setInterval(function() {
  $('.events-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.events-slideshow');
}, 3000);


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  
  });
          
      



})(jQuery);