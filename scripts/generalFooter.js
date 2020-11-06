const generalFooter = () => {
    // create footer container
    var footer = document.createElement("footer");
    footer.setAttribute("class", "footer");


    // create footer links
    var div = document.createElement("div");
    div.setAttribute("class", "footer__links");

    var h4 = document.createElement("h4");
    var txt = document.createTextNode("دانلود درمانیتو");
    h4.appendChild(txt);
    div.appendChild(h4);

    var div1 = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", "../images/generalFooter/bazar-black.png");
    div1.appendChild(img);
    img = document.createElement("img");
    img.setAttribute("src", "../images/generalFooter/bazar-black.png");
    div1.appendChild(img);
    div.appendChild(div1);

    footer.appendChild(div);


    // create footer menu-1
    div = document.createElement("div");
    div.setAttribute("class", "footer__menu-1");

    h4 = document.createElement("h4");
    txt = document.createTextNode("صفحات درمانیتو");
    h4.appendChild(txt);
    div.appendChild(h4);

    var ul = document.createElement("ul");
    ul.setAttribute("class", "footer__menu-1__menu");
    var li = document.createElement("li");
    var a = document.createElement("a");
    txt = document.createTextNode("تماس با ما");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    txt = document.createTextNode("درباره ما");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    txt = document.createTextNode("سوالات متداول");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    txt = document.createTextNode("قوانین و شرایط");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);
    div.appendChild(ul);

    footer.appendChild(div);


    // create footer menu-2
    div = document.createElement("div");
    div.setAttribute("class", "footer__menu-2");

    h4 = document.createElement("h4");
    txt = document.createTextNode("خدمات درمانیتو");
    h4.appendChild(txt);
    div.appendChild(h4);

    ul = document.createElement("ul");
    ul.setAttribute("class", "footer__menu-2__menu");
    li = document.createElement("li");
    li.setAttribute("class", "footer__menu-2__menu__current");
    a = document.createElement("a");
    txt = document.createTextNode("داروخانه آنلاین");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    txt = document.createTextNode("فروشگاه آنلاین");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    txt = document.createTextNode("ویزیت آنلاین");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    txt = document.createTextNode("پرونده پزشکی");
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li);
    div.appendChild(ul);

    footer.appendChild(div);


    // create footer info
    div = document.createElement("div");
    div.setAttribute("class", "footer__info");

    div1 = document.createElement("div");
    div1.setAttribute("class", "footer__info__logo")
    p = document.createElement("p");
    var strong = document.createElement("strong");
    txt = document.createTextNode("درمانیتو");
    strong.appendChild(txt);
    p.appendChild(strong);
    var br = document.createElement("br");
    p.appendChild(br);
    txt = document.createTextNode("همراه شما در درمان");
    p.appendChild(txt);
    div1.appendChild(p);

    img = document.createElement("img");
    img.setAttribute("src", "../images/generalNavBar/logo.svg");
    img.setAttribute("alt", "darmanito logo");
    div1.appendChild(img);
    div.appendChild(div1);

    h4 = document.createElement("h4");
    txt = document.createTextNode("سوپر اپلیکیشن حوزه درمان و سلامت");
    h4.appendChild(txt);
    div.appendChild(h4);

    p = document.createElement("p");
    txt = document.createTextNode("تمام حقوق مادی و معنوی این سایت متعلق به درمانیتو است.");
    p.appendChild(txt);
    div.appendChild(p);

    div1 = document.createElement("div");
    div1.setAttribute("class", "footer__info__contact-us");

    img = document.createElement("img");
    img.setAttribute("src", "../images/generalFooter/insta.png");
    div1.appendChild(img);

    img = document.createElement("img");
    img.setAttribute("src", "../images/generalFooter/twitter.png");
    div1.appendChild(img);

    img = document.createElement("img");
    img.setAttribute("src", "../images/generalFooter/linkedin.png");
    div1.appendChild(img);
    div.appendChild(div1);

    footer.appendChild(div);

    document.querySelector(".addFooter").append(footer);

}

generalFooter();