$(function () {

    setInterval(fnSlide, 3000);

    function fnSlide() {

        $("#shuttleFrame").animate({
                "margin-top": "-350px"
            },
            1000,
            function () {
                $("a:first-child").insertAfter("a:last-child");
                $("#shuttleFrame").css({
                    "margin-top": "0"
                });
            }
        );
    }

});
