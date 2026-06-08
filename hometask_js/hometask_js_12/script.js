"use strict"


let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь"
    ,"Декабрь"];



for (let m = 0; m < months.length; m++) {
    document.writeln("<div>" + months[m] + "</div>");
    let mon = document.querySelectorAll("div")[m];
    mon.style.background = `rgb(${createColor()}, ${createColor()}, ${createColor()})`;
    mon.style.color = `rgb(${createColor()}, ${createColor()}, ${createColor()})`;
    mon.style.fontWeight = 'bold';
    mon.style.textAlign = 'center';
};

function createColor() {
    return Math.floor(Math.random() * 256);
}


