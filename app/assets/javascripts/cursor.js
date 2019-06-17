document.onmousemove= (ev) => {
    const cursor = document.getElementsByClassName('cursor')[0];
    cursor.style.top = ev.clientY+"px";
    cursor.style.left = ev.clientX + "px";

}
window.addEventListener('load', function () {
const title = document.querySelectorAll(".zoom-on");
const cursor = document.getElementsByClassName('cursor')[0];
for (var i = 0; i < title.length; i++) {
    for (var n = 0; n < title[i].children.length; n++) {
        
        title[i].children[n].onmouseover = (ev) => {
            cursor.classList.add('cursor-zoomed')
        }

        title[i].onmouseleave = (ev) => {
            cursor.classList.remove('cursor-zoomed')
        }
}
}

});

