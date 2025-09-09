 AOS.init();



 $('.counter').counterUp({
    delay: 10,
    time: 1000
});





 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  // slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});





	



$('.testimonials-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid myarr prr fa-arrow-left"></i>',
    nextArrow: '<i class="fa-solid myarr nrr fa-arrow-right"></i>',
    responsive: [
    {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 1,
    }
    },
    {
    breakpoint: 767.98,
    settings: {
        slidesToShow: 1,
    }
    }
]
});