let loginDown = document.getElementById('logdown');
let evroLang = document.querySelector('.evroLang');
let langUz = document.querySelector('.langUz');
let langRu = document.querySelector('.langRu');
let langEn = document.querySelector('.langEn');
let tizim = document.getElementById('tizim');
let royhat = document.getElementById('royhat');
let leftLog = document.querySelector('#leftLogin');
let leftdown = document.getElementById('leftdown');
let evroLangLeft = document.querySelector('.evroLangLeft');
let mark = document.querySelector('#xmark');
let barsLog = document.querySelector('#barsLog');
let langUzLeft = document.querySelector('.langUzLeft');
let langRuLeft = document.querySelector('.langRuLeft');
let langEnLeft = document.querySelector('.langEnLeft');
let loginLeft = document.querySelector('.loginLeft');
let sininLeft = document.querySelector('.sininLeft');


let heding1 = document.getElementById('heding1');
let para1 = document.getElementById('para1');
let userName = document.querySelector('.icon');
let section = document.querySelector('.sectionTop')




leftdown.addEventListener('click',(e)=> {
    evroLangLeft.style.display = 'block'
    setTimeout(()=>{
        evroLangLeft.style.display = 'none'
    },5000)
})
loginDown.addEventListener('click',(e)=> {
    evroLang.style.display = 'block'
    setTimeout(()=> {
        evroLang.style.display = 'none'
        
    },5000)
})
barsLog.addEventListener('click',(e)=> {
    leftLog.style.display = 'block'
    leftLog.style.display = 'flex'
    // leftLog.style.height = '100vh'
})
mark.addEventListener('click',(e)=> {
    leftLog.style.display = 'none'
})

langUz.addEventListener('click',(e)=> {
    tizim.innerHTML = `
        <a id="tizim" class="sinin" href="#">Tizimga kirish</a>
    `
    royhat.innerHTML = `
        <a id="royhat"  class="login" href="#">Ro'yxatdan o'tish</a>
    `
    heding1.innerHTML = `
        <h1 id="heding1">Ro'yxatdan o'tish</h1>
    `
    para1.innerHTML =  `
        <p id="para1">Hisob yaratish uchun barcha maydonlarni to'ldiring.</p>
    `
    userName.innerHTML = `
        <input type="text" name="name" placeholder="Foydalanuvchi nomi" class="userName">
        <i class="fa-solid fa-user" id="user"></i>
    `
    section.innerHTML = `
        <section class="sectionTop">
        <div class="titleTop">
            <h1 id="heding1">Ro'yxatdan o'tish</h1>
            <p id="para1">Hisob yaratish uchun barcha maydonlarni to'ldiring.</p>
        </div>
        <form id="form">
            <div class="user">
            <div class="icon">
                    <input type="text" name="name" placeholder="Foydalanuvchi nomi" class="userName">
                    <i class="fa-solid fa-user" id="user"></i>
            </div>

                <div class="icon2">
                    <input type="email" name="email" placeholder="E-pochta manzili" class="at">
                    <i class="fa-regular fa-at" id="at"></i>
                </div>
            </div>


            <br>

            <div class="submit">
            <div class="icon3">
                <input type="password" name="password" placeholder="Parol" class="parol">
                <i class="fa-regular fa-eye"></i>
            </div>

                <a href="#" type="submit" class="btn">Ro'yxatdan o'tish</a>
            </div>
        </form>

        <div class="orTitle">
            <h1 class="orHeding">Yoki</h1>
            <a href="#" class="orPara"><p>Roʻyxatdan oʻtish...</p></a>
        </div>



        <div class="platforms">
            <div class="facebook">
                <img src="./images/Facebook.png" alt="">
                <a class="facebook" href="#">facebook bilan ro'yxatdan o'ting</a>
            </div>

            <div class="google">
                <img src="./images/G_logo.png" alt="">
                <a class="google" href="#">Google bilan ro'yxatdan o'ting</a>
            </div>
        </div>

        <div class="footTitle">
            <a class="footerTitle" href="#">Hisobingiz bormi? Iltimos, tizimga kiring.</a>
        </div>
    </section>
    `
})

