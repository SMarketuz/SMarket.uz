
let uzIcon = document.getElementById('uzIcon')
let ru = document.getElementById('evroIcon2')
let eng = document.getElementById('evroIcon3')
let itms = document.querySelectorAll('#itms')
let cont = document.getElementById('cont')
let tizim = document.getElementById('tizim')
let royhat = document.getElementById('royhat')
let shop = document.getElementById('shop')
let tit = document.getElementById('tit')
let titleTop = document.querySelector('.titleTop')
let webSite = document.querySelector('.webSite')



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
    titleTop.innerHTML = `
        <section class="titleTop">
            <h1 id="shop">Наш магазин</h1>
            <p id="tit">Выберите сайт, дизайн или тип игр, которые вам подходят.</p>
        </section>
    `
    webSite.innerHTML = `
    <section class="webSite">
    <div class="webTitle">
        <h1>Веб-сайты</h1>
    </div>
    <div class="webBox">

        <div class="Box1">
            <div class="desc">
                <video src="./videos/BIR.mp4" autoplay muted loop width="200"></video>
                <h2><span>Сайт для семейных дел</span></h2><br>
                <h2>Уровень средний</h2><br>
                <h2>Качество отличное</h2><br>
                <h2>Есть 1 страница</h2>
                <div class="webIcons">
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <span id="sah"></span>
                </div>
                <div class="webBtn">
                    <a href="#">Узнать больше</a>
                </div>
            </div>
            
            <div class="desc">
                <video src="./videos/ikki.mp4" autoplay muted loop width="200"></video>
                <h2><span>Сайт аксессуаров и техники</span></h2><br>
                <h2>Уровень отличный</h2><br>
                <h2>Качество отличное</h2><br>
                <h2>Есть 5 страниц</h2>
                <div class="webIcons">
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <span id="sah"></span>
                </div>
                <div class="webBtn">
                    <a href="#">Узнать больше</a>
                </div>
            </div>

            <div class="desc">
                <video src="./videos/uch.mp4" autoplay muted loop width="200"></video>
                <h2><span>Сайт для информации</span></h2><br>
                <h2>Уровень средний</h2><br>
                <h2>Качество отличное</h2><br>
                <h2>Есть 1 страница</h2>
                <div class="webIcons">
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <span id="sah"></span>
                </div>
                <div class="webBtn">
                    <a href="#">Узнать больше</a>
                </div>
            </div>
        </div>

        <div class="Box2">
            <div class="desc">
                <video src="./videos/tor.mp4" autoplay muted loop width="200"></video>
                <h2><span>Сайт для интернет-магазина</span></h2><br>
                <h2>Уровень отличный</h2><br>
                <h2>Качество отличное</h2><br>
                <h2>Есть 10 страниц</h2>
                <div class="webIcons">
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <span id="sah"></span>
                </div>
                <div class="webBtn">
                    <a href="#">Узнать больше</a>
                </div>
            </div>
            
            <div class="desc">
                <video src="./videos/besh.mp4" autoplay muted loop width="200"></video>
                <h2><span>Сайт игры для XBox</span></h2><br>
                <h2>Уровень средний</h2><br>
                <h2>Качество отличное</h2><br>
                <h2>Есть 3 страницы</h2>
                <div class="webIcons">
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <i class="fa-regular fa-star pre"></i>
                    <span id="sah"></span>
                </div>
                <div class="webBtn">
                    <a href="#">Узнать больше</a>
                </div>
            </div>

            <div class="desc">
                <video src="./videos/olti.mp4" autoplay muted loop width="200"></video>
                <h2><span>Сайт для ракет SpaceX</span></h2><br>
                <h2>Уровень отличный</h2><br>
                <h2>Качество отличное</h2><br>
                <h2>Есть 1 страница</h2>
                <div class="webIcons">
                    <i  class="fa-regular fa-star pre"></i>
                    <i  class="fa-regular fa-star pre"></i>
                    <i  class="fa-regular fa-star pre"></i>
                    <i  class="fa-regular fa-star pre"></i>
                    <i  class="fa-regular fa-star pre"></i>
                    <span id="sah"></span>
                </div>
                <div class="webBtn">
                    <a href="#">Узнать больше</a>
                </div>
            </div>
        </div>
        <div class="btnDesc">
            <a href="#">Everything</a>
        </div>
    </div>
    <hr class="href">
    </section>
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
    titleTop.innerHTML = `
        <section class="titleTop">
            <h1 id="shop">Do’konimiz </h1>
            <p id="tit">O’zingizga mos kelgan sayitingizni, dizayiningizni yoki hohlagan turdagi o’inlarni tanlang.</p>
        </section>
    `
    webSite.innerHTML = `
    <section class="webSite">
            <div class="webTitle">
                <h1>Web sayitlar</h1>
            </div>
            <div class="webBox">

                <div class="Box1">
                    <div class="desc">
                        <video src="./videos/BIR.mp4" autoplay muted loop width="200"></video>
                        <h2><span>Oilaviy ishlar uchun sayt</span></h2><br>
                        <h2>Darajasi o’rta</h2><br>
                        <h2>Sifati a’lo</h2><br>
                        <h2>Sahifalar 1 tadan iborat</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">Batafsil ko’rish</a>
                        </div>
                    </div>
                    
                    <div class="desc">
                        <video src="./videos/ikki.mp4" autoplay muted loop width="200"></video>
                        <h2><span>Aksesuvarlar va tehnikalar uchun sayt</span></h2><br>
                        <h2>Darajasi a'lo</h2><br>
                        <h2>Sifati a’lo</h2><br>
                        <h2>Sahifalar 5 tadan iborat</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">Batafsil ko’rish</a>
                        </div>
                    </div>

                    <div class="desc">
                        <video src="./videos/uch.mp4" autoplay muted loop width="200"></video>
                        <h2><span>Ma'lumot uchunlar uchun sayt</span></h2><br>
                        <h2>Darajasi o’rta</h2><br>
                        <h2>Sifati a’lo</h2><br>
                        <h2>Sahifalar 1 tadan iborat</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">Batafsil ko’rish</a>
                        </div>
                    </div>
                </div>

                <div class="Box2">
                    <div class="desc">
                        <video src="./videos/tor.mp4" autoplay muted loop width="200"></video>
                        <h2><span>Online dokon uchun sayt</span></h2><br>
                        <h2>Darajasi juda zo'r</h2><br>
                        <h2>Sifati a’lo</h2><br>
                        <h2>Sahifalar 10 tadan iborat</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">Batafsil ko’rish</a>
                        </div>
                    </div>
                    
                    <div class="desc">
                        <video src="./videos/besh.mp4" autoplay muted loop width="200"></video>
                        <h2><span>XBox o'yini uchun sayt</span></h2><br>
                        <h2>Darajasi o’rta</h2><br>
                        <h2>Sifati a’lo</h2><br>
                        <h2>Sahifalar 3 tadan iborat</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">Batafsil ko’rish</a>
                        </div>
                    </div>

                    <div class="desc">
                        <video src="./videos/olti.mp4" autoplay muted loop width="200"></video>
                        <h2><span>SpaceX raketalari uchun sayt</span></h2><br>
                        <h2>Darajasi a'lo</h2><br>
                        <h2>Sifati a’lo</h2><br>
                        <h2>Sahifalar 1 tadan iborat</h2>
                        <div class="webIcons">
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">Batafsil ko’rish</a>
                        </div>
                    </div>
                </div>
                <div class="btnDesc">
                    <a href="#">Barchasi</a>
                </div>
            </div>
            <hr class="href">
        </section>
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
    titleTop.innerHTML = `
        <section class="titleTop">
            <h1 id="shop">Our store </h1>
            <p id="tit">Choose the site, design or type of games that suits you.</p>
        </section>
    `

    webSite.innerHTML = `
    <section class="webSite">
            <div class="webTitle">
                <h1>Websites</h1>
            </div>
            <div class="webBox">

                <div class="Box1">
                    <div class="desc">
                        <video src="./videos/BIR.mp4" autoplay muted loop width="200"></video>
                        <h2><span>A site for family affairs</span></h2><br>
                        <h2>The level is medium</h2><br>
                        <h2>The quality is excellent</h2><br>
                        <h2>There are 1 pages</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">See more</a>
                        </div>
                    </div>
                    
                    <div class="desc">
                        <video src="./videos/ikki.mp4" autoplay muted loop width="200"></video>
                        <h2><span>A site for accessories and appliances</span></h2><br>
                        <h2>The level is excellent</h2><br>
                        <h2>The quality is excellent</h2><br>
                        <h2>There are 5 pages</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">See more</a>
                        </div>
                    </div>

                    <div class="desc">
                        <video src="./videos/uch.mp4" autoplay muted loop width="200"></video>
                        <h2><span>Ma'lumot uchunlar uchun sayt</span></h2><br>
                        <h2>The level is excellent</h2><br>
                        <h2>The quality is excellent</h2><br>
                        <h2>There are 1 pages</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">See more</a>
                        </div>
                    </div>
                </div>

                <div class="Box2">
                    <div class="desc">
                        <video src="./videos/tor.mp4" autoplay muted loop width="200"></video>
                        <h2><span>Online dokon uchun sayt</span></h2><br>
                        <h2>The level is excellent</h2><br>
                        <h2>The quality is excellent</h2><br>
                        <h2>There are 10 pages</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">See more</a>
                        </div>
                    </div>
                    
                    <div class="desc">
                        <video src="./videos/besh.mp4" autoplay muted loop width="200"></video>
                        <h2><span>XBox o'yini uchun sayt</span></h2><br>
                        <h2>The level is excellent</h2><br>
                        <h2>The quality is excellent</h2><br>
                        <h2>There are 3 pages</h2>
                        <div class="webIcons">
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <i class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">See more</a>
                        </div>
                    </div>

                    <div class="desc">
                        <video src="./videos/olti.mp4" autoplay muted loop width="200"></video>
                        <h2><span>SpaceX raketalari uchun sayt</span></h2><br>
                        <h2>The level is excellent</h2><br>
                        <h2>The quality is excellent</h2><br>
                        <h2>There are 1 pages</h2>
                        <div class="webIcons">
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <i  class="fa-regular fa-star pre"></i>
                            <span id="sah"></span>
                        </div>
                        <div class="webBtn">
                            <a href="#">See more</a>
                        </div>
                    </div>
                </div>
                <div class="btnDesc">
                    <a href="#">Everything</a>
                </div>
            </div>
            <hr class="href">
        </section>
    `
})
