const header = document.querySelector('.header__wrapper');
let i = 0
function fixedMenu() {
    
}

document.addEventListener(scrollY, ()=> {
   if(window.scrollY >= 800) {
        header.style.position = 'fixed'
    } 
    console.log(window.scrollY)
})  
    

console.log(window.scrollY)