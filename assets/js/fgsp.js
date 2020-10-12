$(document).ready(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.nav-area').addClass('navcolored');
            } else {
                $('.nav-area').removeClass('navcolored');
            }
        });
    });
});
$(document).ready(function () {
    $(".carousel-slider").owlCarousel({
        autoplay: false,
        // smartSpeed: 1000,
        autoplayTimeout: 5000,
        loop: true,
        margin: 200,
        responsiveClass: true,
        nav: false,
        items: 3,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            900: {
                items: 3,
                nav: false,
                dots: false,
            }
        }

    });
    // $(".portfolio-slider").owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     slideSpeed: 300,
    //     paginationSpeed: 400,
    //     autoplay: false,
    //     // autoplayHoverPause:true,
    //     items: 1,
    //     animateIn: 'fadeIn', // add this
    //     animateOut: 'fadeOut', // and this
    //     responsiveClass: true,
    //     dots: false,
    //     nav: true,
    //     mouseDrag: false,
    //     navText: ["<img src='assets/images/ic_arrow_left.svg'>", "<img src='assets/images/ic_arrow_right.svg'>"],
    //     onInitialized: counter, //When the plugin has initialized.
    //     onTranslated: counter //When the translation of the stage has finished.

    // });


});



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
// const currentThemeBanner = localStorage.getItem('banner');
// const brand = document.getElementById("brand");

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }

}
// if (currentThemeBanner) {
//     brand.setAttribute('class', currentThemeBanner);

//     if (currentThemeBanner === 'top-banner-dark') {
//         toggleSwitch.checked = true;
//     }
// }



function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // brand.setAttribute('class', 'top-banner-dark');
        localStorage.setItem('theme', 'dark');
        // localStorage.setItem('banner', 'top-banner-dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        // brand.setAttribute('class', 'top-banner');
        localStorage.setItem('theme', 'light');
        // localStorage.setItem('banner', 'top-banner');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const body = document.getElementById("body-area");

menuIcon.addEventListener("click", function () {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        // navcolored.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.5)";
        body.style.overflow = "auto";

        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        body.style.overflow = "hidden";
        // navcolored.style.boxShadow = "none";
        $('.hamburger').toggleClass('is-active');
    }
});


(function () {
    $('.menu-lists').on('click', function () {
        $('.hamburger').toggleClass('is-active');
    })
})();

function closeNavSp() {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";
        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        $('.hamburger').toggleClass('is-active');
        body.style.overflow = "hidden";
    }
}


(function () {
    $(".team-btn").click(function () {
        $(".team-collapse").slideToggle("fast");
        $(".team-btn").addClass("hide");
    });
    $(".team-btn-pc").click(function () {
        $(".team-other").slideToggle("fast");
        $(".team-btn-pc").addClass("hide");
    });
})();