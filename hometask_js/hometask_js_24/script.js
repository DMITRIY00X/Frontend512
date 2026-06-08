"use strict";

let floor = document.querySelector(".floor");
let kg = document.querySelectorAll(".kg");
let res;

for (let i = 0; i < kg.length; i++) {
    kg[i].addEventListener("click", gruz)
}

function gruz() {
    let floors = floor.value;
    let amount = this.getAttribute("data-kg")
    // console.log(floors);
    // console.log(amount);
    res = floors * amount;
    let sum = document.querySelector(".sum");
    sum.innerHTML = res + " рублей";
}