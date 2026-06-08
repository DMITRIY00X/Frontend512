"use strict"

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let imgMas = [" ", image1, image2, image3]; // конечный
// console.log(imgMas);

let masImg = document.querySelectorAll(".pictures img"); // Получаю доступ к массиву картинок
console.log(masImg); // Проверка получения доступа к картинкам (начальный)



let start = document.querySelector("#start").value;   // доступ к первой ячейке
let finish = document.querySelector("#finish").value; // доступ ко второй ячейке
console.log(start, finish);


let button = document.querySelector(".button").addEventListener("click", changeImg); // Доступ к кнопке
console.log(button);



function changeImg() {

    let masNum = [document.querySelector("#start").value, document.querySelector("#finish").value]; // Массив из введенных value masNum будет выступать в качестве индекса
    console.log(masNum);
    let s = document.querySelector("#start").value;
    let f = document.querySelector("#finish").value;


    let temp = imgMas[s].src;
    imgMas[s].src = imgMas[f].src;
    imgMas[f].src = temp;



    // console.log("image 1", image1, "image2", image2)

    // console.log("s =", s, "f =", f); // Так индекс найден теперь нужно добавить картинку
    // // console.log("a =", a, "b =", b); 

}
