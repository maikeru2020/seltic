var slideIndex = 1;

function slideShow() {
    ++slideIndex;
    if (slideIndex == 5) {
        slideIndex = 1;
    }

    setTimeout(function() { 
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
    }, 40000);
}

function toggleMap() {
    $("#map").toggle();
}