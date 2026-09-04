"use strict";
/* let firstName="Admin";
console.log(firstName);

let age = 25;
console.log(age);

let lastName = "Hello"
console.log(lastName); */

/* let a;

a = 10; */

// let str1 = "Двойные \
// кавычки"
// let str2 = "Одинарные \nкавычки"

// console.log(str1 + " " + str2);

// let str
// console.log(str);


// let str1 = "Новый текст"

// let a = 5
// let str = `Обратные кавычки`
// console.log(str)

// let firstName = "Sergey"
// alert("Сообщение")

// alert(`Hello, ${firstName}`);


/* let days = 365;

let earth = "Земля";

let people = "7 млрд"

let sun = "солнца"

alert(`Мы живем на планете ${earth}, она делает один оборот вокруг ${sun}, за ${days} дней.
Население нашей планеты составляет примерно ${people} человек." `); */

/* const WEEK;
WEEK = 7; */

/* let res = confirm( "Знаете ли вы HTML");
console.log(res) */


// let num1 = +prompt("Введите первое число", 5);
// let num2 = +prompt("Введите второе число", 7);
// let num3 = +prompt("Введите третье число", 3);

// let sum = num1 + num2 + num3;
// console.log("Сумма: ", sum);
// console.log("Произведение: ", num1 * num2 * num3);
// console.log("Среднее арифметическое: ", sum / 3);


/* let num1 = prompt("Input Number", 4);

console.log("Квадрат числа: " + num1 ** 2); */


// let login = prompt("Ввведите логин:");

// if (login) {
//     if (login == "admin") {
//         let pas = prompt("Введите пароль:");
//         if(pas){

//         } else{
//             alert("Вход отменен");
//         }

//     } else {
//         alert("Я вас не знаю");
//     }

// } else {
//     alert("Вход отменен");
// }


// let start = 5;
// let end = 10;
// sum = 0;
// for(let i = start; i <= end; i++){
//     if(i % 2){
//       sum += i;  
//     }

// }

// let symbol = prompt "*";
// document.writeln("<table border='1'>");
// for (let i = 0; i < 5; i++) {
//     document.writeln("<tr>");
//     for (let j = 0; j < 10; j++) {
//         document.writeln("<td>"+ symbol +"</td>");
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width=")


// let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];

// let sum = 0;
// let count = 0;
// for(i = 1; i < )


// let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2x2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];

// let answers = [false, true, false, false, false, false, false ];
// let sum = 0;
// let res = new Array();

// for(let i = 0; i<questions.length; i++){
//     let answer = confirm(questions[i]);
//     if(answer == answers[i]){
//         res[i] = 10;
//         sum += res[i];
//     }else{
//         res[i] = 0;
//     }

// }


// let arr = [ 7, 55, 9, 33, 2 ];
// let sum = 0;
// for (let num of arr) {
//     sum += num;
// }

// console.log(sum)

// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое содержимое";

// let text2 =document.getElementById(text_1)


// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";

// let el = document.querySelector(".elem");
// console.log(el.closest(".content"));
// // el.style.color = "green";

// let blue = el.closest(".content");
// blue.style.color = "blue";

// let all = document.querySelectorAll("[class ~='two']");
// console.log(all);

// let js =["нужно", "учить", "JavaScript"];
// document.writeln(js + "<br>");
// console.log(js);

// console.log(js.pop())

// let st = ["Фамилия", "Имя", "Отчество"]
// let fio = new Array(3);

// for(let i = 0; i<fio.length; i++){
//     fio[i] = prompt("Ввведите данные: ");
// }
// alert(fio.join(" "));



// let users =  ['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann'];

// let modified = users.with(0, Tomas);


// function result(n, m) {
//     if (n > m){
//         return n - m;
//     }else{
//         return n + m;
//     }
// }
// let a
// let b


