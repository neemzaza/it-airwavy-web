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

        $("#textinner").html("<img src='" + Logo + "' width='30' />&nbsp;Airwavy")
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

    //progress of page end
    for (let i = 0; i <= ($("#spy").offset().top / $(document).height()) * 130; i++) {
        $(".progressbar").css("width", i + "%")
        // console.log(i)
    }

})

if (document.URL.includes("/")) {
    $(".home").removeClass("normal")
    $(".home").addClass("active")
    $(".comm").addClass("normal")
    $(".devmenu").addClass("normal")

    $(".comm").removeClass("active")
    $(".devmenu").removeClass("active")

    // Section 2 (Active NavBar in Main Page)
}

else if (document.URL.includes("/comm")) {
    $(".home").addClass("normal")
    $(".home").removeClass("active")
    $(".devmenu").removeClass("active")
    $(".comm").removeClass("normal")

    $(".comm").addClass("active")
}

else if (document.URL.includes("/dev")) {
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