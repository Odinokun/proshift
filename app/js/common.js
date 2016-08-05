//preloader
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
});


// top menu
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

        return this.each(function() {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            cssmenu.find('li ul').parent().addClass('parent');

            multiTg = function() {

                cssmenu.find(".parent").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');

            resizeFix = function() {
                // ширина окна без скроллбара
                var documentWidth = document.documentElement.clientWidth;
                if ($(documentWidth) > 768) {
                    cssmenu.find('ul').show();
                }
                if ($(documentWidth) <= 768) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(document.documentElement.clientWidth).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($) {
    $(document).ready(function() {
        $(document).ready(function() {
            $("#hmenu").menumaker({
                title: "Menu",
                format: "multitoggle"
            });

            $("#hmenu").prepend("<div id='menu-line'></div>");
            var foundActive = false,
                activeElement, linePosition = 0,
                menuLine = $("#hmenu #menu-line"),
                lineWidth, defaultPosition, defaultWidth;

            $("#hmenu > ul > li").each(function() {
                if ($(this).hasClass('active')) {
                    activeElement = $(this);
                    foundActive = true;
                }
            });

            if (foundActive === false) {
                activeElement = $("#hmenu > ul > li").first();
            }

            defaultWidth = lineWidth = activeElement.width();
            defaultPosition = linePosition = activeElement.position().left;

            menuLine.css("width", lineWidth);
            menuLine.css("left", linePosition);

            $("#hmenu > ul > li").hover(function() {
                    activeElement = $(this);
                    lineWidth = activeElement.width();
                    linePosition = activeElement.position().left;
                    menuLine.css("width", lineWidth);
                    menuLine.css("left", linePosition);
                },
                function() {
                    menuLine.css("left", defaultPosition);
                    menuLine.css("width", defaultWidth);
                });
        });
    });
})(jQuery);


//background top menu
$(function() {
    $(window).scroll(function() {
        var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
        var menu = document.getElementById('header');
        if (topToDocument <= 20) {
            menu.style.background = 'transparent';
        } else {
            menu.style.background = '#022f53';
        }
    });
});


// tabs in top__section & tab__section
$(function() {
    $('.tab__control-link').on('click', function(e) {
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


// // bx slider 01 in top__section
// $(document).ready(function() {
//     $('#top__slider-01').bxSlider({
//         mode: 'fade',
//         buildPager: function(slideIndex) {
//             switch (slideIndex) {
//                 case 0:
//                     return 'сайт-визитка';
//                 case 1:
//                     return 'одностраничный сайт';
//                 case 2:
//                     return 'корпоративный сайт';
//                 case 3:
//                     return 'сайт-каталог';
//                 case 4:
//                     return 'интернет-магазин';
//             }
//         }
//     });
// });


// // bx slider 02 in top__section
// $(document).ready(function() {
//     $('#top__slider-02').bxSlider({
//         mode: 'fade',
//         buildPager: function(slideIndex) {
//             switch (slideIndex) {
//                 case 0:
//                     return 'SEO';
//                 case 1:
//                     return 'одностраничный сайт';
//                 case 2:
//                     return 'корпоративный сайт';
//                 case 3:
//                     return 'сайт-каталог';
//                 case 4:
//                     return 'интернет-магазин';
//             }
//         }
//     });
// });


// // bx slider 03 in top__section
// $(document).ready(function() {
//     $('#top__slider-03').bxSlider({
//         mode: 'fade',
//         buildPager: function(slideIndex) {
//             switch (slideIndex) {
//                 case 0:
//                     return 'дизайн';
//                 case 1:
//                     return 'одностраничный сайт';
//                 case 2:
//                     return 'корпоративный сайт';
//                 case 3:
//                     return 'сайт-каталог';
//                 case 4:
//                     return 'интернет-магазин';
//             }
//         }
//     });
// });


// // bx slider 04 in top__section
// $(document).ready(function() {
//     $('#top__slider-04').bxSlider({
//         mode: 'fade',
//         buildPager: function(slideIndex) {
//             switch (slideIndex) {
//                 case 0:
//                     return 'поддержка';
//                 case 1:
//                     return 'администрирование';
//                 case 2:
//                     return 'корпоративный сайт';
//                 case 3:
//                     return 'сайт-каталог';
//                 case 4:
//                     return 'интернет-магазин';
//             }
//         }
//     });
// });


// tabs in rocket__section
$(function() {
    $('.rocket-planet').on('mouseover', function(e) {
        e.preventDefault();

        var item = $(this).closest('.rocket-planet'),
            contentItem = $('.rocket__item'),
            itemPosition = item.data('class');

        contentItem.filter('.rocket__item_' + itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});


// bx slider in aboutus section
$(document).ready(function() {
    $('#aboutus__slider').bxSlider({
        mode: 'fade',
        pager: false,
        auto: true
    });
});


// bx slider portfolio-web
$(document).ready(function() {
    $('#portfolio-web__slider').bxSlider({
        mode: 'fade',
        auto: 'true',
        pager: false
    });
});


// add class active in pagination
$('.pagination__item').click(function(e) {
    e.preventDefault();
    $('.pagination__item').removeClass('active');
    $(this).addClass('active');
});


// add class active in portfolio
$('.portfolio__btn').click(function(e) {
    e.preventDefault();
    $('.portfolio__btn').removeClass('active');
    $(this).addClass('active');
});


//animate effect
$(".lastworks__item").animated("zoomIn", "fadeOut");
$(".blog__item").animated("flipInX", "fadeOut");
$(".portfolio__item").animated("zoomIn", "fadeOut");



$(function() {
    // popup open
    $('.popupOpen').click( function(){
        $('.success, .layerBox').fadeIn();
        return false;
    });

    // popup close
    $('.layerBox, .success .btnBox, .close_bth').click( function(){
        $('.layerBox, .popupBox').fadeOut();
        return false;
    });
});


// scroll to ancor
$(function() {
    $('a[href*=#]').bind("click", function(e){
       var anchor = $(this);
       $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 65 + 'px'
       }, 2000);
       e.preventDefault();
    });
    return false;
});