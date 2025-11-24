$(document).ready(function () {

if ((typeof $.fn.slick !== 'undefined')) {

    $(".types-slider--js").slick({
      dots: false,
      arrows: false,
      speed: 300,
      infinite: false, 
      variableWidth: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 667,
          settings: "unslick"
        }
      ],
    });

     
  }

});