const header = document.querySelector('.header');
const block = document.querySelector('.block');
let offsetBlock = header.offsetHeight;

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 400) {
        block.style.display = 'block';
        block.style.height = offsetBlock + 'px';
        header.style.position = 'fixed';
        header.style.top = `-100%`;
        header.style.left = `0`;       
    }
    if(window.scrollY > 1000) {
        header.style.position = 'fixed';
        header.style.top = `0`;
        header.style.left = '0';}
    // } else {
    //     headerWrapper.style.position = 'static';
    // }
    if(window.scrollY < 800) {
        block.style.display = 'none';
       header.style.position = 'static';        
    }
})