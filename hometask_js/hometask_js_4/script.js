document.writeln(`ЗАДАНИЕ: Написать программу, вычисляющую произведение нечетных чисел в диапазоне от 10 до 30`+ "<br>");
document.writeln("<br>");
let i = 10;
let multiply = 1;
do {
    if (i % 2 == 1) {
        document.writeln(`i = ${i}<br>`);
        multiply = multiply * i;
    }
    i++;
} while (i <= 30);
document.writeln("<br>" + `Произведение нечетных чисел в диапазоне от 10 до 30 равняется: ` + "<br>");
document.writeln( multiply  + "<br>");
