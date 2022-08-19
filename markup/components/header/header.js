document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const sideBar = document.querySelector('.header-sidebar');
    let overflow = true;

    burger.addEventListener('click', e => {
        document.body.style.overflow = overflow? 'hidden': ''
        burger.classList.toggle('active')
        sideBar.classList.toggle('active')
        overflow = !overflow;
    } )
})
