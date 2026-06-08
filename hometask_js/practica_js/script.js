"use strict";
// let lengthPath = 5; // Колличество элементов на одной странице
// let pagination = document.querySelector(".pagination") // Получаем доступ к классу пагинации

// let product = document.querySelector(".product-cover");  // Получаем доступ к классу продукт кавер
// let data = new Array(18);
// let filter = document.querySelector(".buttons");

// for (let i = 0; i < data.length; i++) {
//     data[i] = document.createElement("div")
//     data[i].classList.add("card");
//     if (i % 3) {
//         data[i].classList.add("blue");
//     } else {
//         data[i].classList.add("gray");
//     }
//     let node = document.createTextNode(i + 1);
//     data[i].append(node);
//     product.append(data[i]);
// }

// let chunks = splitParts(data);
// renderChunks(0);
// renderPagination();

// pagination.addEventListener("click", event => {
//     let item = event.target.closest(".pagination-item");

//     if (item) {
//         let active = pagination.querySelector('.pagination-item.active'), part;
//         if (item.classList.contains("item-prev") || item.classList.contains("item-next")) {
//             if (item.classList.contains("disable")) {
//                 return false;
//             }
//             part = +active.dataset.part;
//             part = item.classList.contains("item-prev") ? part - 1 : part + 1
//             renderChunks(part);
//             active.classList.remove("active");
//             pagination.querySelector(`.pagination-item[data-part ="${part}"]`).classList.add("active");
//         } else {
//             active.classList.remove("active");
//             item.classList.add("active");
//             part = +item.dataset.part;
//             renderChunks(part);
//         }
//         let prev = pagination.querySelector(".pagination-item.item-prev");
//         let next = pagination.querySelector(".pagination-item.item-next");

//         if (prev.classList.contains("disable")) {
//             prev.classList.remove("disable");
//         }
//         if (next.classList.contains("disable")) {
//             next.classList.remove("disable");
//         }

//         if (part === 0) {
//             prev.classList.add("disable");
//         }
//         if (part === chunks.length - 1) {
//             next.classList.add("disable");
//         }
//     }

// });


// function splitParts(arr) {
//     if (arr.length > lengthPath) { // 18>5
//         let chunks = [];
//         for (let i = 0; i < arr.length; i += lengthPath) {
//             chunks.push(arr.slice(i, i + lengthPath));
//         }

//         return chunks;
//     } else {
//         return arr;
//     }
// }

// function renderChunks(part) {
//     if (part >= 0 && part <= chunks.length) {
//         product.innerHTML = "";
//         chunks[part].map(elem => product.append(elem));
//     } else {
//         return false
//     }
// }

// function renderPagination() {
//     if (chunks.length > 1) {
//         chunks.map((elem, i) => pagination.insertAdjacentHTML("beforeend", `<li class ='pagination-item${i === 0 ? " active" : ""}' data-part="${i}"><a href="#">${i + 1}</a></li>`))

//         pagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>");

//         pagination.insertAdjacentHTML("beforeend", "<li class='pagination-item item-next'><a href='#'>next</a></li>")
//     }

// }

// filter.addEventListener("click", event => {
//     let btn = event.target.closest(".btn");
//     pagination.innerHTML = "";
//     if (btn) {
//         if (btn.dataset.filter !== "all") {
//             chunks = splitParts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
//         } else {
//             chunks = splitParts(data);
//         }
//     }
//     renderChunks(0);
//     renderPagination();
// })

// let text = document.querySelector("input");
// let output = document.querySelector("#length");

// text.addEventListener("input", function(){
//     output.textContent = text.value.length + "/ 30";
// })



let login = document.querySelectorAll("input")[0];//  Получаем доступ к "Логину".
let psw1 = document.querySelectorAll("input")[1];//  Получаем доступ к "Паролю".
let psw2 = document.querySelectorAll("input")[2];//  Получаем доступ к "Подтверждению пароля".
let button = document.querySelectorAll("input")[3];//  Получаем доступ к кнопке "Зарегистрироваться".


button.addEventListener("click", function () {
    login.value.length <= 0 || psw1.value.length <= 0 || psw2.value.length <= 0 ? alert("Заполните все поля") : psw1.value.length < 5 || psw2.value.length < 5 ? alert("Маленький пароль") : (psw1.value !== psw2.value) ? alert("Пароли не совпадают") : alert("Вы успешно зарегистрировались");

});


