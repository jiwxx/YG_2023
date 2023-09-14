const button = document.querySelectorAll ('main > .artist > .artistWrap > .a_left > button')
const artist = document.querySelectorAll ('main > .artist > .artistWrap > .a_right > img')
const contents = document.querySelectorAll ('main > .mainContents')
const txt = document.querySelectorAll ('main > .mainContents > .Ctxt ')
const mouse = document.querySelector ('main > .mouse_btm')
console.log (button,artist,contents,txt,mouse)

// artist.style.display = 'none'
/*
button[2].addEventListener('click',function(){
    artist.classList.toggle('active')
    contents.classList.toggle('active')
})
*/

mouse.style.display = 'none'
for(let i of artist){i.style.opacity='0'}
for(let i of contents){i.style.display='none'}
for(let i of txt){i.style.display='none'}
button.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of contents){j.classList.remove('active')}
        contents[i].classList.toggle('active')
        txt[i].classList.toggle('active')
        mouse.style.display = 'block'
    })

    t.addEventListener('mouseover',function(){
        for(let j of artist){j.classList.remove('opacity')}
        artist[i].classList.toggle('opacity')
        artist[i].style.transition = 'all 0.3s linear'
    })
})