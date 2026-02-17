    const slideContainer = document.querySelector(".image");
    const slides = document.querySelectorAll(".logo");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".previous");

    let currentIndex = 0;
    const slideWidth = document.querySelector(".carousel").clientWidth;

    const totalSlides = slides.length;

    function updateSlide() {
        slideContainer.style.transform = 
            `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlide();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSlide();
    });


    setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlide();
    }, 4000);

