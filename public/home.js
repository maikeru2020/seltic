var slideIndex = 1;

function slideShow() {
    ++slideIndex;
    if (slideIndex == 4) {
        slideIndex = 1;
    }
    console.log(slideIndex);
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

function nextSlide() {
    --slideIndex;
    if (slideIndex == 3) {
        slideIndex = 1;
    }
    $("#slide").attr("src", "images/image" + slideIndex + ".jpeg");
}

function prevSlide() {
    --slideIndex;
    if (slideIndex == 0) {
        slideIndex = 2;
    }
    $("#slide").attr("src", "images/image" + slideIndex + ".jpeg");
}