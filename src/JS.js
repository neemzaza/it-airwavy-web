import $ from 'jquery'
import Logo from './img/NewLogo2021.png'

var upScroll = window.pageYOffset

$(document).on('scroll', function () {
    var downScroll = window.pageYOffset
    if (upScroll > downScroll) {
        console.log("worked!")
    } else {
        $("#textinner").addClass("animate__bounceIn")
        $("#textinner").removeClass("animate__bounceOut")
        $("#textinner").html("<img src='" + Logo + "' width='30' />")
        console.log("down worked!")
    }

    if ($("#spy").offset().top >= 350) {
        $("hr").css("width", "100%")
        // $("#navbar").css("top", "-100px")
        $("#timeb1").removeClass("animate__fadeOutDown")
        $("#timeb1").addClass("animate__fadeInUp")

        $("#timeb2").removeClass("animate__fadeOutDown")
        $("#timeb2").addClass("animate__fadeInUp")
        // $("#timeb2").addClass("animate__delay-1s")
        console.log("hidden!!")
        // if ($("#spy").offset().top >= $("#hereshow").position().top) {
        //     $("#navbar").css("top", "0px")
        // } else {
        //     $("#navbar").css("top", "-100px")
        // }
    }

    else if ($("#spy").offset().top <= 3) {
        $("#navbar").css("height", "60px")

        $("#navbar").css("backdrop-filter", "blur(0px)")
        // $("#navbar").css("background", "transparent")

        // $(".logonav").css("width", "70px")
        $("#textinner").removeClass("animate__bounceIn")
        //$("#textinner").addClass("animate__bounceIn")

        $("#textinner").html("<img src='" + Logo + "' width='30' />&nbsp;AirwavyIT")
    } else { // This is #spy > 1 but in 349
        $("#navbar").css("height", "51px")
        $("hr").css("width", "0%")
        $("#navbar").css("top", "0px")

        $(".hi1").css("width", "100%")

        $("#timeb1").removeClass("animate__fadeInUp")
        $("#timeb1").addClass("animate__fadeOutDown")

        $("#timeb2").removeClass("animate__fadeInUp")
        $("#timeb2").addClass("animate__fadeOutDown")
    }
    upScroll = downScroll

    if ($("#spy").offset().top >= $("#boxsub").position().top) { //On BoxSub
        $(".stickyboxsub").addClass("fixed-top")

        $(".airwavyzone").removeClass("hider")
        $(".airwavyzone").addClass("animate__fadeIn")
        $(".wowdes").css("display", "none")
        $(".airwavyzone").removeClass("animate__fadeOut")

        // Action...
        $("#para1").removeClass("animate__fadeOut")
        $("#para1").addClass("animate__fadeInDown")

    }
    if ($("#spy").offset().top <= $("#spybox").position().top) {
        $(".airwavyzone").removeClass("animate__fadeIn")
        $(".airwavyzone").addClass("animate__fadeOut")

        $(".airwavyzone").addClass("hider")
        $(".wowdes").css("display", "block")
        // $(".airwavyzone").css("top", "-100px")
        $(".stickyboxsub").removeClass("fixed-top")
        $(".stickyboxsub").removeClass("fixedcus")
        // $(".boxsub").css("margin-left", "0px")
        // $(".boxsub").css("margin-left", $(".boxsub").position().left + "px")
    }


    if ($("#spy").offset().top >= $("#about").position().top && $("#spy").offset().top < $("#ex").position().top) {
        // Activing Menu...
        $("#exmenu").removeClass("active")
        $("#gamemenu").removeClass("active")

        $("#aboutmenu").addClass("active")


    }
    else if ($("#spy").offset().top >= $("#ex").position().top && $("#spy").offset().top < $("#game").position().top) {
        $("#aboutmenu").removeClass("active")
        $("#gamemenu").removeClass("active")

        $("#exmenu").addClass("active")
    }
    else if ($("#spy").offset().top >= $("#game").position().top) {
        $("#aboutmenu").removeClass("active")
        $("#exmenu").removeClass("active")

        $("#gamemenu").addClass("active")
    }

    


    if ($("#spy").offset().top >= $("#hereshow").position().top) {
        $(".airwavyzone").css("top", "-100px")
        // $(".airwavyzone").css("display","none")
        $(".boxsub").addClass("animate__bounceOut")
    } else {
        $(".airwavyzone").css("top", "0px")
        // $(".airwavyzone").css("display","block")
        $(".boxsub").removeClass("animate__bounceOut")
        $(".boxsub").addClass("animate__bounceIn")
    }

    //progress of page end
    for (let i = 0; i <= ($("#spy").offset().top / $(document).height()) * 100; i++) {
        $(".progressbar").css("width", i + "%")
        // console.log(i)
    }

})


console.log(window.location.href)
if (document.URL.includes("/")) {
    $(".home").removeClass("normal")
    $(".home").addClass("active")
    $(".comm").addClass("normal")
    $(".devmenu").addClass("normal")

    $(".comm").removeClass("active")
    $(".devmenu").removeClass("active")
}

if (document.URL.includes("/comm")) {
    $(".home").addClass("normal")
    $(".home").removeClass("active")
    $(".devmenu").removeClass("active")
    $(".comm").removeClass("normal")

    $(".comm").addClass("active")
}

if (document.URL.includes("/dev")) {
    $(".home").addClass("normal")
    $(".home").removeClass("active")
    $(".devmenu").removeClass("normal")
    $(".comm").removeClass("active")

    $(".devmenu").addClass("active")
}

$("#navtoggler").on('click', () => {
    $("body").toggleClass("activebody")
    $(".navbar-toggler-iconn").toggleClass("activetog")
    console.log($("#textinner").html())
    if ($("#textinner").html() === "<img class=\"logonav\" src=\"img/NewLogo2021.png\">&nbsp;AirwavyIT") {
        $("#textinner").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu<br><img class='logonav' src='img/NewLogo2021.png' />&nbsp;AirwavyIT")
    } else {
        $("#textinner").html("<img class='logonav' src='img/NewLogo2021.png' />&nbsp;AirwavyIT")
    }
    $("#navbar").toggleClass("activemenu")
    $(".navbar-brand").toggleClass("activebrand")
})