langRu.addEventListener('click',(e)=> {
    tizim.innerHTML = `
        <a id="tizim" class="sinin" href="#">Авторизоваться </a>
    `
    royhat.innerHTML = `
        <a id="royhat"  class="login" href="#">Зарегистрироваться</a>
    `
    section.innerHTML = `
        <section class="sectionTop">
        <div class="titleTop">
            <h1 id="heding1">Зарегистрироваться</h1>
            <p id="para1">Заполните все поля, чтобы создать учетную запись.</p>
        </div>
        <form id="form">
            <div class="user">
            <div class="icon">
                    <input type="text" name="name" placeholder="Имя пользователя" class="userName">
                    <i class="fa-solid fa-user" id="user"></i>
            </div>

                <div class="icon2">
                    <input type="email" name="email" placeholder="Адрес электронной почты" class="at">
                    <i class="fa-regular fa-at" id="at"></i>
                </div>
            </div>


            <br>

            <div class="submit">
            <div class="icon3">
                <input type="password" name="password" placeholder="Пароль" class="parol">
                <i class="fa-regular fa-eye"></i>
            </div>

                <a href="#" type="submit" class="btn">Зарегистрироваться</a>
            </div>
        </form>

        <div class="orTitle">
            <h1 class="orHeding">Или</h1>
            <a href="#" class="orPara"><p>Зарегистрироваться...</p></a>
        </div>



        <div class="platforms">
            <div class="facebook">
                <img src="./images/Facebook.png" alt="">
                <a class="facebook" href="#">Зарегистрируйтесь через фейсбук</a>
            </div>

            <div class="google">
                <img src="./images/G_logo.png" alt="">
                <a class="google" href="#">Зарегистрируйтесь в Google</a>
            </div>
        </div>

        <div class="footTitle">
            <a class="footerTitle" href="#">У тебя есть аккаунт? Пожалуйста, войдите.</a>
        </div>
    </section>
    `
})

langEn.addEventListener('click',(e)=> {
    tizim.innerHTML = `
        <a id="tizim" class="Log in" href="#">Log in</a>
    `
    royhat.innerHTML = `
        <a id="royhat"  class="login" href="#">Sign up</a>
    `

    section.innerHTML = `
        <section class="sectionTop">
        <div class="titleTop">
            <h1 id="heding1">Sign up</h1>
            <p id="para1">Fill in all the fields to make a record.</p>
        </div>
        <form id="form">
            <div class="user">
            <div class="icon">
                    <input type="text" name="name" placeholder="User name" class="userName">
                    <i class="fa-solid fa-user" id="user"></i>
            </div>

                <div class="icon2">
                    <input type="email" name="email" placeholder="Address e-mail" class="at">
                    <i class="fa-regular fa-at" id="at"></i>
                </div>
            </div>


            <br>

            <div class="submit">
            <div class="icon3">
                <input type="password" name="password" placeholder="Password" class="parol">
                <i class="fa-regular fa-eye"></i>
            </div>

                <a href="#" type="submit" class="btn">Register</a>
            </div>
        </form>

        <div class="orTitle">
            <h1 class="orHeding">Or</h1>
            <a href="#" class="orPara"><p>Register...</p></a>
        </div>



        <div class="platforms">
            <div class="facebook">
                <img src="./images/Facebook.png" alt="">
                <a class="facebook" href="#">Register with facebook</a>
            </div>

            <div class="google">
                <img src="./images/G_logo.png" alt="">
                <a class="google" href="#">Sign up with Google</a>
            </div>
        </div>

        <div class="footTitle">
            <a class="footerTitle" href="#">Do you have an account? Please come in.</a>
        </div>
    </section>
    `
})



// ==============================
langUzLeft.addEventListener('click',(e)=> {
    loginLeft.innerHTML = `
        <a id="tizim" class="sinin" href="#">Tizimga kirish</a>
    `
    sininLeft.innerHTML = `
        <a id="royhat"  class="login" href="#">Ro'yxatdan o'tish</a>
    `
    section.innerHTML = `
        <section class="sectionTop">
        <div class="titleTop">
            <h1 id="heding1">Ro'yxatdan o'tish</h1>
            <p id="para1">Hisob yaratish uchun barcha maydonlarni to'ldiring.</p>
        </div>
        <form id="form">
            <div class="user">
            <div class="icon">
                    <input type="text" name="name" placeholder="Foydalanuvchi nomi" class="userName">
                    <i class="fa-solid fa-user" id="user"></i>
            </div>

                <div class="icon2">
                    <input type="email" name="email" placeholder="E-pochta manzili" class="at">
                    <i class="fa-regular fa-at" id="at"></i>
                </div>
            </div>


            <br>

            <div class="submit">
            <div class="icon3">
                <input type="password" name="password" placeholder="Parol" class="parol">
                <i class="fa-regular fa-eye"></i>
            </div>

                <a href="#" type="submit" class="btn">Ro'yxatdan o'tish</a>
            </div>
        </form>

        <div class="orTitle">
            <h1 class="orHeding">Yoki</h1>
            <a href="#" class="orPara"><p>Roʻyxatdan oʻtish...</p></a>
        </div>



        <div class="platforms">
            <div class="facebook">
                <img src="./images/Facebook.png" alt="">
                <a class="facebook" href="#">facebook bilan ro'yxatdan o'ting</a>
            </div>

            <div class="google">
                <img src="./images/G_logo.png" alt="">
                <a class="google" href="#">Google bilan ro'yxatdan o'ting</a>
            </div>
        </div>

        <div class="footTitle">
            <a class="footerTitle" href="#">Hisobingiz bormi? Iltimos, tizimga kiring.</a>
        </div>
    </section>
    `
})

