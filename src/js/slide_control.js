let slideIndex = 1;
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);

// Next/previous controls
function plusSlides(n, deck) {
    showSlides(slideIndex += n, deck);
}

// Thumbnail image controls
function currentSlide(n, deck) {
    showSlides(slideIndex = n, deck);
}

function showSlides(n, deck) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + deck.toString());
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
