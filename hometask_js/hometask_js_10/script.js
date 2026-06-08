"use strict"

let arr = new Array(9);
let n;
arr[0] = n = prompt("Введите число: ");
arr[1] = n = prompt("Введите число: ");
arr[2] = n = prompt("Введите число: ");
arr[3] = n = prompt("Введите число: ");
arr[4] = n = prompt("Введите число: ");
arr[5] = n = prompt("Введите число: ");
arr[6] = n = prompt("Введите число: ");
arr[7] = n = prompt("Введите число: ");
arr[8] = n = prompt("Введите число: ");

console.log(arr);
document.writeln("Массив: " + arr + "<br>");


function res(arr) {
    document.writeln("Числа кратные трем: " )
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            document.writeln( "<span style = 'color: blue;'>" + arr[i] + "</span> "  + " ")
        }
    }
    
}

res(arr);







