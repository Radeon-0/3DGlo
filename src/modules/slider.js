const slider = () => {

    const sliderBlock = document.querySelector(".portfolio-content");
    const slides = document.querySelectorAll(".portfolio-item");
    const portfolioDots = document.querySelector('.portfolio-dots');

    const timerInterval = 2000;


    let currentSLide = 0;
    let interval;

    const prevSLider = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const createDots = () => {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("li");

            dot.classList.add("dot");

            portfolioDots.append(dot);
        }

    };
    createDots();
    
    const dots = document.querySelectorAll('.dot');

    const autoSlide = () => {
        prevSLider(slides, currentSLide, 'portfolio-item-active');
        prevSLider(dots, currentSLide, 'dot-active');
        currentSLide++;
        if (currentSLide >= slides.length) {
            currentSLide = 0;
        }
        nextSlide(slides, currentSLide, 'portfolio-item-active');
        nextSlide(dots, currentSLide, 'dot-active');

    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    }

    const stopSLide = () => {
        clearInterval(interval);
    }




    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot,.portfolio-btn')) {
            return;
        }

        prevSLider(slides, currentSLide, 'portfolio-item-active');
        prevSLider(dots, currentSLide, 'dot-active');
        if (e.target.matches('#arrow-right')) {
            currentSLide++;

        } else if (e.target.matches('#arrow-left')) {
            currentSLide--;

        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSLide = index;
                }
            });
        }

        if (currentSLide >= slides.length) {
            currentSLide = 0;
        }
        if (currentSLide < 0) {
            currentSLide = slides.length - 1;
        }

        nextSlide(slides, currentSLide, 'portfolio-item-active');
        nextSlide(dots, currentSLide, 'dot-active');
    });


    sliderBlock.addEventListener("mouseenter", (e) => {
        if (e.target.matches('.dot,.portfolio-btn')) {
            stopSLide();
        }
    }, true);

    sliderBlock.addEventListener("mouseleave", (e) => {
        if (e.target.matches('.dot,.portfolio-btn')) {
            startSlide(timerInterval);
        }
    }, true);

    startSlide(timerInterval);

}
export default slider;