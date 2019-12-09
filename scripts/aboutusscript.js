/* REFERENCE: W3 Schools Javascript slideshow */

//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    //showSlides(slideIndex += n);
}

/*document.getElementsByClassName("prev")[0].style.display = "none";

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex == 1) { //hide prev arrow on first slide
        document.getElementsByClassName("prev")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("prev")[0].style.display = "block";
    }
    if (slideIndex == slides.length) { //hide next arrow on last slide
        document.getElementsByClassName("next")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("next")[0].style.display = "block";
    }


    slides[slideIndex - 1].style.display = "flex";
}*/

$(document).ready(function () {

    $(".prev").hide()
    $(".mySlides").eq(0).css("display", "flex");

    var slideIndex = 1;

    $(".prev").click(function () {
        $(".mySlides").css("display", "none");;
        if (slideIndex == 2) {//hide the prev button back when leaving the 2nd slide
            $(".prev").hide();
        }
        if (slideIndex == 5) { //bring the next button back when leaving the 5th slide
            $(".next").show();
        }
        if(slideIndex != 1){
            slideIndex--;
        }
        $(".mySlides").eq(slideIndex - 1).css("display", "flex");
    });

    $(".next").click(function () {
        $(".mySlides").css("display", "none");
        if (slideIndex == 4) {//hide the next button back when leaving the 4th slide
            $(".next").hide();
        }
        if (slideIndex == 1) { //bring the prev button back when leaving the 1st slide
            $(".prev").show();
        }
        if(slideIndex != 5){
            slideIndex++;
        }
        $(".mySlides").eq(slideIndex - 1).css("display", "flex");
    });
});