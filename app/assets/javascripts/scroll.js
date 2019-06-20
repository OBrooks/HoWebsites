$(window).scroll(function () {
    var theta = $(window).scrollTop() / 100 % Math.PI;
    $('.wheel').css({
        transform: 'rotate(' + theta + 'rad)'
    });
});
