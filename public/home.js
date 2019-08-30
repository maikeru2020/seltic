var slideIndex = 1;

function slideShow() {
    var timeOut = 0
    if (slideIndex == 1) {
        timeOut = 5000;
    }
    ++slideIndex;
    if (slideIndex == 5) {
        slideIndex = 1;
    }

    setTimeout(fade, timeOut);
}

function fade() { 
    $("#slide").fadeOut(8000, function() {
    $("#slide").attr("src", "images/image" + slideIndex + ".jpg");
    if (slideIndex == 2) {
        $("#slide").css("height", "100%");
        $("#slide").css("width", "auto");
    } else {
        $("#slide").css("height", "auto");
        $("#slide").css("width", "100%");
    }
    
    $("#slide").fadeIn(8000, slideShow);

    });
}

function toggleMap() {
    if ($("#map").html() == "") {
        var mapHtml = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.1557909477664!2d-4.013597870864654!3d5.321330535083968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb48e7418669%3A0xf4cf652607ae6fe1!2sResidence%20Horizon!5e0!3m2!1sen!2sus!4v1566945296972!5m2!1sen!2sus' width='' height='' frameborder='0' style='border:0;' allowfullscreen=''></iframe>";
        $("#map").html(mapHtml);
    } else {
        $("#map").html("");
    }
}