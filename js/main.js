$(document).ready(function ($) {

    $('.tabs').each(function() {
        let ths = $(this);
        ths.find('.tabs__block').not(':first').hide();
        ths.find('.tabs__item').click(function() {
            ths.find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tabs__block').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

    $('.how-acord__title').click(function () {
        if ($('.how-acord__item').hasClass('one')) {
            $('.how-acord__title').not($(this)).removeClass('active');
            $('.how-acord__text').not($(this).next()).slideUp(500);
        }
        $(this).toggleClass('active').next().slideToggle(500);
    });

}); // end of ready