let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
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

    if (slideIndex === 1){
        slides[slideIndex - 1].style.display = "block";
        slides[slides.length - 1].style.display = "block";
    } else if (slideIndex === slides.length){
        slides[slideIndex - 1].style.display = "block";
        slides[0].style.display = "block";
    }
    else {
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 2].style.display = "block";
    }
    dots[slideIndex - 1].className += " active";
}