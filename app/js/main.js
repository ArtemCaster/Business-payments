$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated --active',
      offset: 150,
      mobile: false,
    }
  )

  wow.init();


  $(".navbar__menu").on("click", "a", function (event) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
    $('.navbar__menu').toggleClass('navbar__menu--active');
    $('.burger-btn').removeClass('burger-btn--active');
  });

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  $('.testimonial-slider').slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        },
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  });

  $('.burger-btn').on('click', function(){
    $(this).toggleClass('burger-btn--active');
    $('.navbar__menu').toggleClass('navbar__menu--active');
  });

});