document.writeln(`Задача: Разработать программу которая выводит на экран линию из символов.` + "<br>");
document.writeln(`Пользователь указывает: число символов, тип символа и ориентацию линии – вертикальную или горизонтальную.` + "<br>");
document.writeln("<br>")
let count = prompt("Введите количество символов: ")
let symbol = prompt("Введите тип символа: ")
let orient = prompt(`Введите ориентацию линии 
Горизонтальная - 0
Вертикальная - 1`)
for(let i = 1; i <= count; i++){
    if(orient == 0){
        document.writeln(symbol)
    }else{
        document.writeln(symbol + "<br>");
    }
}
