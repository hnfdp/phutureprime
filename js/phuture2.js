function main() {

    (function() {
        'use strict';

        /* ==============================================
    Testimonial Slider
    =============================================== */

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Preloader
        ======================================*/

        $(window).load(function() {

            // will first fade out the loading animation 
            $("#status").fadeOut("slow");

            // will fade out the whole DIV that covers the website. 
            $("#preloader").delay(500).fadeOut("slow").remove();

        })
        /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 600;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-inverse').addClass('on');
            } else if ($('.navbar-collapse').hasClass('in')) {

            } else {
                $('.navbar-inverse').removeClass('on');
            }
        });
        $('#test').click(function() {
            var navHeight = $(window).height() - 100;
            if (($('.navbar-collapse').hasClass('in')) && ($(window).scrollTop() < navHeight)) {
                $('.navbar-inverse').removeClass('on');
            } else {
                $('.navbar-inverse').addClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        $(document).ready(function() {
            $("#team").owlCarousel({

                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 4],
                    [1400, 4],
                    [1600, 4]
                ],
            });

            $("#clients").owlCarousel({

                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1000, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ],
            });

            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });

        });

        /*====================================
    WOW JS
    ======================================*/

        // new WOW().init();
        //smoothScroll



    }());


}
main();