langRuLeft.addEventListener('click',(e)=> {
    loginLeft.innerHTML = `
        <a id="tizim" class="sinin" href="#">Авторизоваться kirish</a>
    `
    sininLeft.innerHTML = `
        <a id="royhat"  class="login" href="#">Зарегистрироваться</a>
    `
    section.innerHTML = `
        <section class="sectionTop">
        <div class="titleTop">
            <h1 id="heding1">Зарегистрироваться</h1>
            <p id="para1">Заполните все поля, чтобы создать учетную запись.</p>
        </div>
        <form id="form">
            <div class="user">
            <div class="icon">
                    <input type="text" name="name" placeholder="Имя пользователя" class="userName">
                    <i class="fa-solid fa-user" id="user"></i>
            </div>

                <div class="icon2">
                    <input type="email" name="email" placeholder="Адрес электронной почты" class="at">
                    <i class="fa-regular fa-at" id="at"></i>
                </div>
            </div>


            <br>

            <div class="submit">
            <div class="icon3">
                <input type="password" name="password" placeholder="Пароль" class="parol">
                <i class="fa-regular fa-eye"></i>
            </div>

                <a href="#" type="submit" class="btn">Зарегистрироваться</a>
            </div>
        </form>

        <div class="orTitle">
            <h1 class="orHeding">Или</h1>
            <a href="#" class="orPara"><p>Зарегистрироваться...</p></a>
        </div>



        <div class="platforms">
            <div class="facebook">
                <img src="./images/Facebook.png" alt="">
                <a class="facebook" href="#">Зарегистрируйтесь через фейсбук</a>
            </div>

            <div class="google">
                <img src="./images/G_logo.png" alt="">
                <a class="google" href="#">Зарегистрируйтесь в Google</a>
            </div>
        </div>

        <div class="footTitle">
            <a class="footerTitle" href="#">У тебя есть аккаунт? Пожалуйста, войдите.</a>
        </div>
    </section>
    `
})

langEnLeft.addEventListener('click',(e)=> {
    loginLeft.innerHTML = `
        <a id="tizim" class="Log in" href="#">Tizimga kirish</a>
    `
    sininLeft.innerHTML = `
        <a id="royhat"  class="login" href="#">Sign up</a>
    `
    section.innerHTML = `
        <section class="sectionTop">
        <div class="titleTop">
            <h1 id="heding1">Sign up</h1>
            <p id="para1">Fill in all the fields to make a record.</p>
        </div>
        <form id="form">
            <div class="user">
            <div class="icon">
                    <input type="text" name="name" placeholder="User name" class="userName">
                    <i class="fa-solid fa-user" id="user"></i>
            </div>

                <div class="icon2">
                    <input type="email" name="email" placeholder="Address e-mail" class="at">
                    <i class="fa-regular fa-at" id="at"></i>
                </div>
            </div>


            <br>

            <div class="submit">
            <div class="icon3">
                <input type="password" name="password" placeholder="Password" class="parol">
                <i class="fa-regular fa-eye"></i>
            </div>

                <a href="#" type="submit" class="btn">Register</a>
            </div>
        </form>

        <div class="orTitle">
            <h1 class="orHeding">Or</h1>
            <a href="#" class="orPara"><p>Register...</p></a>
        </div>



        <div class="platforms">
            <div class="facebook">
                <img src="./images/Facebook.png" alt="">
                <a class="facebook" href="#">Register with facebook</a>
            </div>

            <div class="google">
                <img src="./images/G_logo.png" alt="">
                <a class="google" href="#">Sign up with Google</a>
            </div>
        </div>

        <div class="footTitle">
            <a class="footerTitle" href="#">Do you have an account? Please come in.</a>
        </div>
    </section>
    `
})