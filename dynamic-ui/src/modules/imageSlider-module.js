const gallery = [
    'https://thumbs.dreamstime.com/z/stupid-looking-animal-goofy-llama-funny-meme-image-copy-s-space-dumb-silly-expression-isolated-against-black-background-123981689.jpg',
    'https://thumbs.dreamstime.com/z/white-owl-shocking-meme-face-thailand-75723899.jpg',
    'https://thumbs.dreamstime.com/z/meme-troll-graffiti-internet-wall-73472074.jpg',
    'https://thumbs.dreamstime.com/z/sleeping-red-panda-funny-cute-animal-image-ailurus-fulgens-asleep-afternoon-siesta-90417307.jpg',
    'https://thumbs.dreamstime.com/z/peekaboo-cute-seal-covering-its-eyes-funny-animal-meme-image-waking-up-headache-morning-night-stressed-185765774.jpg',
];

let counter = 0;
let nextLimit = 1;


function imageSlider() {
    const slider = document.createElement('section');
    slider.classList.add('c-slider');
    slider.innerHTML = `<div class="c-slider__content">
        <div class="c-slider__content__arrow">
            <div class="c-slider__content__arrow__box c-slider__content__arrow__box--left"><i class="fas fa-chevron-left"></i></div>
        </div>
        <div class="c-slider__content__slider">
            <div class="c-slider__content__slider__img"></div>
        </div>
        <div class="c-slider__content__arrow">
            <div class="c-slider__content__arrow__box c-slider__content__arrow__box--right"><i class="fas fa-chevron-right"></i></div>
        </div>
    </div>
    <div class="c-slider__nav"></div>`;

    document.querySelector('body').appendChild(slider);
    _initGallery();
    _arrowEvent();
    _initGallery();
    _initTracker();
    _automaticSlider();
}

function _initGallery() {
    const content = document.querySelector('.c-slider__content__slider__img');

    for (let i = 0; i < gallery.length; i++) {
        let image = document.createElement('img');
        image.src = gallery[i];
        image.dataset.index = i;
        content.appendChild(image);
    }
}

function _initTracker() {
    const tracker = document.querySelector('.c-slider__nav');

    for (let i = 0; i < gallery.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('c-slider__nav__dot');
        dot.innerHTML = '<div class="c-slider__nav__dot__fill"></div>';
        tracker.appendChild(dot);
    }

    _trackSlide();
    _trackerEvent();
}

function _arrowEvent() {
    const arrowLeft = document.querySelector('.c-slider__content__arrow__box--left');
    const arrowRight = document.querySelector('.c-slider__content__arrow__box--right');

    arrowRight.addEventListener('click', () => {
        if (counter < gallery.length - nextLimit) {
            counter++;
            _carousel();
            _trackSlide();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            _carousel();
            _trackSlide();
        }
    });
}

function _carousel() {
    const content = document.querySelector('.c-slider__content__slider__img');
    const slideSize = content.clientWidth;

    if (counter < gallery.length) {
        content.style.transform = `translateX(-${counter * slideSize}px)`;
    }
}

function _trackSlide() {
    const dots = document.querySelectorAll('.c-slider__nav__dot');
    
    for (let i = 0; i < dots.length; i++) {
        if(i === counter) {
            dots[i].classList.add('isVisible');
        } else {
            dots[i].classList.remove('isVisible');
        }
    }
}

function _trackerEvent() {
    const dots = document.querySelectorAll('.c-slider__nav__dot');

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => {
            counter = i;
            _carousel();
            _trackSlide();
        });
    }
}

function _automaticSlider() {
    setInterval(() => {
        if(counter < gallery.length - nextLimit) {
            counter++;
        } else {
            counter = 0;
        }
        _carousel();
        _trackSlide();
    }, 5000);
}

export { imageSlider };
