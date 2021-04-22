jQuery(document).ready(function ($) {
    // Add fixed height to container
    $('main').css({
        height: window.innerHeight,
    });

    // Change active section/page on button click
    $('section').on('click', 'button.btn:not(".submit")', function () {
        var th = $(this);
        var ind = th.parent().index();
        $('header').fadeIn();
        $('.active-section').removeClass('active-section');

        // Add active navigation
        $('section')
            .eq(ind + 1)
            .addClass('active-section');
        $('nav li').eq(ind).addClass('active-nav');

        // Change paggination exp. 1/5
        $('#pagination span:nth-child(1)').text(ind + 1);

        // Auto focus input on active section
        $('section')
            .eq(ind + 1)
            .find('.section-input')
            .focus();
    });

    // Add class for styling on input focus
    $('.section-input').on('focusin', function (e) {
        $('.active-section').addClass('focused');
    });

    $('.section-input').on('focusout', function (e) {
        $('.active-section').removeClass('focused');
    });

    // Header circle step navigation
    $('nav').on('click', 'li.active-nav', function () {
        var ind = $(this).index();
        $('section').eq(ind).find('.btn').trigger('click');
    });

    // Change metric system
    $('.measurements').on('click', 'span', function () {
        if ($(this).hasClass('metric')) {
            $('.active-section')
                .removeClass('active-imperial')
                .addClass('active-metric');
            //$('.input-metric').focus();
        } else {
            $('.active-section')
                .removeClass('active-metric')
                .addClass('active-imperial');
            //$('.height-input-inch').focus();
        }
    });

    // Blur input on pressing enter key
    $(document).on('keypress', '.section-input', function (event) {
        var keycode = event.keyCode || event.which;
        if (keycode == '13') {
            event.preventDefault();
            var element = event.currentTarget;
            element.blur();
        }
    });

    // Slider with favorite products
    if ($('.swiper-wrapper').length) {
        var swiperHome = new Swiper('.swiper-container', {
            // Optional parameters
            loop: true,
        });

        $('.slide-select').on('click', function () {
            $(this).parent().toggleClass('selected-product');
        });
    }
});
