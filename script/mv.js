const title = document.querySelectorAll ('.mvlist_top > ul > li')
const mv = document.querySelectorAll ('.mv1-4 > .mv')
const close = document.querySelectorAll('.mv1-4 > .mv > .mv-top > .icon > .mv_C')
const list = document.querySelectorAll('.mv1-4 > .mv > .mv-top > .icon > .mv_L')
console.log(title,mv,close,list)
const title2 = document.querySelectorAll ('.mvlist_btm > ul > li')
const mv2 = document.querySelectorAll ('.mv5-8 > .mv')
const close2 = document.querySelectorAll('.mv5-8 > .mv > .mv-top > .icon > .mv_C')
const list2 = document.querySelectorAll('.mv5-8 > .mv > .mv-top > .icon > .mv_L')
console.log(title2,mv2,close2,list2)


for(let i of mv){i.style.display='none'}

title.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of mv){j.classList.remove('active')}
        mv[i].classList.toggle('active')
    })
})
close.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of mv){j.classList.remove('active')}
        mv[i].classList.toggle('close')
    })
})
for(let i of mv2){i.style.display='none'}
title2.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of mv2){j.classList.remove('active')}
        mv2[i].classList.toggle('active')
    })
})
close2.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of mv2){j.classList.remove('active')}
        mv2[i].classList.toggle('close')
    })
})