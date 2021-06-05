(function() {
    /* prelaoder */
    $(window).on('load', function() {
        $('.preloader-wrapper').delay(2000).fadeOut();
    });

    /* dropdown */
    $('.nav-link').on('click', function() {
        $('.navbar').find('.dropdown.show .dropdown-menu').slideUp();

        if($(this).parent().hasClass('show')) {
            $(this).parent().find('.dropdown-menu').slideUp();
        }else{
            $(this).parent().find('.dropdown-menu').slideDown();
        }
    });
    $('html').on('click', function() {
        $('.navbar').find('.dropdown.show .dropdown-menu').slideUp();
    });

    /* navbar */
    $('.navbar-open').on('click', function() {
        $('.navbar-collapse').animate({
            'right': '0'
        }, 2000);
    });
    $('.navbar-close').on('click', function() {
        $('.navbar-collapse').animate({
            'right': '-280px'
        }, 2000);
    });

    /* counter up */
    $('.count-number').counterUp({
        delay: 10,
        time: 1500
    });

    /* testimonial */
    $('#testimonialCarousel').owlCarousel({
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        nav: true,
        responsiveClass: true,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    /* gallery */
    $('#galleryCarousel').owlCarousel({
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        nav: false,
        responsiveClass: true,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        navSpeed: 1500,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    /* testimonial widget */
    $('#testimonialWidgetCarousel').owlCarousel({
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        nav: true,
        responsiveClass: true,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        navSpeed: 1500
    });

    /* testimonial widget */
    $('#productWidgetCarousel').owlCarousel({
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        nav: true,
        responsiveClass: true,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        navSpeed: 1500
    });
})(window.jQuery);