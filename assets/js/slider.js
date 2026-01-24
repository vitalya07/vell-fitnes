 new Swiper ('.special__swiper', {
    direction: 'horizontal',
    loop: true,    
    navigation: {
        nextEl: '.slider__btn-next',
        prevEl: '.slider__btn-prev ',
    },
    breakpoints: {
        320: { slidesPerView: 1 }, // Для мобильных
        768: { slidesPerView: 3,  spaceBetween: -60 }, // Для планшетов
        1024: { slidesPerView: 4,  spaceBetween: 30 } // Для десктопов
    }
});

new Swiper ('.news__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.news__btn-next',
        prevEl: '.slider__btn-prev ',
    },
}) 