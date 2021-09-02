$(document).ready(function () {

    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });
    //////////** Categories Slider **//////////
    var categories = new Swiper('.categories-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.categories-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.categories-slider .swiper-btn-next',
            prevEl: '.categories-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 31,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 31,
            },
        },
    });
    //////////** Bestseller Slider **//////////
    var bestseller = new Swiper('.bestseller-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.bestseller-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller-slider .swiper-btn-next',
            prevEl: '.bestseller-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });
    //////////** Special Slider **//////////
    var special = new Swiper('.special-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.special-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.special-slider .swiper-btn-next',
            prevEl: '.special-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });
    //////////** Lattest Slider **//////////
    var lattest = new Swiper('.lattest-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.lattest-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.lattest-slider .swiper-btn-next',
            prevEl: '.lattest-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });
    //////////** Cat1 Slider **//////////
    var cat1 = new Swiper('.cat1-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.cat1-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cat1-slider .swiper-btn-next',
            prevEl: '.cat1-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });
    //////////** Cat2 Slider **//////////
    var cat2 = new Swiper('.cat2-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.cat2-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cat2-slider .swiper-btn-next',
            prevEl: '.cat2-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });
    //////////** Cat3 Slider **//////////
    var cat3 = new Swiper('.cat3-slider .swiper-container', {
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.cat3-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cat3-slider .swiper-btn-next',
            prevEl: '.cat3-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
    });

    //////////** search **//////////
    if ($(window).width() > 767) {
        $(".search-select").select2({
            minimumResultsForSearch: Infinity
        })
    }
    if ($(window).width() <= 1199) {
        $('.search-icon').click(function () {
            $(".search-cont").slideToggle(400);
            $(this).toggleClass("active");
        });
    }
    //////////** lang - user **//////////
    if ($(window).width() <= 1199) {
        $('.header-list-cont').click(function () {
            $(this).addClass("active");
            $(this).find(".dropdown-overlay").show()
        });
        $('.dropdown-overlay').click(function (e) {
            e.stopPropagation()
            $('.header-list-cont').removeClass("active");
            $(".dropdown-overlay").hide()
        });
    }

    //////////** footer **//////////
    $('.footer-title').click(function () {
        $(".footer-title").not(this).removeClass("active");
        if ($(this).siblings(".footer-list").css('display') == 'none') {
            $(this).addClass("active").siblings(".footer-list").slideDown(500);
        } else {
            $(this).removeClass("active").siblings(".footer-list").slideUp(500);
        }
        $(".footer-title").not(this).siblings(".footer-list").slideUp(500);
    })

    //////////** sub cat **//////////
    if ($(window).width() <= 1199) {
        $('.navbar-list>.has-sub>a>i').click(function () {
            var anchor = $(this).parent("a")
            $(".navbar-list>.has-sub>a").not(anchor).removeClass("active");
            if ($(anchor).siblings(".sub-cat.level-2").css('display') == 'none') {
                $(anchor).addClass("active").siblings(".sub-cat.level-2").slideDown(500);
            } else {
                $(anchor).removeClass("active").siblings(".sub-cat.level-2").slideUp(500);
            }
            $(".navbar-list>.has-sub>a").not(anchor).siblings(".sub-cat.level-2").slideUp(500);
        });
        $('.level-2>.has-sub>a>i').click(function () {
            var anchor = $(this).parent("a")
            $(".level-2>.has-sub>a").not(anchor).removeClass("active");
            if ($(anchor).siblings(".sub-cat.level-3").css('display') == 'none') {
                $(anchor).addClass("active").siblings(".sub-cat.level-3").slideDown(500);
            } else {
                $(anchor).removeClass("active").siblings(".sub-cat.level-3").slideUp(500);
            }
            $(".level-2>.has-sub>a").not(anchor).siblings(".sub-cat.level-3").slideUp(500);
        });
    }

    //////////** menu **//////////
    if ($(window).width() <= 1199) {
        $('.menu-icon').click(function () {
            $(".menu-overlay").fadeIn(400);
            $("nav").addClass("active");
            $("body").addClass("overflow");
        });
        $('.menu-overlay,.close-icon').click(function () {
            $(".menu-overlay").fadeOut(400);
            $("nav").removeClass("active");
            $("body").removeClass("overflow");
        });
    }
});