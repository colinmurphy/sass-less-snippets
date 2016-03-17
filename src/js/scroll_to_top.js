var $j = jQuery.noConflict();
$j(document).ready(function ($) {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $("#scroll-to-top").css("margin-bottom", 0);
        } else {
            $("#scroll-to-top").css("margin-bottom", -100);
        }
    });

    $("#scroll-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({scrollTop: 0}, 250);
    });
});
