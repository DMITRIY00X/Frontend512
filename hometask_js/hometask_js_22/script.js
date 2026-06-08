"use strict";
let login = document.querySelectorAll("input")[0];//  Получаем доступ к "Логину".
let psw1 = document.querySelectorAll("input")[1];//  Получаем доступ к "Паролю".
let psw2 = document.querySelectorAll("input")[2];//  Получаем доступ к "Подтверждению пароля".
let button = document.querySelectorAll("input")[3];//  Получаем доступ к кнопке "Зарегистрироваться".


button.addEventListener("click", function () {
    login.value.length <= 0 || psw1.value.length <= 0 || psw2.value.length <= 0 ? alert("Заполните все поля") : psw1.value.length < 5 || psw2.value.length < 5 ? alert("Маленький пароль") : (psw1.value !== psw2.value) ? alert("Пароли не совпадают") : alert("Вы успешно зарегистрировались");

});