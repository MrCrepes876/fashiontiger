// Carousel
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 50,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 4,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 4,
            loop: false,
        },
    },
});

