"use strict";

document.writeln("Задание №1 <br><br>");

function who(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;

    document.writeln("Я " + "<span class = 'text'>"+ name +"</span>"  + " мне " + "<span class = 'text'>" + age + "</span>" + " лет. " + " Я работаю " + "<span class = 'text'>" + job + "</span>" + "<br><br>");
}

let dmitry = new who('Дмитрий',26, 'Дизайнером');
let stas = new who('Станислав',29, 'Программистом');
let sergey = new who('Сергей',35, 'Менеджером');
console.log(dmitry, stas,sergey);


document.writeln("Задание №2 <br><br>");

function Automobile(color, model, year, manufact){
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;
    this.whatColor = function(){
        document.writeln("Цвет машины: " + this.color + "<br>");
    }
    this.autoInfo = function(){
         document.writeln("Модель машины: " + this.manufact + " " + this.model + "<br>" + " Год выпуска " + year + "<br>" + " Марка машины: " + this.manufact);
    }
}

let Nissan = new Automobile("Красный","Skyline", "2007", "Nissan");
let Toyota = new Automobile("Черный","Corolla", "2009", "Toyota");
let Volkswagen = new Automobile("Синий","Golf", "2009", "Volkswagen");

Nissan.whatColor(),Nissan.autoInfo();
document.writeln("<br>")
document.writeln("<br>")
Toyota.whatColor(),Toyota.autoInfo();
document.writeln("<br>")
document.writeln("<br>")
Volkswagen.whatColor(),Volkswagen.autoInfo();
