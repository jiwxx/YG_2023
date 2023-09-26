const menu = document.querySelector ('#mainMenu')
const span = document.querySelectorAll ('.menu > #mainMenu > span')
const nav = document.querySelector ('.menu > nav')
const up = document.querySelector('#up')
console.log(menu,nav,span,up)

nav.style.display = 'none'
menu.addEventListener('click',function(){
    nav.classList.toggle('activeFlex')
    span[0].classList.toggle('color')
    span[1].classList.toggle('color')
    span[2].classList.toggle('color')

    span[0].classList.toggle('first')
    span[1].classList.toggle('opacityzero')
    span[2].classList.toggle('second')
    
    menu.classList.toggle('fixed')
    up.classList.toggle('none')
})

up.addEventListener('click',function(){
    window.scrollTo(0,100);
})