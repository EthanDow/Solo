/*
**********************************
           Preloader       
***********************************/

$(window).on("load", function () { //make sure that the whole site is loaded 
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});


/*
**********************************
           Team      
***********************************/


$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            // Braekpoint from 0 up 
            0: {
                items: 1
            },


            // Braekpoint from 0 up 
            480: {
                items: 2
            }


        }
    });
});


/*
**********************************
           Progress Bars    
***********************************/

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


/*
**********************************
           Responsive Tabs     
***********************************/

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: "slide",
    });


});



/*
**********************************
           Isotope/Portfolio    
***********************************/

$(window).on("load", function () {


    //   Initialize Isotope
    $("#isotope-container").isotope({});


    //       filter items on button clicks 
    $("#isotope-filters").on("click", "button", function () {


        //        Get Filter Value
        var filterValue = $(this).attr("data-filter");

        //            filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });


        //            Active Button
        $("#isotope-filters").find(".active").removeClass("active");

        $(this).addClass("active");


    });

});

/*
**********************************
           Magnific Popup  
***********************************/


$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });

});



/*
**********************************
           Testimonials  
***********************************/



$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
    });
});

/*
**********************************
           Counter 
***********************************/

$(function () {

    $(".stats-item .counter").counterUp({
        delay: 10,
        time: 2000
    });
});


/*
**********************************
           Client
***********************************/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            // Braekpoint from 0 up 
            0: {
                items: 2
            },


            // Braekpoint from 0 up 
            480: {
                items: 3
            },

            // Braekpoint from 0 up 
            768: {
                items: 6
            }


        },
    });
});

/*
**********************************
           Google Maps
***********************************/

$(window).on("load", function () {


    //    Google Maps Variables

    var addressString = "6102 Winsome Lane, Texas, Houston, USA";
    var myLatlng = {
        lat: 29.735997,
        lng: -95.488560
    };


    //    Render Google Maps

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: myLatlng
    });




    //    Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "This Is My Address!"
    });


    //    Infor Window

    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });


    //    Show Info Window When Cliks Marker

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });


    // Resize Function

    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

});



/*
**********************************
           Navigation
***********************************/

//Toggle navigation bar

$(function () {

    //On page load 
    showhideNav();

    // On window's scroll 
    $(window).scroll(function () {
        showhideNav();
    });


    function showhideNav() {
        if ($(window).scrollTop() > 50) {

            //Show White Nav
            $("nav").addClass("white-nav-top");

            //Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //Show back-to-top-btn
            $("#back-to-top").fadeIn();


        } else {

            //Hide white nav
            $("nav").removeClass("white-nav-top");


            //Show white logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hide back-to-top-btn
            $("#back-to-top").fadeOut();

        }
    }

});


//Smooth Scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //Get section ID
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*
**********************************
           Mobile Menu
***********************************/
$(function () {

    //Show mobile Navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //Hide mobile Navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});


/*
**********************************
           Animation
***********************************/
// Animate on scroll 

$(function () {
    new WOW().init();
});


// Home section animation on page load 
$(window).on("load", function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});