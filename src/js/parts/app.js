import 'slick-carousel';

export class App{

  init() {

    // Footer Slider
    $('.footer-slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        responsive: [
        {
            breakpoint: 1441,
            settings: {
            slidesToShow: 5
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2
            }
        },
        ]
    });

    // Trusted Logo Slider
    $('.hero-trusted-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    // centerMode: true,
                }
            },
        ]
    });

    // Testimonial Slider
    $('.testimonial-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
    });

    // Product Testimonial Slider
    $('.product-testimonial-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
    });

    // Product Slider
    $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
    });

    $('.large-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true
              }
          }
      ]
  });

  /* Featured Car slider */
  $('.featured-car-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 400,
      autoplay: true,
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });

  /* Team slider */
  $('.team-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 400,
      autoplay: true,
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });

//   $(".filter li").on('click', function(){
//     let sliderClass = ".team-slider";
//     var filter = $(this).data('filter');
//     $(sliderClass).slick('slickUnfilter');
    
//     console.log(filter);
//     if(filter == 'team-1'){
//       $(sliderClass).slick('slickFilter','.team-1');
//     }
//     else if(filter == 'team-2'){
//       $(sliderClass).slick('slickFilter','.team-2');
//     }
//     else if(filter == 'team-3'){
//       $(sliderClass).slick('slickFilter','.team-3');
//     }
//     else if(filter == 'team-4'){
//       $(sliderClass).slick('slickFilter','.team-4');
//     }
//     else if(filter == 'all'){
//       $(sliderClass).slick('slickUnfilter');
//     }
    
//   })

$(".filter li").on("click", function () {
    const sliderClass = ".team-slider";
    var filter = $(this).data("filter");
    // console.log($(sliderClass).slick("slickUnfilter")[0]);
    $(sliderClass).slick("slickUnfilter");

    if (filter == "team-1") {
    $(sliderClass).slick("slickFilter", `.${filter}`);
    } else if (filter == "team-2") {
    $(sliderClass).slick("slickFilter", `.${filter}`);
    } else if (filter == "team-3") {
    $(sliderClass).slick("slickFilter", `.${filter}`);
    } else if (filter == "team-4") {
    $(sliderClass).slick("slickFilter", `.${filter}`);
    } else if (filter == "all") {
    $(".slider").slick("slickUnfilter");
    }
});

  /* Insights Car slider */
  $('.insights-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 400,
      autoplay: true,
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });

  /* Landing Content slider */
  $('.landing-content-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  arrows: true,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  arrows: true,
              }
          }
      ]
  });


  /* related products slider */
  $('.trusted-logos-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 4,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          }
      ]
  });



  }

  slickSLider (){

  }

}