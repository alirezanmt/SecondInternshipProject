const amazing = () => {
    const divs = document.querySelectorAll(".faq-section-1__container__img");

    divs[0].addEventListener('click', () => {
        divs[0].classList.remove("faq-section-1__container__img--dark");
        divs[0].classList.add("faq-section-1__container__img--light");

        divs[1].classList.remove("faq-section-1__container__img--light");
        divs[1].classList.add("faq-section-1__container__img--dark");

        divs[2].classList.remove("faq-section-1__container__img--light");
        divs[2].classList.add("faq-section-1__container__img--dark");

        divs[3].classList.remove("faq-section-1__container__img--light");
        divs[3].classList.add("faq-section-1__container__img--dark");
    });

    divs[1].addEventListener('click', () => {
        divs[1].classList.remove("faq-section-1__container__img--dark");
        divs[1].classList.add("faq-section-1__container__img--light");

        divs[0].classList.remove("faq-section-1__container__img--light");
        divs[0].classList.add("faq-section-1__container__img--dark");

        divs[2].classList.remove("faq-section-1__container__img--light");
        divs[2].classList.add("faq-section-1__container__img--dark");

        divs[3].classList.remove("faq-section-1__container__img--light");
        divs[3].classList.add("faq-section-1__container__img--dark");
    });

    divs[2].addEventListener('click', () => {
        divs[2].classList.remove("faq-section-1__container__img--dark");
        divs[2].classList.add("faq-section-1__container__img--light");

        divs[1].classList.remove("faq-section-1__container__img--light");
        divs[1].classList.add("faq-section-1__container__img--dark");

        divs[0].classList.remove("faq-section-1__container__img--light");
        divs[0].classList.add("faq-section-1__container__img--dark");

        divs[3].classList.remove("faq-section-1__container__img--light");
        divs[3].classList.add("faq-section-1__container__img--dark");
    });

    divs[3].addEventListener('click', () => {
        divs[3].classList.remove("faq-section-1__container__img--dark");
        divs[3].classList.add("faq-section-1__container__img--light");

        divs[1].classList.remove("faq-section-1__container__img--light");
        divs[1].classList.add("faq-section-1__container__img--dark");

        divs[2].classList.remove("faq-section-1__container__img--light");
        divs[2].classList.add("faq-section-1__container__img--dark");

        divs[0].classList.remove("faq-section-1__container__img--light");
        divs[0].classList.add("faq-section-1__container__img--dark");
    });
}

amazing();

const dd = () => {
    const containers = document.querySelectorAll(".faq-section-2__container");
    const down = document.querySelectorAll(".faq-section-2__container__dd");
    const minus = document.querySelectorAll(".faq-section-2__container__top__plus__v");

    containers[0].addEventListener('click', () => {
        containers[0].classList.toggle("faq-section-2__container--biggy");
        down[0].classList.toggle("faq-section-2__container__dd--come-down");
        minus[0].classList.toggle("faq-section-2__container__top__plus__v--2minus");

        containers[1].classList.remove("faq-section-2__container--biggy");
        down[1].classList.remove("faq-section-2__container__dd--come-down");
        minus[1].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[2].classList.remove("faq-section-2__container--biggy");
        down[2].classList.remove("faq-section-2__container__dd--come-down");
        minus[2].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[3].classList.remove("faq-section-2__container--biggy");
        down[3].classList.remove("faq-section-2__container__dd--come-down");
        minus[3].classList.remove("faq-section-2__container__top__plus__v--2minus");
    });

    containers[1].addEventListener('click', () => {
        containers[1].classList.toggle("faq-section-2__container--biggy");
        down[1].classList.toggle("faq-section-2__container__dd--come-down");
        minus[1].classList.toggle("faq-section-2__container__top__plus__v--2minus");

        containers[0].classList.remove("faq-section-2__container--biggy");
        down[0].classList.remove("faq-section-2__container__dd--come-down");
        minus[0].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[2].classList.remove("faq-section-2__container--biggy");
        down[2].classList.remove("faq-section-2__container__dd--come-down");
        minus[2].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[3].classList.remove("faq-section-2__container--biggy");
        down[3].classList.remove("faq-section-2__container__dd--come-down");
        minus[3].classList.remove("faq-section-2__container__top__plus__v--2minus");
    });

    containers[2].addEventListener('click', () => {
        containers[2].classList.toggle("faq-section-2__container--biggy");
        down[2].classList.toggle("faq-section-2__container__dd--come-down");
        minus[2].classList.toggle("faq-section-2__container__top__plus__v--2minus");

        containers[1].classList.remove("faq-section-2__container--biggy");
        down[1].classList.remove("faq-section-2__container__dd--come-down");
        minus[1].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[0].classList.remove("faq-section-2__container--biggy");
        down[0].classList.remove("faq-section-2__container__dd--come-down");
        minus[0].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[3].classList.remove("faq-section-2__container--biggy");
        down[3].classList.remove("faq-section-2__container__dd--come-down");
        minus[3].classList.remove("faq-section-2__container__top__plus__v--2minus");
    });

    containers[3].addEventListener('click', () => {
        containers[3].classList.toggle("faq-section-2__container--biggy");
        down[3].classList.toggle("faq-section-2__container__dd--come-down");
        minus[3].classList.toggle("faq-section-2__container__top__plus__v--2minus");

        containers[1].classList.remove("faq-section-2__container--biggy");
        down[1].classList.remove("faq-section-2__container__dd--come-down");
        minus[1].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[2].classList.remove("faq-section-2__container--biggy");
        down[2].classList.remove("faq-section-2__container__dd--come-down");
        minus[2].classList.remove("faq-section-2__container__top__plus__v--2minus");

        containers[0].classList.remove("faq-section-2__container--biggy");
        down[0].classList.remove("faq-section-2__container__dd--come-down");
        minus[0].classList.remove("faq-section-2__container__top__plus__v--2minus");
    });

}
dd();

