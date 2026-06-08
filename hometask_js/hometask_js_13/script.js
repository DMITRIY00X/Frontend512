"use strict"


let massive = [" Копеек", " Копейка", " Копейки", " - это число вне диапазона"];
let primo = 1;
let ultimo = 99;
let ch = prompt("Введите колличество копеек", );
document.writeln(ch, quantitaKop(primo, ultimo, ch)(massive));

function quantitaKop(inizio, fine, numero) {
    let n = numero % 10;
    let m = numero % 100;
    let chislo = !(inizio <= numero && numero <= fine) ? 3
        : n == 1 && m != 11 ? 1
            : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
                : 0

    return function (arr) {
        return arr[chislo];
    }

}