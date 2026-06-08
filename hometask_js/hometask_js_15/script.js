
// Рекурсивная функция


let fact = prompt("Введите число для нахождения факториала: ");

function factorial(factor) {  
    if (factor <= 1) {
        return factor;
    }
    return factor * factorial(factor - 1);
}

document.writeln( "Факториал числа: " + "<span style = 'color: green;'>" + fact + "</span> " + " равен " + "<span style = 'color: green;'>" + factorial(fact)) + "</span> ";

