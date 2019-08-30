function toggleResponsive() {
    var topNav = $("#topnavId");
    if (topNav.attr("class") == "topnav") {
        topNav.addClass("responsive");
    } else {
        topNav.removeClass("responsive");
    }
}

function toggleSidebar() {
    $(".sidebar").css("display", "block");
}

function removeSidebar() {
    $(".sidebar").css("display", "none");
}