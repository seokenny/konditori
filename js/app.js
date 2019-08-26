$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $(".hsq_h1").removeClass("hidden");
       $(".hsq_h1").addClass("fadeIn");
    }
});

// $(document).ready(function(){
//     $(".white_overlay").addClass("fadeOut");
// });

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

$(window).scroll(function(){
    if ($(window).scrollTop()>50){
        $(".desk_nav_list").stop().animate({
            backgroundColor: 'black'
        });
    }
    else if ($(window).scrollTop() == 0){
        $(".desk_nav_list").stop().animate({
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
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").stop().animate({
        scrollTop: $("#container").offset().top
    },0);
    $("#container").removeClass("hidden");
    $("#container_menu").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container_locations").addClass("hidden");
});

$(".d_nav_home").on("click",function(){
    $("html, body").stop().animate({
        scrollTop: $("#container").offset().top
    },0);
    $(".white_overlay").stop().animate({
        left: '0'
    }, 500 ,function(){
        setTimeout(function(){
            $(".white_overlay").stop().animate({
                left:'-100%'
            },1000);
        }, 500);
    });
    setTimeout(function(){
        $("#container").removeClass("hidden");
        $("#container_menu").addClass("hidden");
        $("#container_contact").addClass("hidden");
        $("#container_aboutus").addClass("hidden");
        $("#container_locations").addClass("hidden");
    },500);
});

$(".m_nav_about").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").stop().animate({
        scrollTop: $("#container_aboutus").offset().top
    },0);
    $("#container_aboutus").removeClass("hidden");
    $("#container").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container_menu").addClass("hidden");
    $("#container_locations").addClass("hidden");
});

$(".d_nav_about").on("click",function(){
    $("html, body").stop().animate({
        scrollTop: $("#container_aboutus").offset().top
    },0);
    $(".white_overlay").stop().animate({
        left: '0'
    }, 500 ,function(){
        setTimeout(function(){
            $(".white_overlay").stop().animate({
                left:'-100%'
            },1000);
        }, 500);
    });
    setTimeout(function(){
        $("#container_aboutus").removeClass("hidden");
        $("#container").addClass("hidden");
        $("#container_contact").addClass("hidden");
        $("#container_menu").addClass("hidden");
        $("#container_locations").addClass("hidden");
    },500);
});

$(".m_nav_menu").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").stop().animate({
        scrollTop: $("#container_menu").offset().top
    },0);
    $("#container_menu").removeClass("hidden");
    $("#container").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container_locations").addClass("hidden");
});

$(".d_nav_menu").on("click",function(){
    $("html, body").stop().animate({
        scrollTop: $("#container_menu").offset().top
    },0);
    $(".white_overlay").stop().animate({
        left: '0'
    }, 500 ,function(){
        setTimeout(function(){
            $(".white_overlay").stop().animate({
                left:'-100%'
            },1000);
        }, 500);
    });
    setTimeout(function(){
        $("#container_menu").removeClass("hidden");
        $("#container").addClass("hidden");
        $("#container_contact").addClass("hidden");
        $("#container_aboutus").addClass("hidden");
        $("#container_locations").addClass("hidden");
    },500);
});

$(".m_nav_location").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").stop().animate({
        scrollTop: $("#container_locations").offset().top
    },0);
    $("#container_locations").removeClass("hidden");
    $("#container").addClass("hidden");
    $("#container_contact").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container_menu").addClass("hidden");
});

$(".d_nav_locations").on("click",function(){
    $("html, body").stop().animate({
        scrollTop: $("#container_locations").offset().top
    },0);
    $(".white_overlay").stop().animate({
        left: '0'
    }, 500 ,function(){
        setTimeout(function(){
            $(".white_overlay").stop().animate({
                left:'-100%'
            },1000);
        }, 500);
    });
    setTimeout(function(){
        $("#container_locations").removeClass("hidden");
        $("#container").addClass("hidden");
        $("#container_contact").addClass("hidden");
        $("#container_aboutus").addClass("hidden");
        $("#container_menu").addClass("hidden");
    },500);
});

