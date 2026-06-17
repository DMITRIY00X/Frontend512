"use strict";

let winner = {
    name: [
        "Игорь",
        "Иван",
        "Дмитрий",
        "Тимофей",
        "Виктор",
        "Андрей",
    ],

    colors: [
        "черный",
        "белый",
        "красный",
        "синий",
        "фиолетовый",
        "серебряный",
        "зеленый",
        "серый"
    ],
    auto: [
"Bentley",
"Audi",
"BMW",
"Chevrolet",
"Dodge",
"Ford",
"Honda",
"Hyundai",
"Kia",
"Lexus",
"Nissan",
"Volkswagen",
"Volvo"]

}

document.writeln("<br>" + "При обновлении страницы будут обновляться: Победители, Цвета машин и Марки машин" + "<br><br>");


document.writeln( "<span class = 'text'>" + winner.name[Math.floor(Math.random() * winner.name.length)] + "</span>"+ " " + " выиграл " + "<span class = 'text'>" + winner.colors[Math.floor(Math.random() * winner.colors.length)] + "</span>" + " " + "<span class = 'text'>" + winner.auto[Math.floor(Math.random() * winner.auto.length)]+"</span>");
