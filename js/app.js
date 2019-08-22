$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $(".hsq_h1").removeClass("hidden");
       $(".hsq_h1").addClass("fadeIn");
    }
});

// $(".hsq_0").on("click",function(){
//     window.history.pushState(null, null, "/testing.html");
//     $(".white_overlay").removeClass("hidden");
//     $(".white_overlay").addClass("fadeIn",function(){
//         $(".white_overlay").removeClass("fadeIn");
//         $(".white_overlay").addClass("fadeOut");
//     });
// });

$(window).scroll(function(){
    if ($(window).scrollTop()>150){
        $(".to_top").removeClass("hidden");
        $(".to_top").removeClass("fadeOut");
       $(".to_top").addClass("fadeIn");
    }
    else if($(window).scrollTop() == 0){
        $(".to_top").removeClass("fadeIn");
        $(".to_top").addClass("fadeOut");
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop()>50){
        $("#mobile_nav").stop().animate({
            backgroundColor: 'black'
        });
    }
    else if ($(window).scrollTop() == 0){
        $("#mobile_nav").stop().animate({
            backgroundColor: 'transparent'
        });
    }
});

$(".to_top").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },750);
});

$(".read_more").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },0);
    // window.history.pushState(null, null, "/locations.html");
    $("#container").addClass("hidden");
    $("#container").addClass("fadeOut");
    $("#container_aboutus").removeClass("hidden");
    $("#container_aboutus").addClass("fadeIn");
});

$(".fml_0").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },0);
    // window.history.pushState(null, null, "/locations.html");
    $("#container").addClass("hidden");
    $("#container").addClass("fadeOut");
    $("#container_aboutus").removeClass("hidden");
    $("#container_aboutus").addClass("fadeIn");
});

$(".hsq_0, .fml_1").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },0);
    // window.history.pushState(null, null, "/locations.html");
    $("#container").addClass("hidden");
    $("#container").addClass("fadeOut");
    $("#container_menu").removeClass("hidden");
    $("#container_menu").addClass("fadeIn");
});

$(".hsq_1, .fml_2").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },0);
    // window.history.pushState(null, null, "konditori.github.io/locations.html");

    $("#container").addClass("hidden");
    $("#container").addClass("fadeOut");
    $("#container_locations").removeClass("hidden");
    $("#container_locations").addClass("fadeIn");
});

$(".hsq_2, .fml_3").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },0);
    // window.history.pushState(null, null, "/locations.html");

    $("#container").addClass("hidden");
    $("#container").addClass("fadeOut");
    $("#container_contact").removeClass("hidden");
    $("#container_contact").addClass("fadeIn");
});


$(".hamburger").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $(".mobile_nav_list").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
});

$(".m_nav_home").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#container_contact").addClass("hidden");
    $("#container_menu").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container_locations").addClass("hidden");
    $("#container").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },0);
});

$(".m_nav_menu").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#container").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container_locations").addClass("hidden");
    $("#container_menu").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").animate({
        scrollTop: $("#container_menu").offset().top
    },0);
});

$(".m_nav_location").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#container_aboutus").addClass("hidden");
    $("#container_menu").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container").addClass("hidden");
    $("#container_locations").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").animate({
        scrollTop: $("#container_locations").offset().top
    },0);
});

$(".m_nav_about").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#container_menu").addClass("hidden");
    $("#container_locations").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container").addClass("hidden");
    $("#container_aboutus").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").animate({
        scrollTop: $("#container_aboutus").offset().top
    },0);
});

$(".m_nav_contact").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#container_menu").addClass("hidden");
    $("#container_locations").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container").addClass("hidden");
    $("#container_contact").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").animate({
        scrollTop: $("#container_contact").offset().top
    },0);
});

/**LOCATION */
$(".ls_0").on("click",function(){$(".lsi_0").stop().fadeToggle();});
$(".ls_1").on("click",function(){$(".lsi_1").stop().fadeToggle();});
$(".ls_2").on("click",function(){$(".lsi_2").stop().fadeToggle();});
$(".ls_3").on("click",function(){$(".lsi_3").stop().fadeToggle();});
$(".ls_4").on("click",function(){$(".lsi_4").stop().fadeToggle();});
$(".ls_5").on("click",function(){$(".lsi_5").stop().fadeToggle();});