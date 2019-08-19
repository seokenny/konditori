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

$(".to_top").on("click",function(){
    $("html, body").animate({
        scrollTop: $("#container").offset().top
    },750);
});

$(".hsq_h1").on("click",function(){
    // window.history.pushState(null, null, "/locations.html");
    $(".white_overlay").addClass("fadeIn",function(){
        $(".white_overlay").delay(1000).removeClass("fadeIn",function(){
            $(".white_overlay").addClass("fadeOut");
        });
    });
    $("#container").addClass("hidden");
    $("#container").addClass("fadeOut");
    $("#container_locations").removeClass("hidden");
    $("#container_locations").addClass("fadeIn");

});

$(".hamburger").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $(".mobile_nav_list").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
});

$(".m_nav_home").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#container_menu").addClass("hidden");
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
    $("#container").addClass("hidden");
    $("#container_aboutus").removeClass("hidden");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").animate({
        scrollTop: $("#container_aboutus").offset().top
    },0);
});