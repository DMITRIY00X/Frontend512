
// let sum = 0;
// let count = -1;
// let n;

// let max = 0;
// let min = 0;

// do {
//     n = +prompt("введите число: ");
//     sum = sum + n;
//     count++;
//     if (max < n) {
//         max = n;
//     }
//     if (n < min && min > 0) {
//         min = n;
//     }
// } while (n != 0);
// document.writeln("Сумма: ", sum + "<br>");
// document.writeln("Количество итераций: ", count + "<br>");
// document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");
// document.writeln("Максимальное значение: ", + max + "<br>");
// document.writeln("Минимальное значение: " + min + "<br>");



document.writeln("Задача 2" + "<br>")
document.writeln(`Написать программу поиска произведения последовательности положительных и отрицательных чисел, вводимых с клавиатуры пока пользователь не введет "0"` + "<br>")

let n;
let mult = 1;
do {
    n = prompt("Введите число: ")
    if( n != 0 ){
        mult *= n
    }
        if(n == 0 ){
            break;
        }
}while (true)
document.writeln("Произведение чисел: " + mult + "<br>");
console.log("Произведение чисел: ", mult);
