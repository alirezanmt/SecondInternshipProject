const slider = () => {

    const slides = document.querySelectorAll('.section-3__container__slides-box__wrapper__slide');
    console.log(slides);

    slides[1].addEventListener('click', () => {
        console.log("helloooooo");
        slides[0].classList.toggle('move-s-1');
        slides[2].classList.toggle('move-s-1');
        slides[3].classList.toggle('move-s-1');
        slides[1].classList.toggle('move-s-1');
    });

    slides[2].addEventListener('click', () => {
        slides[0].classList.toggle('move-s-2');
        slides[1].classList.toggle('move-s-2');
        slides[2].classList.toggle('move-s-2');
        slides[3].classList.toggle('move-s-2');
    });

    slides[3].addEventListener('click', () => {
        slides[0].classList.toggle('move-s-3');
        slides[1].classList.toggle('move-s-3');
        slides[2].classList.toggle('move-s-3');
        slides[3].classList.toggle('move-s-3');
    });
}

slider();