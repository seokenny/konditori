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
    if($(window).scrollTop()>300){
        $(".to_top").removeClass("hidden");
       $(".to_top").addClass("fadeIn");
    }
});

$(".hsq_h1").on("click",function(){
    window.history.pushState(null, null, "/locations.html");
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