$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

      $('.product__slider-inner').slick({
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          
      });


    var mixer = mixitup('.products__inner-box');

});