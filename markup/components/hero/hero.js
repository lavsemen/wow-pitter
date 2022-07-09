document.addEventListener('DOMContentLoaded', () => {
    const slider = new Swiper('.hero', {
        slidesPerView: 'auto',
        spaceBetween: 155,
        grabCursor: true,
        speed: 800,
        navigation: {
            nextEl: '.hero .swiper-button-next',
            prevEl: '.hero .swiper-button-prev'
        },
        pagination: {
            el: ".hero .swiper-pagination",
            type: "bullets",
            clickable: true,
          },
    })
})