// function max(n, m) {
//     if (n > m) {
//         document.writeln(n)
//     }
//     if (n < m) {
//         document.writeln(m)
//     }
//     if (n == m) {
//         document.writeln(m)
//     }
// }  


// function showArrayContent(arrayToShow) {
// // Тут идёт код функции.
// }
// // Определяем массивы.
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a)); // Выводим содержимое массивов,
// alert(showArrayContent(b)); // используя созданную выше функцию.
// alert(showArrayContent(c));


// let hello = () => alert("Hello");

// hello()


// let double = (n) => n ** 2;

// let arr = [5, 3, 8, 2];
// let res = [];
// for(let i = 0; i<arr.length; i++){
//     res[i] = double(arr[i]);
// }

// console.log(res);


// let symbol = (count, a, b) => {
//     for (let i = 0; i < count; i++) {
// document.writeln(i % 2 ? b : a);
//     }
//     document.writeln("<br>")
// }

// symbol(9, "+", "-")
// symbol(7, "X", "0")

// let change = lst => {
//     lst[0] = lst[lst.length - 1];
//     lst[lst.length - 1] = lst[0];
//     lst[0] = a;
//     return lst;
// }

// let change = lst => {
//  let last = lst.pop();
//  let first = lst.shift();
//  lst.push(first);
//  return first;

// }

// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["с", "л", "о", "н"]) + "<br>");



// let checkPassword = password => {
//     let hasUpper = false;
//     let hasLower = false;

//     for(let ch of password){
//         // console.log(ch);
//         if("A" <= ch && ch <= "Z"){
//             hasUpper = true;
//         }
//         if("a" <= ch && ch <= "z"){
//             hasLower = true;
//         }
//     }

//     if(password.length >= 8){
//         return true;
//     }
//     return false;
// }

// let psw = prompt("Введите пароль: ");
// if (checkPassword(psw)) {
//     document.writeln("Это надежный пароль");
// } else{
//     document.writeln("Это ненадежный пароль");
// }

// function func(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return[num1, num2, num3,num4];
//             }
//         }
//     }
// }
// console.log(func(2)(3)(4)(5));


// function filter(numbers, calback) {
//     let results = [];
//     for (let number of numbers) {
//         if (calback(number)) {
//             results.push(number);
//         }
//     }
//     return results
// }

// let num = [1, 2, 4, 7, 3, 5, 6];

// // let oddNumbers = filter(num, function(number){
// //     return number % 2;
// // });

// let oddNumbers = filter(num, number => number % 2);

// document.writeln(oddNumbers);



// let numbers = [1,2,3,4,5,6,7];

// numbers.forEach(function(n){
//     document.writeln("Проба "+ (n) * 2 + "результат" + "<br>");
// });




// let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";

// countLetters(s);

// function countLetters(st) {
//     let letters = ["а", "б", "в"];
//     for (let i = 0; i < letters.length; i++) {
//         let count = 0;
//         for (let j = 0; j < st.length; j++) {
//             if (st[j] == letters[i]) {
//                 count++;
//             }
//         }
//         document.writeln("Символ '" + letters[i]+ "' встретился " + count + "раз<br>");
//     }
// }


// let n = prompt("Введите имя", "игорь")
// alert(first(n));

// function first(st) {
//     let newStr = st.at(0).toUpperCase();
//     for (let i = 1; i < length; i++) {
//         newStr += st.at(i);
//     }

//     return newStr;
// }

// let email;

// do {
//     email = prompt("Введите email: ", "test");
//     if (email.indexOf("@") == -1) {
//         alert("Некорректно. Повторите операцию");
//     } else {
//         break;
//     }
// } while (true);

// alert("Спасибо за сотрудничество")


// document.writeln()

// document.writeln(`Задача: От пользователя требуется ввести адрес адрес электронной почты, а скрипт должен проверять корректность ввода(наличие @)`);

// let email;

// do{
//  email = prompt("Введите свой email: ")
// }while(true);

// let el = document.querySelector("#elem");

