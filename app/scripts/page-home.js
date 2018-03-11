$(document).ready(function () {
  $('.section-06 .slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img class="slick-prev" src="/images/arrow-left.png" alt="">',
    nextArrow: '<img class="slick-next" src="/images/arrow-right.png" alt="">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  })

  $('.section-09 .slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slick-prev" src="/images/arrow-left.png" alt="">',
    nextArrow: '<img class="slick-next" src="/images/arrow-right.png" alt="">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  })

  $('.section-08 .slick').slick({
    dots: true,
    arrows: false
  })
})
