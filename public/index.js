function toggleResponsive() {
    var topNav = $("#topnavId");
    if (topNav.attr("class") == "topnav") {
        topNav.addClass("responsive");
    } else {
        topNav.removeClass("responsive");
    }
}