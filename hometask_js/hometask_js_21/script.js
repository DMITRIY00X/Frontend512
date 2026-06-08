"use strict"
let lengthPath = 5; // Колличество элементов на одной странице
let pagination = document.querySelector(".pagination") // Получаем доступ к классу пагинации

let product = document.querySelector(".product-cover");  // Получаем доступ к классу продукт кавер
let data = new Array(18);

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div")
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);
    product.append(data[i]);
}

let chunks = splitParts(data);
renderChunks(0);




function splitParts(arr) {
    if (arr.length > lengthPath) { // 18>5
        let chunks = [];
        for (let i = 0; i < arr.length; i += lengthPath) {
            chunks.push(arr.slice(i, i + lengthPath));
        }

        return chunks;
    } else {
        return arr;
    }
}

function renderChunks(part) {
    if (part >= 0 && part <= chunks.length) {
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    } else {
        return false
    }
}

// let i = [0, 1, 2, 3];

// let prev = document.getElementById("prev");
// let page1 = document.getElementById("knopka1");
// let page2 = document.getElementById("knopka2");
// let page3 = document.getElementById("knopka3");
// let page4 = document.getElementById("knopka4");

// console.log(i);
// let pages = document.querySelectorAll(".pages a"); // массив кнопок с 1 по 4
// pagination.addEventListener("click", (event) => {
//     if (event.target.tagName === "A") {

//         for (let item of pages) {
//             item.classList.remove("active");
//         }
//         event.target.classList.add("active");
     
//         if (event.target === page1) {
//             renderChunks(0);
//         }
//         if (event.target === page2) {
//             renderChunks(1);
//         }
//         if (event.target === page3) {
//             renderChunks(2);
//         }
//         if (event.target === page4) {
//             renderChunks(3);
//         }
//     }
// });




