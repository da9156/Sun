(function ($) {
    "use strict";

    // Back to Top Button
    $(window).scroll(function () {
        $('.back-to-top').toggle($(this).scrollTop() > 300);
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Spinner
    const spinner = function () {
        if ($('#spinner').length) {
            setTimeout(() => $('#spinner').removeClass('show'), 1);
        }
    };
    spinner();

    // Header Carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true
    });

    // Service Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1800,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

})(jQuery);