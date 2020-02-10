$(window).on('load', function () {
    if ($('.location__slider-inner').length) {
        function setProgress(index) {
            var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
    
            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc);
            }

            
    
        var $slider = $('.location__slider-inner');
        var $progressBar = $('.location__slider-progress');

        $slider.on('afterChange', function (slick, currentSlide, nextSlide) {
            $('.location__slider-current').text('0' + (nextSlide + 1));
        });
    
        $slider.on('init', function (event, slick) {
            console.log(slick.slideCount)
            $('.location__slider-all').text(slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount);
        });
    
        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            setProgress(nextSlide);
        });
    
        $slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.location__slider-arrow--prev'),
            nextArrow: $('.location__slider-arrow--next'),
        });
    
        setProgress(0);
    }

    const select = $('.select2');

    if (select.length) {
        select.select2({

        })
    }

    $('.js-open-search').on('click', function(){
        $('.select2-container').addClass('.select2-container--open')
    })
});


