"use strict";

let numbers = "-1.5 0 2 -123.4.";
let result = /-?\d+(\.\d+)?/g;

document.writeln("<br><br>");
document.writeln("Решение: " + numbers.match(result));
