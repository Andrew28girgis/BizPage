// navbar
$(window).scroll(function () { 
    if($(this).scrollTop() > 10 ) {
        $('nav').addClass('sticky');
    } else {
     $('nav').removeClass('sticky');
    }
 });
// carousel Time
$('.carousel').carousel({
    interval: 2000
  })
    // Initiate the wowjs animation library
    new WOW().init();
  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
  
  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
    
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

// Back to top icon
$(window).scroll(function() {
  if($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').on('click' , function () {
  $('html ,body').animate({scrollTop : 0} , 1500 , 'easeInOutExpo')
}) ;

