document.writeln(`ЗАДАЧА: Пользователь вводит с клавиатуры любое количество чисел (четные и не четные) найти их среднее арифметическое значение. Условие выхода 0.`+ "<br>")

let n;
let count = 0;
let sum = 0;
do {
    n = +prompt("Введите целое число:")
    document.writeln(n + "<br>");
    if (n != 0) {
        count++;
        sum = sum + n;
    }

} while (n != 0)
document.writeln("<br>")
    document.writeln("Колличество итераций: " + count + "<br>");
    document.writeln("Сумма: " + sum + "<br>");
    document.writeln("Среднее арифметическое: " + sum / count + "<br>");