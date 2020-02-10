const newsLink = $('.news__link');
const newsItemAll = $('.news__item')

if (newsLink.length) {
    newsLink.on('mouseover', function() {
        newsItemAll.removeClass('active');
        $(this).closest('.news__item').addClass('active');
    });

    newsLink.on('mouseleave', function() {
        newsItemAll.removeClass('active');
    });
}