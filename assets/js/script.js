const headerWrapper = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 1200) {
        headerWrapper.style.position = 'fixed';
    } else {
        headerWrapper.style.position = 'static';
    }
})