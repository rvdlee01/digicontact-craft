import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import _ from 'lodash.debounce';

window.Alpine = Alpine;
Alpine.plugin(collapse);

import { Swiper, Navigation, Autoplay} from 'swiper';
Swiper.use([ Navigation, Autoplay]);

Alpine.magic('carousel', (el, { Alpine }) => (subject) => {
    const element = el.querySelector('.swiper');
    let r = (Math.random() + 1).toString(36).substring(7);
    el.classList.add(`swiper-${r}`);

    const swiper = new Swiper(element, {
        ...subject,
        navigation: {
            prevEl: `.swiper-${r} .swiper-prev`,
            nextEl: `.swiper-${r} .swiper-next`,
        },
    });
    
    el.querySelectorAll(`.swiper-${r} .swiper-prev`).forEach((q) => q.disabled = true);

    swiper.on('reachBeginning', (_) => {
        el.querySelectorAll(`.swiper-${r} .swiper-prev`).forEach((q) => q.disabled = true);
    });

    swiper.on('reachEnd', (_) => {
        el.querySelectorAll(`.swiper-${r} .swiper-next`).forEach((q) => q.disabled = true);
    });

    swiper.on('slideChange', (_) => {
        if (!_.isBeginning) {
            el.querySelectorAll(`.swiper-${r} .swiper-prev`).forEach((q) => q.disabled = false);
        }
        if (!_.isEnd) {
            el.querySelectorAll(`.swiper-${r} .swiper-next`).forEach((q) => q.disabled = false);
        }
    });
});

Alpine.start();

import './../sass/app.scss';
import './scroll-to.js';
