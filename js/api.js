
let deys = document.querySelector('.days')
let deysAnd = document.querySelector('.daysAnd')
let deysFar = document.querySelector('.daysFar')
let deysTosh = document.querySelector('.daysTosh')
let deysToshVil = document.querySelector('.daysToshVil')
let day = document.querySelector('.namazDay')



let namangan = "https://islomapi.uz/api/present/day?region=Namangan"
let andijon = "https://islomapi.uz/api/present/day?region=Andijon"
let fargona = "https://islomapi.uz/api/present/day?region=Farg'ona"
let toshkent = "https://islomapi.uz/api/present/day?region=Toshkent"
let sirdariyo = "https://islomapi.uz/api/present/day?region=Sirdaryo"
let jizah = "https://islomapi.uz/api/present/day?region=Jizzah"
let samarqand = "https://islomapi.uz/api/present/day?region=Samarqand"
let surhondaryo = "https://islomapi.uz/api/present/day?region=Surhondaryo"
let qashqadaryo = "https://islomapi.uz/api/present/day?region=Qashqadaryo"
let buhoro = "https://islomapi.uz/api/present/day?region=Buhoro"
let navoiy = "https://islomapi.uz/api/present/day?region=Navoiy"
let xorazm = "https://islomapi.uz/api/present/day?region=Xorzm"
let qoraqolpoq   = "https://islomapi.uz/api/present/day?region=Qoraqalpog'iston"



// namangan
const getReqNam = async (ap) => {
    let req = await fetch(namangan)
    if(req.status != 200) {throw new Error('Sizda hatolik mavjud')}
    let data = await req.json()
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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