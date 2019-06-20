document.addEventListener("turbolinks:load", function () {
    const div = document.getElementById("nav-side-right");
    const underline = div.getElementsByTagName("a");
for (var i = 0; i < underline.length; i++) {
    $(underline[i]).hover(
        function () {
            $(this).toggleClass("underline");
        }
    );}

        const div2 = document.getElementById("contact");
        if (div2) {
        const underline2 = div2.getElementsByTagName("a");
        for (var i = 0; i < underline2.length; i++) {
            $(underline2[i]).hover(
                function () {
                    $(this).toggleClass("underline");
                }
            );
        }
}
});
