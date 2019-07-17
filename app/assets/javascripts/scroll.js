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
const li_services= services.getElementsByTagName("li");
for (var i = 0; i < li_services.length; i++) {
    (function (i) {
        setTimeout(function () {
            $(li_services[i].classList.add("move_it")).delay(500);
        }, 1000 * i);
    })(i);

};
    // if (window.matchMedia("(max-width: 1024px)").matches) {
    //     anime({
    //         targets: '#services li',
    //         translateX: 50,
    //         delay: anime.stagger(200, {
    //             start: 50
    //         }) // delay starts at 500ms then increase by 100ms for each elements.
    //     });
    // } else {
    //     anime({
    //         targets: '#services li',
    //         translateX: 200,
    //         delay: anime.stagger(200, {
    //             start: 50
    //         }) // delay starts at 500ms then increase by 100ms for each elements.
    //     });
    // }
});
}
});