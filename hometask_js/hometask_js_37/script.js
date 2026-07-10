"use strict";

class Header {
    constructor(image, p) {
        this.src = image;
        this.p = p;

    }
    render(id) {
        let out = `
        <img src="${this.src}" alt="">
        <p>${this.p}</p>
        `;
        document.querySelector(`#${id}`).innerHTML = out;
    }
}
// Рисунок 1
let img = "images/image 1@1x.png";
let header1 = new Header(img, 
    `Работа 24 часа в сутки, 
    7 дней в неделю,
    365 дней в году`);
header1.render("header1");

// Рисунок 2
img = "images/image 2.png";
let header2 = new Header(img, "Нет географических границ");
header2.render("header2");

// Рисунок 3
img = "images/image 3.png";
let header3 = new Header(img, "Ассортимент");
header3.render("header3");


// Рисунок 4
img = "images/image 4.png";
let header4 = new Header(img, "Безопасность");
header4.render("header4");

// Рисунок 5
img = "images/image 5.png";
let header5 = new Header(img, "Сокращение расходов на аренду и персонал");
header5.render("header5");

// Рисунок 6
img = "images/image 6.png";
let header6 = new Header(img, "Партнерские отношения");
header6.render("header6");

// Рисунок 7
img = "images/image 7.png";
let header7 = new Header(img, "Покупатель всегда на связи");
header7.render("header7");

// Рисунок 8
img = "images/image 8.png";
let header8 = new Header(img, "Комфортный выбор");
header8.render("header8");

// Рисунок 9
img = "images/image 9.png";
let header9 = new Header(img, "Удобство оплаты");
header9.render("header9");