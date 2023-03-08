
let uzIcon = document.getElementById('uzIcon')
let ru = document.getElementById('evroIcon2')
let eng = document.getElementById('evroIcon3')
let itms = document.querySelectorAll('#itms')
let cont = document.getElementById('cont')
let tizim = document.getElementById('tizim')
let royhat = document.getElementById('royhat')
let shop = document.getElementById('shop')
let tit = document.getElementById('tit')


ru.addEventListener('click',(e)=> {
    itms[0].innerHTML = `
        <li id="itms"><a href="#">Домашняя страница</a></li>
    `
    itms[1].innerHTML = `
    <li id="itms"><a href="#">о нас</a></li>
    `
    itms[2].innerHTML = `
    <li id="itms"><a href="#">Услуги</a></li>
    `
    itms[3].innerHTML = `
    <li id="itms"><a class="active" href="#">Магазин</a></li>
    `
    itms[4].innerHTML = `
    <li id="itms"><a href="#">Время Намаз</a></li>
    `
    itms[5].innerHTML = `
    <li id="itms"><a href="#">погода</a></li>
    `
    itms[6].innerHTML = `
    <li id="itms"><a href="#">Курсы обмена</a></li>
    `
    cont.innerHTML = `
    <a href="#" id="cont">Связаться с нами<i class="fa-solid fa-right-long"></i></a>
    `
    tizim.innerHTML = `
    <a id="tizim" class="sinin" href="#">Авторизоваться</a>
    `
    royhat.innerHTML = `
    <a id="royhat"  class="login" href="#">Зарегистрироваться</a>
    `
    shop.innerHTML = `
    <h1 id="shop">Наш магазин</h1>
    `

    tit.innerHTML = `
    <p id="tit">Выберите сайт, дизайн или тип игр, которые вам подходят.</p>
    `
})

uzIcon.addEventListener('click',(e)=> {
    itms[0].innerHTML = `
        <li id="itms"><a href="#">Bosh sahifa</a></li>
    `
    itms[1].innerHTML = `
    <li id="itms"><a href="#">Biz haqimizda</a></li>
    `
    itms[2].innerHTML = `
    <li id="itms"><a href="#">Hizmatlar</a></li>
    `
    itms[3].innerHTML = `
    <li id="itms"><a class="active" href="#">Do’kon</a></li>
    `
    itms[4].innerHTML = `
    <li id="itms"><a href="#">Namoz vaqtlari</a></li>
    `
    itms[5].innerHTML = `
    <li id="itms"><a href="#">Ob-havo</a></li>
    `
    itms[6].innerHTML = `
    <li id="itms"><a href="#">Valyuta kurslari</a></li>
    `
    cont.innerHTML = `
    <a href="#" id="cont">Biz bilan a’loqa<i class="fa-solid fa-right-long"></i></a>
    `
    tizim.innerHTML = `
    <a id="tizim" class="sinin" href="#">Tizimga kirish</a>
    `
    royhat.innerHTML = `
    <a id="royhat"  class="login" href="#">Ro'yxatdan o'tish</a>
    `
    shop.innerHTML = `
    <h1 id="shop">Do’konimiz </h1>
    `
    tit.innerHTML = `
    <p id="tit">O’zingizga mos kelgan sayitingizni, dizayiningizni yoki hohlagan turdagi o’inlarni tanlang.</p>
    `
})

eng.addEventListener('click',(e)=> {
    itms[0].innerHTML = `
        <li id="itms"><a href="#">Homepage</a></li>
    `
    itms[1].innerHTML = `
    <li id="itms"><a href="#">About Us</a></li>
    `
    itms[2].innerHTML = `
    <li id="itms"><a href="#">Services</a></li>
    `
    itms[3].innerHTML = `
    <li id="itms"><a class="active" href="#">Shop</a></li>
    `
    itms[4].innerHTML = `
    <li id="itms"><a href="#">Namaz times</a></li>
    `
    itms[5].innerHTML = `
    <li id="itms"><a href="#">еhe weather</a></li>
    `
    itms[6].innerHTML = `
    <li id="itms"><a href="#">Exchange rates</a></li>
    `
    cont.innerHTML = `
    <a href="#" id="cont">Contact us<i class="fa-solid fa-right-long"></i></a>
    `
    tizim.innerHTML = `
    <a id="tizim" class="sinin" href="#">Log in</a>
    `
    royhat.innerHTML = `
    <a id="royhat"  class="login" href="#">Sign up</a>
    `
    shop.innerHTML = `
    <h1 id="shop">Our store</h1>
    `
    tit.innerHTML = `
    <p id="tit">Choose the site, design or type of games that suits you.</p>
    `
})
