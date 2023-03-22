let loginDown = document.getElementById('logdown');
let evroLang = document.querySelector('.evroLang');
let langUz = document.querySelector('.langUz');
let langRu = document.querySelector('.langRu');
let langEn = document.querySelector('.langEn');
let leftLog = document.querySelector('#leftLogin');
let evroLangLeft = document.querySelector('.evroLangLeft');
let mark = document.querySelector('#xmark');
let barsLog = document.querySelector('#barsLog');
let langUzLeft = document.querySelector('.langUzLeft');
let langRuLeft = document.querySelector('.langRuLeft');
let langEnLeft = document.querySelector('.langEnLeft');
barsLog.addEventListener('click',(e)=> {
    leftLog.style.display = 'block'
    leftLog.style.display = 'flex'
    // leftLog.style.height = '100vh'
})
mark.addEventListener('click',(e)=> {
    leftLog.style.display = 'none'
})
// ==============================================

let form = document.getElementById('form')
let link = document.querySelector('.btn')
let habar = document.getElementById('habar')
let kod = document.querySelector('.parol')
let regex = /^[a-zA-Z0-9]{6,12}$/


kod.addEventListener('keydown',(e)=> {
    // e.preventDefault()

    let all = kod.value
    if(regex.test(all)) {
        link.setAttribute('href','./home.html')
    } else {
        habar.innerHTML = `
        <span class="danger" id="habar">Siznign parolingizda hatolik bo'lishi mumkun</span>
        `
        setTimeout(()=>{
            habar.innerHTML = ''
        },1000)
    }  
})