const slider = () => {
    const slides = document.querySelectorAll('.faq-section-1__small-container__wrapper__slide');
    console.log(slides);

    slides[0].addEventListener('click', () => {

        slides[2].classList.remove('move-slide-1');
        slides[3].classList.remove('move-slide-1');
        slides[0].classList.remove('move-slide-1');
        slides[1].classList.remove('move-slide-1');

        slides[2].classList.remove('move-slide-2');
        slides[3].classList.remove('move-slide-2');
        slides[0].classList.remove('move-slide-2');
        slides[1].classList.remove('move-slide-2');

        slides[2].classList.remove('move-slide-3');
        slides[3].classList.remove('move-slide-3');
        slides[0].classList.remove('move-slide-3');
        slides[1].classList.remove('move-slide-3');


        slides[0].classList.remove("faq-section-1__container__img--dark");
        slides[0].classList.add("faq-section-1__container__img--light");
        slides[1].classList.remove("faq-section-1__container__img--light");
        slides[1].classList.add("faq-section-1__container__img--dark");
        slides[2].classList.remove("faq-section-1__container__img--light");
        slides[2].classList.add("faq-section-1__container__img--dark");
        slides[3].classList.remove("faq-section-1__container__img--light");
        slides[3].classList.add("faq-section-1__container__img--dark");
    });

    slides[1].addEventListener('click', () => {

        slides[2].classList.remove('move-slide-2');
        slides[3].classList.remove('move-slide-2');
        slides[0].classList.remove('move-slide-2');
        slides[1].classList.remove('move-slide-2');

        slides[2].classList.remove('move-slide-3');
        slides[3].classList.remove('move-slide-3');
        slides[0].classList.remove('move-slide-3');
        slides[1].classList.remove('move-slide-3');

        slides[2].classList.remove('move-slide-1');
        slides[3].classList.remove('move-slide-1');
        slides[0].classList.remove('move-slide-1');
        slides[1].classList.remove('move-slide-1');

        slides[2].classList.add('move-slide-1');
        slides[3].classList.add('move-slide-1');
        slides[0].classList.add('move-slide-1');
        slides[1].classList.add('move-slide-1');


        slides[1].classList.remove("faq-section-1__container__img--dark");
        slides[1].classList.add("faq-section-1__container__img--light");
        slides[0].classList.remove("faq-section-1__container__img--light");
        slides[0].classList.add("faq-section-1__container__img--dark");
        slides[2].classList.remove("faq-section-1__container__img--light");
        slides[2].classList.add("faq-section-1__container__img--dark");
        slides[3].classList.remove("faq-section-1__container__img--light");
        slides[3].classList.add("faq-section-1__container__img--dark");
    });

    slides[2].addEventListener('click', () => {
        slides[0].classList.remove('move-slide-1');
        slides[1].classList.remove('move-slide-1');
        slides[2].classList.remove('move-slide-1');
        slides[3].classList.remove('move-slide-1');

        slides[0].classList.remove('move-slide-3');
        slides[1].classList.remove('move-slide-3');
        slides[2].classList.remove('move-slide-3');
        slides[3].classList.remove('move-slide-3');

        slides[0].classList.remove('move-slide-2');
        slides[1].classList.remove('move-slide-2');
        slides[2].classList.remove('move-slide-2');
        slides[3].classList.remove('move-slide-2');

        slides[0].classList.add('move-slide-2');
        slides[1].classList.add('move-slide-2');
        slides[2].classList.add('move-slide-2');
        slides[3].classList.add('move-slide-2');

        slides[2].classList.remove("faq-section-1__container__img--dark");
        slides[2].classList.add("faq-section-1__container__img--light");
        slides[1].classList.remove("faq-section-1__container__img--light");
        slides[1].classList.add("faq-section-1__container__img--dark");
        slides[0].classList.remove("faq-section-1__container__img--light");
        slides[0].classList.add("faq-section-1__container__img--dark");
        slides[3].classList.remove("faq-section-1__container__img--light");
        slides[3].classList.add("faq-section-1__container__img--dark");
    });

    slides[3].addEventListener('click', () => {
        slides[0].classList.remove('move-slide-1');
        slides[1].classList.remove('move-slide-1');
        slides[2].classList.remove('move-slide-1');
        slides[3].classList.remove('move-slide-1');

        slides[0].classList.remove('move-slide-2');
        slides[1].classList.remove('move-slide-2');
        slides[2].classList.remove('move-slide-2');
        slides[3].classList.remove('move-slide-2');

        slides[0].classList.remove('move-slide-3');
        slides[1].classList.remove('move-slide-3');
        slides[2].classList.remove('move-slide-3');
        slides[3].classList.remove('move-slide-3');

        slides[0].classList.add('move-slide-3');
        slides[1].classList.add('move-slide-3');
        slides[2].classList.add('move-slide-3');
        slides[3].classList.add('move-slide-3');

        slides[3].classList.remove("faq-section-1__container__img--dark");
        slides[3].classList.add("faq-section-1__container__img--light");
        slides[1].classList.remove("faq-section-1__container__img--light");
        slides[1].classList.add("faq-section-1__container__img--dark");
        slides[2].classList.remove("faq-section-1__container__img--light");
        slides[2].classList.add("faq-section-1__container__img--dark");
        slides[0].classList.remove("faq-section-1__container__img--light");
        slides[0].classList.add("faq-section-1__container__img--dark");
    });
}

slider();