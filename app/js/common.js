// tabs in top__section
$(function() {
    // console.log("Hasta la vista, baby");
    $('.tab__control-link').on('click', function(e){
        e.preventDefault();

        var item = $(this).closest('.tab__controls-item'),
            contentItem = $('.tab__item'),
            itemPosition = item.data('class');

        contentItem.filter('.tab__item_' + itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});

// tabs in tab__section
$(function() {
    $('.tab__control-link').on('click', function(e){
        e.preventDefault();

        var item = $(this).closest('.tab__controls-item'),
            contentItem = $('.tab__item'),
            itemPosition = item.data('class');

        contentItem.filter('.tab__item_' + itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});


// bx slider in top__section
$(document).ready(function(){
  $('#top__slider-01').bxSlider({
      mode: 'fade',
      // auto: true,
      buildPager: function(slideIndex){
        switch (slideIndex){
          case 0:
            return 'сайт-визитка';
          case 1:
            return 'одностраничный сайт';
          case 2:
            return 'корпоративный сайт';
          case 3:
            return 'сайт-каталог';
          case 4:
            return 'интернет-магазин';
        }
      }
  });
  // $("a[data-slide-index='0']").append('сайт-визитка');
  // $("a[data-slide-index='1']").append('одностраничный сайт');
  // $("a[data-slide-index='2']").append('корпоративный сайт');
  // $("a[data-slide-index='3']").append('сайт-каталог');
  // $("a[data-slide-index='4']").append('интернет-магазин');
});


$(document).ready(function(){
  $('#top__slider-02').bxSlider({
      mode: 'fade',
      // pager : false,
      // auto: true
  });
});


// bx slider in aboutus section
$(document).ready(function(){
  $('#aboutus__slider').bxSlider({
      mode: 'fade',
      pager : false,
      auto: true
  });
});