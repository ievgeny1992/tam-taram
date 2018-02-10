const htmlWindow = $(window);
const slickInit = $('.slick-init');

$( document ).ready(function() {
    slickInit.slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
});

htmlWindow.resize(function() {
    slickInit.slick('resize');
});

htmlWindow.on('orientationchange', function() {
    slickInit.slick('resize');
});

$(".search-form").click(function(){
    $(this).addClass("search-form_active");

    let input = $(this).find('.search-form__input');
    let sumbitButton = $(this).find('search-form__submit');

    input.mousedown(function(){
        sumbitButton.prop('disabled', false);
    });

});

$(".video-block__link").fancybox({
    type: 'iframe'
});