// // el.addEventListener("click", function(){
// //     el.innerHTML = "Новый текст"
// // });

// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// });

// let searchInput = document.querySelector("#searchInput");
// let list = document.querySelectorAll("#list li");

// searchInput.addEventListener("input", function () {
//     let searchTerm = this.value.toLowerCase();
//     console.log(searchTerm);

//     for (let i = 0; i < list.length; i++) {
//         let item = list[i];
//         if (item.textContent.toLowerCase().indexOf(searchTerm) !== -1) {
//             item.style.display = "block";
//         }else{
//             item.style.display ="none";
//         }
//     }

// });

// let but = document.querySelector("button");
// but.addEventListener("click", function(event){
// console.log(event);
// })


// let array = new Array("2.jpg", "3.jpg", "4.jpg");

// document.writeln("<input type='button' value='<' name='left'>");
// document.writeln("<img id='sl' src='" + array[0] + "'>");
// document.writeln("<input type='button' value='>' name='right'>");

// document.getElementsByName("right")[0].addEventListener("click", setRight);
// document.getElementsByName("left")[0].addEventListener("click", setLeft);

// let i = 0;
// let image = document.getElementById("sl");

// function setRight() {
//     i++;
//     if(i == array.length){
//         i = 0;
//     }
//     image.src = array[i];
// }

// function setLeft(){
//     i--;
//     if(i<0){
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }

// let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif"];
// let masImg = document.querySelectorAll("#block img");

// clock();

// function clock() {
//     let time = new Date();
//     let hours = time.getHours();
//     let min = time.getMinutes();
//     let second = time.getSeconds();
//     getImg(hours, min, second);
//     setTimeout(clock, 1000);
// }

// function getImg(h, m, s) {
//     masImg[0].src = imgTime[parseInt(h / 10)];
//     masImg[1].src = imgTime[h % 10];

//     masImg[3].src = imgTime[Math.floor(m / 10)];
//     masImg[4].src = imgTime[m % 10];

//     if (s < 10) {
//         masImg[6].src = imgTime[0];
//         masImg[7].src = imgTime[String (s)[0]];
//     } else {
//         masImg[6].src = imgTime[String (s)[0]];
//         masImg[7].src = imgTime[String (s)[1]];
//     }

// }

// let tree = document.querySelector(".tree");

// for(let li of tree.querySelectorAll("li")){
//     let span = document.createElement("span");
//     li.prepend(span);
//     span.append(span.nextSibling);
// }

// document.image.border = "1";
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.width = 200;

// document.image.src ="blue_star.png";

// document.image.addEventListener("click", changeImage);

// let flag = 0;
// function changeImage() {
//     if (flag == 0) {
//         document.image.src = "blue_star.png";
//         flag = 1;
//     }else{
//         document.image.src = "golden_star.png";
//         flag = 0;
//     }
// }

// let array = new Array("2.jpg", "3.jpg", "4.jpg");
// document.writeln("<input type='button' value ='<'name='left'>");
// document.writeln("<img id='sl'src='" + array[0] + "'>");
// document.writeln("<input type='button' value ='>'name='right'>");

// document.getElementsByName("right")[0].addEventListener("click", setRight);
// document.getElementsByName("left")[0].addEventListener("click", setLeft);

// let i = 0;
// let image = document.getElementById("sl");

// function setRight() {
//     i++;
//     if (i == array.length) {
//         i = 0;
//     }
//     image.src = array[i];
// }

// function setLeft() {
//     i--;
//     if (i < 0) {
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }

// let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"]

// let masImg = document.querySelectorAll("#block img"); // Получаем доступ к массиву картинок
// console.log(masImg);
// clock();

// function clock() {
//     let time = new Date();
//     let hours = time.getHours();
//     let min = time.getMinutes();
//     let second = time.getSeconds();
//     setTimeout(clock, 1000);

//     getImg(hours, min, second);
// }

