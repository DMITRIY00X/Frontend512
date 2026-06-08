"use strict";


let lengthPath = 5; // колличество элементов на одной странице
let pagination = document.querySelector(".pagination"); // получаем доступ к классу pagination

let product = document.querySelector(".product-cover");  // Получаем доступ к классу product-cover
let data = new Array(18); // Создаем массив из 18 элементов (фигуры на странице)

for (let i = 0; i < data.length; i++) { // создаем массив для создания элементов 
    data[i] = document.createElement("div");  // создаем 18 элементов див проходясь по массиву "data"
    data[i].classList.add("card");  // добавляем всем элементам класс "card" проходясь по массиву "data"
    if (i % 3) {  // Делаем каждый третий элемент синим, остальные красим в синий цвет.
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }

    let node = document.createTextNode(i + 1);  // Выводим цифры на элементы
    data[i].append(node);

    product.append(data[i]); //
}

let chunks = splitParts(data);

// здесь хранятся части массива "data";
renderChunks(0);  // функция renderChunks со значением "0" показывает первую страницу из 5 элементов 

function splitParts(arr) { // в "arr" приходит массив "data"
    if (arr.length > lengthPath) { // При условии что длинна массива больше 5 (18 > 5)
        let chunks = [];  // Создаем пустой массив "chunks"  

        for (let i = 0; i < arr.length; i += lengthPath) { // заполняем пустой массив "chunks" с помощью цикла
            chunks.push(arr.slice(i, i + lengthPath)); // С помощью "push" в конец пустого массива "chunks" помещается i (начальный индекс) + 5.
        }
        return chunks;
    } else {
        return arr;
    }
}


function renderChunks(part) {  // Отображение элементов (страниц)
    if(part >= 0 && part <=chunks.length) {         // Условие если элемент который попадет в (part) будет больше или равен 0 "Логическое И" и если (part) будет меньше или равен длинне пустого массива "chunks" который заполняли в функции "splitParts(arr)"
        product.innerHTML = ""; // очищаем элементы из div
        chunks[part].map(elem => product.append(elem));// Выводим в исходном массиве элемент и выводим его через "append" 
        
    } else {
        false
    }
}