$(".m_nav_contact").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $(".mobile_nav_list").toggleClass("slideInRight");
    $(".mobile_nav_list").toggleClass("slideOutRight");
    $("html, body").stop().animate({
        scrollTop: $("#container_contact").offset().top
    },0);
    $("#container_contact").removeClass("hidden");
    $("#container").addClass("hidden");
    $("#container_locations").addClass("hidden");
    $("#container_aboutus").addClass("hidden");
    $("#container_menu").addClass("hidden");
});

$(".d_nav_contact").on("click",function(){
    $("html, body").stop().animate({
        scrollTop: $("#container_contact").offset().top
    },0);
    $(".white_overlay").stop().animate({
        left: '0'
    }, 500 ,function(){
        setTimeout(function(){
            $(".white_overlay").stop().animate({
                left:'-100%'
            },1000);
        }, 500);
    });
    setTimeout(function(){
        $("#container_contact").removeClass("hidden");
        $("#container").addClass("hidden");
        $("#container_locations").addClass("hidden");
        $("#container_aboutus").addClass("hidden");
        $("#container_menu").addClass("hidden");
    },500);
});

/**LOCATION */
$(".ls_0").on("click",function(){$(".lsi_0").stop().fadeToggle();});
$(".ls_1").on("click",function(){$(".lsi_1").stop().fadeToggle();});
$(".ls_2").on("click",function(){$(".lsi_2").stop().fadeToggle();});
$(".ls_3").on("click",function(){$(".lsi_3").stop().fadeToggle();});
$(".ls_4").on("click",function(){$(".lsi_4").stop().fadeToggle();});
$(".ls_5").on("click",function(){$(".lsi_5").stop().fadeToggle();});


$(".read_more").on("mouseover",function(){
    $(".read_more").stop().animate({
        backgroundColor: 'black',
        color: 'white'
    });
});

$(".read_more").on("mouseout",function(){
    $(".read_more").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".hsq_0").on("mouseover",function(){
    $(".shadowoverlay_0").stop().fadeIn();
});
$(".hsq_0").on("mouseout",function(){
    $(".shadowoverlay_0").stop().fadeOut();
});
$(".hsq_1").on("mouseover",function(){
    $(".shadowoverlay_1").stop().fadeIn();
});
$(".hsq_1").on("mouseout",function(){
    $(".shadowoverlay_1").stop().fadeOut();
});
$(".hsq_2").on("mouseover",function(){
    $(".shadowoverlay_2").stop().fadeIn();
});
$(".hsq_2").on("mouseout",function(){
    $(".shadowoverlay_2").stop().fadeOut();
});

$(".hsq_b0").on("mouseover",function(){
    $(".hsq_b0").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".hsq_b0").on("mouseout",function(){
    $(".hsq_b0").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".hsq_b1").on("mouseover",function(){
    $(".hsq_b1").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".hsq_b1").on("mouseout",function(){
    $(".hsq_b1").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".hsq_b2").on("mouseover",function(){
    $(".hsq_b2").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".hsq_b2").on("mouseout",function(){
    $(".hsq_b2").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".ls_0").on("mouseover",function(){
    $(".loc_text0").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".ls_0").on("mouseout",function(){
    $(".loc_text0").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".ls_1").on("mouseover",function(){
    $(".loc_text1").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".ls_1").on("mouseout",function(){
    $(".loc_text1").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".ls_2").on("mouseover",function(){
    $(".loc_text2").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".ls_2").on("mouseout",function(){
    $(".loc_text2").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".ls_3").on("mouseover",function(){
    $(".loc_text3").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".ls_3").on("mouseout",function(){
    $(".loc_text3").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".ls_4").on("mouseover",function(){
    $(".loc_text4").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".ls_4").on("mouseout",function(){
    $(".loc_text4").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".ls_5").on("mouseover",function(){
    $(".loc_text5").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".ls_5").on("mouseout",function(){
    $(".loc_text5").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});

$(".sub_button").on("mouseover",function(){
    $(".sub_button").stop().animate({
        backgroundColor: 'white',
        color: 'black'
    });
});

$(".sub_button").on("mouseout",function(){
    $(".sub_button").stop().animate({
        backgroundColor: 'transparent',
        color: 'white'
    });
});