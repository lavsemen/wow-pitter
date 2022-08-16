document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const sideBar = document.querySelector('.header-sidebar');


    burger.addEventListener('click', e => {
        burger.classList.toggle('active')
        sideBar.classList.toggle('active')
    } )
})
