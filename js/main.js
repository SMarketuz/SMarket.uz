'use struct'

let xmark = document.getElementById('xmark')
let evro = document.getElementById('evro')
let right = document.getElementById('right')
let leftContent = document.querySelector('.leftContent')
let down = document.getElementById('down')
let hedEvo = document.getElementById('evro2')
let bars = document.getElementById('bars')
let load = document.querySelector('.loader')
let wrapper = document.querySelector('.wrapper')
let pre = document.querySelectorAll('.pre')
let sah = document.querySelectorAll('#sah')
let loginDown = document.getElementById('down')
let langEvro = document.querySelector('.langEvro')





pre.forEach((pr)=> {
    pr.addEventListener('click',(e)=> {
        pr.classList.toggle('starts')
        sah.forEach((sh)=> {
            sh.innerHTML = 'Rahmat!!!'
            setTimeout(()=> {
                sh.innerHTML = ''
            },1000)
        })
    })
})


setTimeout(()=> {
    load.style.display = 'none'
    wrapper.classList.remove('hidden')
},500)

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

