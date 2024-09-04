const carouselTrack = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentSlide = 0;
    const slideWidth = carouselTrack.children[0].offsetWidth;

    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      prevBtn.disabled = currentSlide === 0;
      nextBtn.disabled = currentSlide === carouselTrack.children.length - 1;
    }

    nextBtn.addEventListener("click", () => {
      currentSlide++;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentSlide--;
      updateCarousel();
    });

    updateCarousel();