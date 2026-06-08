"use strict"

function hide() {
    let id = document.querySelector(".picture");
    id.style.display = "none";
};


function show() {
    let id = document.querySelector(".picture");
    id.style.display = "block";
};
    

    // document.writeln("<div class ='proba'>Нажмите на кнопку</div>");
    let tag = document.querySelector(".proba");
    tag.style.color = "green";
    tag.style.background = "silver";
    let text = document.querySelector(".proba").innerHTML;
    let i = 0;

    window.addEventListener("load", animText);
    function animText() {
        tag.innerHTML = text.substring(0, i);
        i++;
  
        if (i > text.length) {
            i = 0;
        }
        setTimeout(animText, 50);
    };
    
    