"use strict";

let registration = document.querySelector("#registration");
let username = document.getElementById("username");

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let active = document.querySelector(".active");

console.log(username);

// username.addEventListener("input")


email.addEventListener("input", checkEmail);  // Функция для ввода почты
function checkEmail(e){
    if(!event.target.value.trim() || isValidEmail(event.target.value)){
        event.target.style.border = `3px solid green`;
        return true;
    }else{
        event.target.style.border = `3px solid red`;
        return false;

}
}

username.addEventListener("input", checkName);  // Функция для ввода имени пользователя
function checkName(e){
    if(!event.target.value.trim() || isValidName(event.target.value)){
        event.target.style.border = `3px solid green`;
        return true;
    }else{
        event.target.style.border = `3px solid red`;
        return false;

}
}

password.addEventListener("input", checkPassword);  // Функция для ввода пароля
function checkPassword(e){
    if(!event.target.value.trim() || isValidPassword(event.target.value)){
        event.target.style.border = `3px solid green`;
        return true;
    }else{
        event.target.style.border = `3px solid red`;
        return false;

}
}


function isValidEmail(email){
 return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

function isValidName(name){
    return /^[А-яЁё]{2,}$/i.test(name);
}

function isValidPassword(psw){
     return /^[A-Za-z 0-9 "." "+" "*" "_" -]{3,10}?$/i.test(psw); // Условия пароля: Англ буквы в любом регистре цифры от 0 до 9 (символы: . + * _ -) Символы могут быть могут не быть . Ограничение по количеству символов от 3 до 10
}








