$(function(){
        $(".element").typed({
            strings: ["Developer", "Designer", "Wizard"],
            typeSpeed: 60,
            backDelay: 2000,
            loop: false
        });
    });
jQuery(document).ready(function () {
    $(".projects a").click(function () {
        $("body").css("overflow-y", "hidden");
        $(this.hash).addClass("show");
    });

    $(".close .fa").click(function () {
        $(".work").removeClass("show");
        $("body").css("overflow-y", "scroll");
    });

    $(".top .fa").click(function () {
        $(".work").animate({ scrollTop: 0}, "slow");
        return false;
    });
});
