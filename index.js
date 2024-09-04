document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = carouselTrack.children[0].getBoundingClientRect().width;
        console.log('Slide Width:', slideWidth);
        console.log('Current Slide:', currentSlide);
        carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === carouselTrack.children.length - 1;
    }

    nextBtn.addEventListener("click", () => {
        if (currentSlide < carouselTrack.children.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
