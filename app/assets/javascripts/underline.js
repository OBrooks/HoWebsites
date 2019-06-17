window.addEventListener('load', function () {
    const div = document.getElementById("nav-side-right");
    console.log(div)
    const underline = div.getElementsByTagName("a");
    console.log(underline)

for (var i = 0; i < underline.length; i++) {
    console.log(i)
    console.log(underline[i]);
    $(underline[i]).hover(
        function () {
            $(this).toggleClass("underline");
        }
    );
    // underline[i].onmouseover = (ev) => {
    //     console.log("héhéé")
    //     console.log(i)
    //     console.log(underline[i])
    //     // underline[i].classList.add('underline')
    // }
    // underline[i].onmouseleave = (ev) => {
    //     console.log("ohohoh")
    //     // underline[i].classList.remove('underline')
    // }
}
    // const cursor = document.getElementsByClassName('cursor')[0];
    // for (var i = 0; i < title.length; i++) {
    //     for (var n = 0; n < title[i].children.length; n++) {

    //         title[i].children[n].onmouseover = (ev) => {
    //             cursor.classList.add('cursor-zoomed')
    //         }

    //         title[i].onmouseleave = (ev) => {
    //             cursor.classList.remove('cursor-zoomed')
    //         }
    //     }
    // }

});