// function getImg(h, m, s) {
//     masImg[0].src = imgTime[parseInt(h / 10)];
//     masImg[1].src = imgTime[h % 10];

//     masImg[3].src = imgTime[Math.floor(m / 10)];
//     masImg[4].src = imgTime[m % 10];

//     masImg[6].src = imgTime[Math.floor(s / 10)];
//     masImg[7].src = imgTime[s % 10];
// }

// let list = document.querySelector("ul");
// let newItem = document.createElement("li");
// newItem.textContent = "Новый элемент списка";

// list.append(newItem);

// let i = 1;
// document.querySelector("#func1").addEventListener("click", change);
// document.querySelector("#func2").addEventListener("click", add);

// function change(){
// let elem = document.querySelector("#list2").lastChild;
// document.querySelector("#list1").append(elem);
// }

// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML ="Water" + i;
//     document.querySelector("#list2").append(elem);
//     i++;
// }

// let calendar = document.getElementById("calendar")
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;

// createCalendar(calendar, year, month);

// function createCalendar(elem, year, month) {
//     let currentMonth = ["Январь", "февраль", "март", "Апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

//     let current = document.createElement("h2");
//     current.textContent = `${currentMonth[month - 1]} ${year}`;
//     elem.append(current);

//     let table = document.createElement("table");

//     table.innerHTML =
//     tr

// }

// let menu = document.querySelector(".menu");
// let child = document.querySelectorAll(".menu li");

// menu.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         for (let item of child) {
//             item.classList.remove("active");
//         }
//         event.target.classList.add("active");
//     }
// })

// let menuElem =document.getElementById("sweeties");
// let titleElem = menuElem.querySelector(".title");

// titleElem.addEventListener("click", function(){
//     menuElem.classList.toggle("open");
// })

// let brush = document.createElement("div");
// brush.classList.add("brush");

// brush.hidden = true;

// document.addEventListener("mouseover", function(){
//     brush.hidden = false;
// })

// document.body.append(brush);

// let product = document.querySelector(".product-cover");

// let data = new Array(18);

// for(let i =0; i<data.length; i++){
//     data[i] = document.createElement("div");
//     data[i]/classList.add("card");

//     if(i%3){
//         data[i].classList.add("blue");
//     }
//     product.append(data[i]);
// }


// let lengthPath = 5; // Колличество элементов на одной странице
// let pagination = document.querySelector(".pagination")

// let product = document.querySelector(".product-cover");
// let data = new Array(18);

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

// function splitParts(arr) {
//     if (arr.length > lengthPath) { // 18>5
//         let chunks = [];
//         for (let i = 0; i < arr.length; i+=lengthPath) {
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


// let btnAdd = document.querySelector("#btnAdd");
// let btnRemove = document.querySelector("#btnRemove");
// let taskInput = document.querySelector("#task");
// let taskList = document.querySelector("#taskList");

// btnAdd.addEventListener("click", e => {
//     e.preventDefault();

//     if(taskInput.value.trim() === ""){
//         alert("Введите название задачи");
//         return;
//     }
//     let option = new Option(taskInput.value, taskInput.value);
//     taskList.add(option, undefined);
//     taskInput.value = '';
//     taskList.focus();
// })

// btnRemove.addEventListener("click", e => {
//     e.preventDefault();

//     let selectedTasks = [];

//     for(let i =0; i<taskList.options.length; i++){
//         selectedTasks[i] = taskList.options[i].selected;
//     }

//     let index = taskList.options.length;
//     while(index--){
//         if(selectedTasks[index]){
//             taskList.remove(index);
//         }
//     }
// })



// let regex = /java(script)?|php|c(\+{2})?/gi;
// let st = "Java, JavaScript, PHP, C, C++";
// document.writeln(st.match(regex));


// if(navigator.cookieEnabled === false){
//     alert("Cookies отключены");
// }else{
//     alert("Cookies включены");
// }

document.cookie = "user = Сергей";
alert(document.cookie);