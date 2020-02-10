const featLink = $('.features__link');
const featItemAll = $('.features__wrap')

if (featLink.length) {
    featLink.on('mouseover', function() {
        featItemAll.removeClass('active');
        $(this).closest('.features__item').find('.features__wrap').addClass('active');
    });

    featLink.on('mouseleave', function() {
        featItemAll.removeClass('active');
    });
}