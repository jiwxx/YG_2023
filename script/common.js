const menu = document.querySelector ('#mainMenu')
const span = document.querySelectorAll ('.menu > #mainMenu > span')
const nav = document.querySelector ('.menu > nav')
console.log(menu,nav,span)

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
})