
"use strict";

// Задание №1

let radius = document.querySelector(".radius");
let answers = document.querySelector(".answers");
let perimeter = document.querySelector(".calculator");
let but = document.querySelector(".but");
let rad = document.querySelector("#rad");



function result() {
    class Сircle {
        constructor(radius) {
            this.radius = radius;
        }
        square() {
            return (Math.PI * this.radius ** 2).toFixed(2);
        }

        perimeter() {
            return (2 * Math.PI * this.radius).toFixed(2);
        }
    }
    const circle = new Сircle(rad.value);
    circle.color = "red";


    answers.insertAdjacentHTML(`afterend`, `<p>` + `Площадь круга равна: ` + `${circle.square()}` + `</p>`);

    answers.insertAdjacentHTML(`afterend`, `<p>` + `Периметр круга равен: ` + `${circle.perimeter()}` + `</p>`);

}


but.addEventListener("click", result);




// Заание №2

let length = document.querySelector(".length");
let height = document.querySelector(".height");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let risultato = document.querySelector(".risultato");
let risultato2 = document.querySelector(".risultato2");

function risultati1() {
    class Triangle1 {
        constructor(length, height) {
            this.length = length;
            this.height = height;
        }

        square2() {
            return (0.5 * this.length * this.height);
        }

    }
    const triangle1 = new Triangle1(l.value, h.value);

    risultato.insertAdjacentHTML(`afterend`, `<p>` + `Площадь треугольника равна: ` + `${triangle1.square2()}` + `</p>`);

}
button2.addEventListener("click", risultati1);



function risultati2() {

    class Triangle2 {
        constructor(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        perimeter2() {
            return (this.a + this.b + this.c);
        }
    }

    const triangle2 =  new Triangle2 (Number (a.value), Number (b.value), Number (c.value));


    risultato2.insertAdjacentHTML(`afterend`, `<p>` + `Периметр треугольника равен: ` + `${triangle2.perimeter2()}` + `</p>`);

}


button3.addEventListener("click", risultati2);