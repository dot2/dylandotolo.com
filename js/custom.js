jQuery(document).ready(function () {
    $(".display a").click(function () {
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

    $(".summary-wrapper").click(function() {
        $(".work").removeClass("show");
        $("body").css("overflow-y", "scroll");
    });
});
