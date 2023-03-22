
let deys = document.querySelector('.days')
let deysAnd = document.querySelector('.daysAnd')
let deysFar = document.querySelector('.daysFar')
let deysTosh = document.querySelector('.daysTosh')
let deysToshVil = document.querySelector('.daysToshVil')
let deysSir = document.querySelector('.daysSir')
let deysJizax = document.querySelector('.daysJizax')
let deysSam = document.querySelector('.daysSam')
let deysSur = document.querySelector('.daysSur')
let deysQash = document.querySelector('.daysQash')
let deysBux = document.querySelector('.daysBux')
let deysNav = document.querySelector('.daysNav')
let deysXor = document.querySelector('.daysXor')
let deysQor = document.querySelector('.daysQor')
let day = document.querySelector('.namazDay')

// formalar
let form = document.getElementById('form')
let timeNam = document.querySelector('.timeNam')
let timeAnd = document.querySelector('.timeAnd')
let timeFar = document.querySelector('.timeFar')
let timeTosh = document.querySelector('.timeTosh')
let timeToshVil = document.querySelector('.timeToshVil')
let timeSir = document.querySelector('.timeSir')
let timeJizax = document.querySelector('.timeJizax')
let timeSam = document.querySelector('.timeSam')
let timeSur = document.querySelector('.timeSur')
let timeQash = document.querySelector('.timeQash')
let timeBux = document.querySelector('.timeBux')
let timeNav = document.querySelector('.timeNav')
let timeXor = document.querySelector('.timeXor')
let timeQor = document.querySelector('.timeQor')

form.addEventListener('keyup',(e)=> {
    e.preventDefault()

    let val = form.inp.value.trim()
    

    switch(val) {
        case `${"Farg'ona" || "farg'ona"}`:
            timeNam.remove()
            timeAnd.remove()
            timeTosh.remove()
            timeToshVil.remove()
            timeSir.remove()
            timeJizax.remove()
            timeSam.remove()
            timeSur.remove()
            timeQash.remove()
            timeBux .remove()
            timeNav.remove()
            timeXor.remove()
            timeQor.remove()
        break
        case "farg'ona":
            timeNam.remove()
            timeAnd.remove()
            timeTosh.remove()
            timeToshVil.remove()
            timeSir.remove()
            timeJizax.remove()
            timeSam.remove()
            timeSur.remove()
            timeQash.remove()
            timeBux .remove()
            timeNav.remove()
            timeXor.remove()
            timeQor.remove()
        break
    }


})




let namangan = "https://islomapi.uz/api/present/day?region=Namangan"
let andijon = "https://islomapi.uz/api/present/day?region=Andijon"
let fargona = "https://islomapi.uz/api/present/day?region=Farg'ona"
let toshkent = "https://islomapi.uz/api/present/day?region=Toshkent"
let sirdariyo = "https://islomxapi.uz/api/present/day?region=sir-daryo"
let jizah = "https://islomapi.uz/api/present/day?region=Jizzax"
let samarqand = "https://islomapi.uz/api/present/day?region=Samarqand"
let surxondaryo = "https://islomapi.uz/api/present/day?region=Surxondaryo"
let qashqadaryo = "https://islomapi.uz/api/present/day?region=Qashqadaryo"
let buhoro = "https://islomapi.uz/api/present/day?region=Buxoro"
let navoiy = "https://islomapi.uz/api/present/day?region=Navoiy"
let xorazm = "https://islomapi.uz/api/present/day?region=Xorazm"
let qoraqolpoq   = "https://islomapi.uz/api/present/day?region=Qoraqalpogiston"



// namangan
const getReqNam = async (ap) => {
    let req = await fetch(namangan)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}
