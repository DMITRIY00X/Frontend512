"use strict";
document.writeln("<br>");
document.writeln("Образец: ");
let st = "Это пример строки с несколькими пробелами";
document.writeln(st);
document.writeln("<br><br>");
document.writeln("Ответ: ");
let space = st.replace(/\s/g, "_");

let result = document.writeln(space);

