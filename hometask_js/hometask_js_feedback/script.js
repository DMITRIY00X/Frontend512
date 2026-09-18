"use strict";

let tag = document.querySelector(".feedback");
tag.style.color = "black";
// tag.style.background = "silver";
let text = document.querySelector(".feedback p").innerHTML;



let i = 0;

window.addEventListener("load", animText);
function animText() {
    tag.textContent = text.substring(0, i);
    i++;

    if (i > text.length) {
        i = 0;
       
    }
    setTimeout(animText, 75);
};

