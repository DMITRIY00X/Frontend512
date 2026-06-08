"use strict"

let mas = [];
let n;

document.writeln("Массив введенный пользователем: ");
 for ( let i = 0; i < 10; i++) {        //  Вывод введенного пользователем массива
     n = +prompt("Введите элемент массива!"); 
    mas.push(n);

    document.writeln(  mas[i] + " ");
}
 

 let max = mas[0];   
   // Нахождение максимального числа массива
 for ( let i = 0; i < 10; i++) {   
     if (max < mas[i]) {  
         max = mas[i];  
    }
}


document.writeln("<br>");
document.writeln("Максимальное значение:  ", "<span style = 'color: blue;'>" + max + "</span> " );  //  Вывод максимального числа массива на экран
document.writeln("<br>");


 let index = mas.indexOf(max); // Нахождение индекса числа с максимальным значением 

 mas.splice(index, 1);  // удаление максимального числа при помощи индекса числа с максимальным значением
 mas.unshift("<span style = 'color: blue;'>" + max + "</span> "); // добавление максимального числа в начало массива.

document.writeln( "Измененный (готовый массив): " + mas);



