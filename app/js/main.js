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

      $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
      });

      $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
      });

    var mixer = mixitup('.products__inner-box');

});


$(".tabs-stage .tab").hide();
$(".tabs-stage .tab:first-child").show();
$(".tabs-nav li:first").addClass("tab-active");

// Change tab class and display content
$(".tabs-nav a").on("click", function (event) {
  event.preventDefault();
  let parent = $(this).parents(".tabs-container");
  $(".tabs-nav li" , parent).removeClass("tab-active");
  $(this)
    .parent()
    .addClass("tab-active");
  $(".tabs-stage .tab", parent).hide();
  $($(this).attr("href")).show();
});