function gallery_plagin(slide_active = 0) {
    const slides = document.querySelectorAll('.slide');
/*
    if (slide_active == undefined) {
        slide_active = 0;
    } 
*/
    slides[slide_active].classList.add('active');
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        });
    }
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}
gallery_plagin(2);
