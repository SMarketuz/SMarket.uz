'use struct'

let xmark = document.getElementById('xmark')
let evro = document.getElementById('evro')
let right = document.getElementById('right')
let leftContent = document.querySelector('.leftContent')
let down = document.getElementById('down')
let hedEvo = document.getElementById('evro2')
let bars = document.getElementById('bars')

xmark.addEventListener('click',(e)=> {
    leftContent.style.display = 'none'
})

right.addEventListener('click',(e)=> {
    evro.style.display = 'block'
    setTimeout(()=> {
        evro.style.display = 'none'
    },5000)
})
down.addEventListener('click',(e)=> {
    hedEvo.style.display = 'block'
    setTimeout(()=> {
        hedEvo.style.display = 'none'
    },5000)
})
bars.addEventListener('click',(e)=> {
    leftContent.style.display = 'block'
})

