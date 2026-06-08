document.writeln("Задание №2 нахождение максимального числа из массива. ")
document.writeln("<br>")
document.writeln("<br>")

let arr = new Array(9);
let n;
arr[0] = n = +prompt("Введите число: ");
arr[1] = n = +prompt("Введите число: ");
arr[2] = n = +prompt("Введите число: ");
arr[3] = n = +prompt("Введите число: ");
arr[4] = n = +prompt("Введите число: ");
arr[5] = n = +prompt("Введите число: ");
arr[6] = n = +prompt("Введите число: ");
arr[7] = n = +prompt("Введите число: ");
arr[8] = n = +prompt("Введите число: ");


let maximum = arr[0];
function res(arr) {
    document.writeln("Первый способ: " + "<br>");
    document.writeln("Массив: " + arr + "<br>");
    for (let i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    document.writeln("Максимальное число массива: ", "<span style = 'color: blue;'>" + maximum + "</span> " + "<br>");
}

res(arr);


let maximum2 = arr[0];
let res2 = function (arr) {
    document.writeln("<br>");
    document.writeln("Второй способ: " + "<br>");
    document.writeln("Массив: " + arr + "<br>");
    for (let i = 0; i < arr.length; i++) {
        if (maximum2 < arr[i]) {
            maximum2 = arr[i];
        }
    }
    document.writeln("Максимальное число массива: ", "<span style = 'color: blue;'>" + maximum2 + "</span> " + "<br>");
}

res2(arr);


let maximum3 = arr[0];
let res3 = (arr) => {
    document.writeln("<br>");
    document.writeln("Третий способ: " + "<br>");
    document.writeln("Массив: " + arr + "<br>");
    for (let i = 0; i < arr.length; i++) {
        if (maximum3 < arr[i]) {
            maximum3 = arr[i];
        }
    }
    document.writeln("Максимальное число массива: ", "<span style = 'color: blue;'>" + maximum3 + "</span> " + "<br>");
}

res3(arr);


