document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.slider-events', {
        slidesPerView: 2,
        navigation: {
            nextEl: '.slider-events .swiper-button-next',
            prevEl: '.slider-events .swiper-button-prev',
        },
        spaceBetween: 40,
        speed: 800
    })
})
