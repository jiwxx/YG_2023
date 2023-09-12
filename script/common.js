const menu = document.querySelector ('#mainMenu')
const span = document.querySelectorAll ('.menu > #mainMenu > span')
const nav = document.querySelector ('.menu > nav')
console.log(menu,nav,span)

nav.style.display = 'none'
menu.addEventListener('click',function(){
    nav.classList.toggle('active')
    menu.style.position = 'fixed'
    span[0].style.backgroundColor = '#fff'
    span[1].style.backgroundColor = '#fff'
    span[2].style.backgroundColor = '#fff'
})