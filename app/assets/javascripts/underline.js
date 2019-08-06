document.addEventListener("turbolinks:load", function () {
    const div = document.getElementById("nav-side-right");
    const div2 = document.getElementById("contact");
    const div3 = document.getElementById("achievements")
    if (div) {
        const underline = div.getElementsByTagName("a");
        for (var i = 0; i < underline.length; i++) {
            $(underline[i]).hover(
                function () {
                    $(this).toggleClass("underline");
                }
            );}

    }

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

    if (div3) {
                const underline3 = div3.getElementsByTagName("a");
                for (var i = 0; i < underline3.length; i++) {
                    $(underline3[i]).hover(
                        function () {
                            $(this).toggleClass("underline");
                        }
                    );
                }
    }
});
