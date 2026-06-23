"use strict";

let modal = document.querySelector("#modal");

document.querySelector("#btn").addEventListener("click", function () {
    modal.style.display = "block";
})

document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
})

window.addEventListener("click", function (event) {
    if(event.target == modal)
    modal.style.display = "none";
})

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let questions = document.querySelector(".questions");
document.querySelector(".button").addEventListener("click", function () {
    console.log("Имя пользователя: " + name.value);
    console.log("Электронная почта: " + email.value);
    console.log("Комментарии пользователя: " + questions.value);
})

