document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.slider-events', {
        slidesPerView: 2,
        navigation: {
            nextEl: '.slider-events .swiper-button-next',
            prevEl: '.slider-events .swiper-button-prev',
        },
        speed: 300,
        spaceBetween: 40,
    })
})
