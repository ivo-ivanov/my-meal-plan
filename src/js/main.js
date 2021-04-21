jQuery(document).ready(function ($) {
    $('section').on('click', 'button.btn', function () {
        var th = $(this);
        var ind = th.parent().index();
        $('header').fadeIn();
        $('.active-section').removeClass('active-section');
        $('section').eq(ind).addClass('active-section');
        $('nav li')
            .eq(ind - 1)
            .addClass('active-nav');
    });

    $('nav').on('click', 'li.active-nav', function () {
        var th = $(this);
        var ind = th.index();
        console.log('nav click' + ind);
    });

    $('.measurements').on('click', 'span', function () {
        $('.m-active').removeClass('m-active');
        $(this).toggleClass('m-active');
    });
});
