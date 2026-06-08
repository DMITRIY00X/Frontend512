"use strict";
// Задача: Вывести "Сегодня: 12 Апреля 2026, Воскресенье (нужна текущая дата)"


let time = document.querySelector(".time");
let but = document.querySelector("button");
but.addEventListener("click", date);



let tag = document.querySelector(".proba");
tag.style.color = "black";
tag.style.background = "silver";
let text = document.querySelector(".proba p").innerHTML;
let i = 0;

window.addEventListener("load", animText);
function animText() {
    tag.textContent = text.substring(0, i);
    i++;

    if (i > text.length) {
        i = 0;
    }
    setTimeout(animText, 50);
};



function date() {
    let d = new Date();
    let m = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    time.innerHTML = "Сегодня: " + d.getDate() + " " + m[d.getMonth()] + " " + d.getFullYear() + ", " + days[d.getDay()];
};