getReqNam().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    // namangan
    
    deys.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
            </div>
            <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
            </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
        <h1>${pesh}</h1>
        <h4>${dat}</h4>
        </div>
        </div>
        
        <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
            </div>
            <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
    <img src="./images/Star 199.png" alt="">
    <h3>Hufton</h3>
    </div>
    <div class="tim">
    <h1>${huf}</h1>
    <h4>${dat}</h4>
    </div>
    </div
    `
    
    // andojon
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// andijon
const getReqAnd = async (ap) => {
    let req = await fetch(andijon)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqAnd().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    // namangan
    
    deysAnd.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
            </div>
            <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
            </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
        <h1>${pesh}</h1>
        <h4>${dat}</h4>
        </div>
        </div>
        
        <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
            </div>
            <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
    <img src="./images/Star 199.png" alt="">
    <h3>Hufton</h3>
    </div>
    <div class="tim">
    <h1>${huf}</h1>
    <h4>${dat}</h4>
    </div>
    </div
    `
    
    // andojon
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// farg'ona
const getReqFar = async (ap) => {
    let req = await fetch(fargona)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqFar().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    // namangan
    
    deysFar.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
            </div>
            <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
            </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
        <h1>${pesh}</h1>
        <h4>${dat}</h4>
        </div>
        </div>
        
        <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
            </div>
            <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
    <img src="./images/Star 199.png" alt="">
    <h3>Hufton</h3>
    </div>
    <div class="tim">
    <h1>${huf}</h1>
    <h4>${dat}</h4>
    </div>
    </div
    `
    
    // andojon
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})

// toshkent
const getReqTosh = async (ap) => {
    let req = await fetch(toshkent)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqTosh().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    // namangan
    
    deysTosh.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
            </div>
            <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
            </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
        <h1>${pesh}</h1>
        <h4>${dat}</h4>
        </div>
        </div>
        
        <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
            </div>
            <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
    <img src="./images/Star 199.png" alt="">
    <h3>Hufton</h3>
    </div>
    <div class="tim">
    <h1>${huf}</h1>
    <h4>${dat}</h4>
    </div>
    </div
    `
    
    // andojon
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// toshkent viloyati

const getReqToshVil = async (ap) => {
    let req = await fetch(toshkent)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    console.log(data);
    return data
}

getReqToshVil().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    // namangan
    
    deysToshVil.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
            </div>
            <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
            </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
        <h1>${pesh}</h1>
        <h4>${dat}</h4>
        </div>
        </div>
        
        <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
            </div>
            <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
    <img src="./images/Star 199.png" alt="">
    <h3>Hufton</h3>
    </div>
    <div class="tim">
    <h1>${huf}</h1>
    <h4>${dat}</h4>
    </div>
    </div
    `
    
    // andojon
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})

// sirdaryo
const getReqSir = async (ap) => {
    let req = await fetch(sirdariyo)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}
getReqSir().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    // namangan
    
    deysSir.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
            </div>
            <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
            </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
        <h1>${pesh}</h1>
        <h4>${dat}</h4>
        </div>
        </div>
        
        <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
            </div>
            <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
    <div class="icon">
    <img src="./images/Star 199.png" alt="">
    <h3>Hufton</h3>
    </div>
    <div class="tim">
    <h1>${huf}</h1>
    <h4>${dat}</h4>
    </div>
    </div
    `
    
    // andojon
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})

// jizax

const getReqJizax = async (ap) => {
    let req = await fetch(jizah)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqJizax().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysJizax.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// samarqand
const getReqSam = async (ap) => {
    let req = await fetch(samarqand)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqSam().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysSam.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// surxondaryo
const getReqSur = async (ap) => {
    let req = await fetch(surxondaryo)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqSur().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysSur.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// qashqadaryo
const getReqQash = async (ap) => {
    let req = await fetch(qashqadaryo)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqQash().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysQash.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// buhoro
const getReqBux = async (ap) => {
    let req = await fetch(buhoro)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqBux().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysBux.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// navoiy
const getReqNav = async (ap) => {
    let req = await fetch(navoiy)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqNav().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysNav.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// xorazm
const getReqXor = async (ap) => {
    let req = await fetch(xorazm)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqXor().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysXor.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})
// qaraqalpoq
const getReqQor = async (ap) => {
    let req = await fetch(qoraqolpoq)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    return data
}

getReqQor().then((ok) => {
    let bom = ok.times.tong_saharlik
    let quy = ok.times.quyosh
    let pesh = ok.times.peshin
    let asr = ok.times.asr
    let shom = ok.times.shom_iftor
    let huf = ok.times.hufton
    let dat = ok.date

    
    deysQor.innerHTML = `
    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Bomdot</h3>
        </div>
        <div class="tim">
            <h1>${bom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Quyosh</h3>
        </div>
        <div class="tim">
            <h1>${quy}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Peshin</h3>
        </div>
        <div class="tim">
            <h1>${pesh}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Asr</h3>
        </div>
        <div class="tim">
            <h1>${asr}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Shom</h3>
        </div>
        <div class="tim">
            <h1>${shom}</h1>
            <h4>${dat}</h4>
        </div>
    </div>

    <div class="tong">
        <div class="icon">
            <img src="./images/Star 199.png" alt="">
            <h3>Hufton</h3>
        </div>
        <div class="tim">
            <h1>${huf}</h1>
            <h4>${dat}</h4>
        </div>
    </div>
    `
    
    
    day.innerHTML = `
    <h3>${dat}</h3>
    `
})

