const generalNavBarMobile = () => {
    var nav1 = document.createElement("nav");

    // Burger icon
    nav1.setAttribute("class", "generalNavBar");
    var div1 = document.createElement("div");
    div1.setAttribute("class", "generalNavBar__burger");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "generalNavBar__burger__line1");
    div1.appendChild(div2);

    div2 = document.createElement("div");
    div2.setAttribute("class", "generalNavBar__burger__line2");
    div1.appendChild(div2);

    div2 = document.createElement("div");
    div2.setAttribute("class", "generalNavBar__burger__line3");
    div1.appendChild(div2);

    nav1.appendChild(div1);

    // NavigationBar for Desktop and Laptops
    var a = document.createElement("a");
    a.setAttribute("class", "button");
    var txt = document.createTextNode("دانلود درمانیتو");
    a.appendChild(txt);
    nav1.appendChild(a);

    var ul = document.createElement("ul");
    ul.setAttribute("class", "generalNavBar__ul nav justify-content-center");

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBar__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBar__ul__li__a");
    var txt = document.createTextNode("عضویت داروخانه ها");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBar__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBar__ul__li__a");
    var txt = document.createTextNode("تماس با ما");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBar__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBar__ul__li__a");
    var txt = document.createTextNode("درباره ما");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBar__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBar__ul__li__a");
    var txt = document.createTextNode("صفحه اصلی");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    nav1.appendChild(ul);

    var div1 = document.createElement("div");
    div1.setAttribute("class", "generalNavBar__logo");
    var p = document.createElement("p");
    var strong = document.createElement("strong");
    txt = document.createTextNode("درمانیتو");
    strong.appendChild(txt);
    p.appendChild(strong);
    var br = document.createElement("br");
    p.append(br);
    txt = document.createTextNode("همراه شما در درمان");
    p.appendChild(txt);
    div1.appendChild(p);

    var img = document.createElement("img");
    img.setAttribute("src", "../images/generalNavBar/logo.svg");
    div1.appendChild(img);

    nav1.appendChild(div1);

    document.querySelector(".addNav").append(nav1);

    // NavigationBar for Tabllets and Mobiles
    nav1 = document.createElement("nav");
    nav1.setAttribute("class", "generalNavBarMobile");

    var ul = document.createElement("ul");
    ul.setAttribute("class", "generalNavBarMobile__ul");

    var li = document.createElement("li");
    li.setAttribute("id", "current-page");
    li.setAttribute("class", "generalNavBarMobile__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__ul__li__a generalNavBarMobile__ul__li__a--current");
    var txt = document.createTextNode("صفحه اصلی");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBarMobile__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__ul__li__a");
    var txt = document.createTextNode("عضویت داروخانه ها");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBarMobile__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__ul__li__a");
    var txt = document.createTextNode("درباره ما");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBarMobile__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__ul__li__a");
    var txt = document.createTextNode("تماس با ما");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBarMobile__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__ul__li__a");
    var txt = document.createTextNode("سوالات متداول");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    var li = document.createElement("li");
    li.setAttribute("class", "generalNavBarMobile__ul__li");
    var a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__ul__li__a");
    var txt = document.createTextNode("قوانین و شرایط");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    nav1.appendChild(ul);

    a = document.createElement("a");
    a.setAttribute("class", "generalNavBarMobile__a");
    var txt = document.createTextNode("دانلود درمانیتو");
    a.appendChild(txt);

    nav1.appendChild(a);
    document.querySelector(".addNav").append(nav1);

}

generalNavBarMobile();


const mobileMenu = () => {
    const burger = document.querySelector('.generalNavBar__burger');
    const nav_container_mob = document.querySelector('.generalNavBarMobile');
    const body = document.querySelector("body");
    const navLi = document.querySelectorAll('.generalNavBarMobile li');
    console.log(navLi);

    var sty = getComputedStyle(burger);
    var dis = sty.display;

    if (dis === "none") {
        nav_container_mob.style.display = "none";
    }

    burger.addEventListener('click', () => {
        console.log("burger clicked")
        nav_container_mob.classList.toggle('generalNavBarMobile--active');

        body.classList.toggle('fix-body');

        burger.classList.toggle('rotate');

        navLi.forEach((link, index) => {

            link.style.animation = `nav-animation 1s ease forwards ${index/6}s`;
            console.log(link.style.animation);

        });

    });

}

mobileMenu();