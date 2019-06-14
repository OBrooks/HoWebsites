document.addEventListener("turbolinks:load", function () {
const burger = document.getElementById('burger');
const windows = document.getElementById('window-fits');
const ul = document.getElementById("nav-side-right");
burger.addEventListener('click', function () {
    var nav_in_burger = document.getElementById("nav-in-burger")
    var burger_status_icon = document.getElementById("nav-wrap").getElementsByClassName("open")[0];
    var main = document.getElementById("main")
    if (burger_status_icon) {
    burger.classList.remove('open');
    nav_in_burger.classList.remove('show-menu');
    nav_in_burger.style.width = "0";
    windows.classList.remove('show-menu');
    main.style.marginLeft = "0";
    main.classList.remove('show-menu');
    ul.classList.remove('show');
    }
    else {
    burger.classList.add('open');
    nav_in_burger.classList.add('show-menu');
    nav_in_burger.style.width = "100vw";
    windows.classList.add('show-menu');
    main.classList.add('show-menu');
    main.style.marginLeft = "-100vw";
    $(ul.classList.add("show")).delay(1000);
    }
});
    
    console.log(ul);
    
});