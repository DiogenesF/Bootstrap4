$(document).ready(function () {
    $("#loginButton").click(function() {
        $("#loginModal").modal("toggle");
    });
    $("#loginDismiss").click(function() {
        $("#loginModal").modal("toggle");
    });
    $("#reserveButton").click(function() {
        $("#reservetableModal").modal("toggle");
    });
    $("#reservetableDismiss").click(function() {
        $("#reservetableModal").modal("toggle");
    });
    $("#cancelButtonLogin").click(function() {
        $("#loginModal").modal("hide");
    });
    $("#cancelButtonReserve").click(function() {
        $("#reservetableModal").modal("hide");
    });
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        } 
    });
});