"use strict";
let inputRub = document.querySelector("#rub");
let inputUsd = document.querySelector("#usd");
let inputEuro = document.querySelector("#euro");


inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "current.json");
    request.send();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.response);
            let data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
            inputEuro.value = (inputRub.value / data.current2.euro).toFixed(2);
            
        } else {
            inputUsd.value = "Что-то пошло не так";
            inputEuro.value = "Что-то пошло не так";
        }
    })
})
