document.addEventListener("turbolinks:load", function () {
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    anime({
    targets: 'svg.small-circle',
    keyframes: [{
            translateY: getRandomIntInclusive(- 300, 1200 )
        },
        {
            translateX: getRandomIntInclusive(-300, 1200)
        },
        {
            translateY: getRandomIntInclusive(-300, 1200)
        },
        {
            translateX: 0
        },
        {
            translateY: 0
        }
    ],
    duration: 10000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});
});