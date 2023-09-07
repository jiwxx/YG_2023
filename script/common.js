const menu = document.querySelector ('#mainMenu')
const span = document.querySelectorAll ('.menu > #mainMenu > span')
const nav = document.querySelector ('.menu > nav')
console.log(menu,nav)

nav.style.display = 'none'
menu.addEventListener('click',function(){
    nav.classList.toggle('active')
})