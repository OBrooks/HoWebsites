document.addEventListener("turbolinks:load", function () {

function back_anim() {
        sh = screen.height
        sw = screen.width

        var backAnim = document.querySelector(".animation-background");
        var shapeEls = backAnim.querySelectorAll(".shape");
        var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

            function createKeyframes(value) {
                var keyframes = [];
                for (var i = 0; i < 5; i++) keyframes.push({
                    value: value
                });
                return keyframes;
            }

        function animateShape(el) {

            var viewportOffset = el.getBoundingClientRect();
            // these are relative to the viewport, i.e. the window
            var top = (((viewportOffset.top) / 10) * sw) / 100;
            var bot = (((viewportOffset.bottom) / 10) * sw) / 100;
            var left = (((viewportOffset.left) / 10) * sw) / 100;
            var right = (((viewportOffset.right)/10)*sw)/100;
            console.log("top",top)
            console.log("bottom", bot)
            console.log("left", left)
            console.log("right", right)
            
            var maxXR= sw - right
            var maxXL = -left
            var maxYB = sh - bot
            var maxYT = -top

            console.log("top", maxYT)
            console.log("bottom", maxYB)
            console.log("left", maxXL)
            console.log("right", maxXR)

            var circleEl = el.querySelector('circle');
            var animation = anime.timeline({
                                        targets: el,
                                        duration: function () {
                                            return anime.random(600, 2200);
                                        },
                                        easing: function () {
                                            return easings[anime.random(0, easings.length - 1)];
                                        },
                                        complete: function (anim) {
                                            animateShape(anim.animatables[0].target);
                                        },
                                    });
                animation.add({
                                    translateX: createKeyframes(function (el) {
                                        return anime.random(-200, 200);
                                    }),
                                    translateY: createKeyframes(function (el) {
                                        return anime.random(-200, 200);
                                    }),
                                    rotate: createKeyframes(function () {
                                        return anime.random(-180, 180);
                                    }),
                                }, 0);
            if (circleEl) {
                animation.add({
                            targets: circleEl,
                            r: createKeyframes(function () {
                                return anime.random(10, 100);
                            }),
                        }, 0);
                    }

        }

        for (var i = 0; i < shapeEls.length; i++) {
                        console.log(i)
            animateShape(shapeEls[i]);
        };
    }
back_anim()
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// anime({
//     targets: 'svg.small-circle',
//     keyframes: [{
//             translateY: getRandomIntInclusive(-300, 1200)
//         },
//         {
//             translateX: getRandomIntInclusive(-300, 1200)
//         },
//         {
//             translateY: getRandomIntInclusive(-300, 1200)
//         },
//         {
//             translateX: 0
//         },
//         {
//             translateY: 0
//         }
//     ],
//     duration: 10000,
//     easing: 'easeOutElastic(1, .8)',
//     loop: true
// });
});
