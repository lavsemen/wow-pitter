document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.slider-reviews', {
        slidesPerView: 2,
        navigation: {
            nextEl: '.slider-reviews .swiper-button-next',
            prevEl: '.slider-reviews .swiper-button-prev',
        },
        spaceBetween: 40,
        speed: 800
    })
})
