
document.writeln("Сравните 2 числа и укажите большее: " + "<br>");
document.writeln("Примеры №1: " + "<br>");
document.writeln("5 и 6" + "<br>");
document.writeln("4 и 3" + "<br>");
document.writeln("8.4 и 5.5" + "<br>");
document.writeln("88 и 88" + "<br>");
document.writeln("3.14 и 3.14" + "<br>");
document.writeln("-1 и -2" + "<br>");


document.writeln("<br>");
document.writeln("<br>");
document.writeln("Решение №1: " + "<br>");
document.writeln("<br>");

function max(num1, num2) {
    if (num1 > num2) {
        document.writeln("Большее число: " + num1 + "<br>");
    }
    if (num1 < num2) {
        document.writeln("Большее число: " + num2 + "<br>");
    }
    if (num1 == num2) {
        document.writeln("Числа равны" + "<br>");
    }
}

max(5, 6)
max(4, 3)
max(8.4, 5.5)
max(88, 88)
max(3.14, 3.14)
max(-1, -2)


document.writeln("<br>");
document.writeln("Примеры №2: " + "<br>");
document.writeln("10 и 8" + "<br>");
document.writeln("7 и 3" + "<br>");
document.writeln("1.4 и 7.5" + "<br>");
document.writeln("22 и 22.5" + "<br>");
document.writeln("3.14 и 3.14" + "<br>");
document.writeln("-25 и -30" + "<br>");

document.writeln("<br>");
document.writeln("<br>");
document.writeln("Решение №2: " + "<br>");
document.writeln("<br>");

let max2 = function (num3, num4) {
    if (num3 > num4) {
        document.writeln("Большее число: " + num3 + "<br>");
    }
    if (num3 < num4) {
        document.writeln("Большее число: " + num4 + "<br>");
    }
    if (num3 == num4) {
        document.writeln("Числа равны" + "<br>");
    }
}

max2(10, 8)
max2(7, 3)
max2(1.4, 7.5)
max2(22, 22.5)
max2(3.14, 3.14)
max2(-25, -30)


document.writeln("<br>");
document.writeln("Примеры №3: " + "<br>");
document.writeln("10 и 10" + "<br>");
document.writeln("1 и 7" + "<br>");
document.writeln("44 и 4.4" + "<br>");
document.writeln("22.5 и 22.05" + "<br>");
document.writeln("3.14 и 3.14" + "<br>");
document.writeln("-25 и -3" + "<br>");

document.writeln("<br>");
document.writeln("<br>");
document.writeln("Решение №3: " + "<br>");
document.writeln("<br>");

let max3 = (num5, num6) => {
    if (num5 > num6) {
        document.writeln("Большее число: " + num5 + "<br>");
    }
    if (num5 < num6) {
        document.writeln("Большее число: " + num6 + "<br>");
    }
    if (num5 == num6) {
        document.writeln("Числа равны" + "<br>");
    }
}

max3(10, 10)
max3(1, 7)
max3(44, 4.4)
max3(22.5, 22.05)
max3(3.14, 3.14)
max3(-25, -3)


