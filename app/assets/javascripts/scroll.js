document.addEventListener("turbolinks:load", function () {
    const wheel = document.getElementsByClassName("wheel")
    if (wheel) {
    $(window).scroll(function () {
        var theta = $(window).scrollTop() / 100 % Math.PI;
        $('.wheel').css({
            transform: 'rotate(' + theta + 'rad)'
            });
        });
    }

const services = document.getElementById("services");
if (services) {
window.addEventListener('scroll', () => {
let scrollPosY = window.scrollY;
const li_services= services.getElementsByTagName("li");
let servicesTop = ($(services).position().top) * 0.6;
if (scrollPosY >= servicesTop) {
for (var i = 0; i < li_services.length; i++) {
    (function (i) {
        setTimeout(function () {
            $(li_services[i].classList.add("move_it")).delay(500);
        }, 1000 * i);
    })(i);

};
}
});
}
const shapeshifter = document.getElementById("shapeshifter-language")
if (shapeshifter) {
    let shapeshifterTop = ($(shapeshifter).position().top) * 0.8
    window.addEventListener('scroll', () => {
        let scrollPosY = window.scrollY
        if (scrollPosY >= shapeshifterTop) {
        $(shapeshifter.classList.add("play"));
    }
    });
}
});