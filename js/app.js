$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $(".hsq_h1").removeClass("hidden");
       $(".hsq_h1").addClass("fadeIn");
    }
});

$(".hsq_0").on("click",function(){
    window.history.pushState(null, null, "/testing.html");
});