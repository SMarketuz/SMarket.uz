'use struct'

let xmark = document.getElementById('xmark')
let evro = document.getElementById('evro')
let right = document.getElementById('right')
let leftContent = document.querySelector('.leftContent')

xmark.addEventListener('click',(e)=> {
    leftContent.style.display = 'none'
})

right.addEventListener('click',(e)=> {
    evro.style.display = 'block'
    setTimeout(()=> {
        evro.style.display = 'none'
    },2000)
})

