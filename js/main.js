$(document).ready(function () {
    var a = $(".top");
    var b = $(".main-nav");
    var $dis = $(".main-nav").offset().top;



    a.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        });
    });



    $(window).on('scroll', function () {
        var $scroll = $(this).scrollTop();
        if ($scroll != 0) {
            a.fadeIn();
        } else {
            a.fadeOut();
        }
    });
    //    back to top function


    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > $dis) {
            b.addClass("stricky");
        } else {
            b.removeClass("stricky");
        }
    });

    //    sticky menu
    new WOW().init();
    //    wow plagin

});
