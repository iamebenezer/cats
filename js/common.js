// WINDOW LOAD
$(window).bind("load", function() {
    "use strict";
    // ANCHOR LINK
    function anchorLink(el) {
        var p = $(el).offset();
        var offset_PC = 160;
        var offset_SP = 100;
        if ($(window).width() > 750) {
            $("html,body").animate({
                    scrollTop: p.top - offset_PC,
                },
                400
            );
        } else {
            $("html,body").animate({
                    scrollTop: p.top - offset_SP,
                },
                400
            );
        }
    }

    // ANCHOR FROM OTHER PAGE
    var hash = location.hash;
    if (hash && $(hash).length > 0) {
        anchorLink(hash);
    }

    // ANCHOR IN PAGE
    $('a[href^="#"]').click(function() {
        var get_ID = $(this).attr("href");
        if ($(get_ID).length) {
            anchorLink(get_ID);
            // CLOSE SP NAV
            if ($("body").hasClass("open-nav")) {
                $("#menu-toggle").trigger("click");
            }
            return false;
        }
    });
    // =========== END - ANCHOR LINK ============
    // =========== END - SCROLL TO MAIL FORM ============

    // LAZY LOAD RESOURCE
    $("[data-href]").each(function() {
        var _this = $(this);
        var href = $(this).data("href");
        setTimeout(function() {
            _this.attr("href", href);
        }, 3000);
    });
    $("[data-src]").each(function() {
        var _this = $(this);
        var src = $(this).data("src");
        setTimeout(function() {
            _this.attr("src", src);
        }, 3000);
    });
    // =========== END - LAZY LOAD RESOURCE ============
});

// WINDOW LOAD/SCROLL
$(window).bind("load scroll", function() {
    // TO-TOP
    const ww = $(window).width();
    if ($(this).scrollTop() >= 500) {
        $(".to-top").addClass("show");
    } else {
        $(".to-top").removeClass("show");
    }
    // =========== END - TO-TOP ============
});
$(window).bind("load scroll", function() {
    // TO-TOP
    const ww = $(window).width();
    if ($(this).scrollTop() > 0) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
    // =========== END - TO-TOP ============
});

// DOCUMENT READY
$(document).ready(function() {
    "use strict";

    // MENU TOGGLE SP
    $("#menu-toggle").click(function() {
        $(this).toggleClass("open");
        $("body").toggleClass("open-nav");
    });
    // =========== END - MENU TOGGLE SP ============

    // SUB NAV SP SLIDE TOGGLE
    // $('.hnav-hv .hnav-menu-linksub').click(function() {
    //     var screenWidth = $(window).width();
    //     if (screenWidth <= 750) {
    //         $(this).toggleClass('open');
    //         $(this).next().stop().slideToggle(200);
    //     }
    // });
    // =========== END - MENU TOGGLE SP ============

    // SUB NAV SP SLIDE TOGGLE
    // $('.menu-hd-list .has-sub .label_sub').click(function() {
    //     var screenWidth = $(window).width();
    //     if (screenWidth <= 750) {
    //         $(this).toggleClass('open');
    //         $(this).next().stop().slideToggle(200);
    //     }
    // });
    // =========== END - MENU TOGGLE SP ============

    // =========== END - SUB NAV SP SLIDE TOGGLE ============

    // CHANGE Link full box
    // =========== END - CHANGE TAB ============
    const ww = $(window).width();
    if (ww < 751) {
        $(".media-list").slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            autoPlay: true,
            dots: true,
        });
    }
    if ($(".idx-list-news").length > 0) {
        $(".idx-list-news").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerMode: false,
            responsive: [{
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            }, ],
        });
    }
    if ($(".idx-list-team").length > 0) {
        $(".idx-list-team").slick({
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: false,
            responsive: [{
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }
    AOS.init({
        duration: 600,
        disable: "mobile",
        once: true,
    });
    // =========== END - ACCORDION ============
});