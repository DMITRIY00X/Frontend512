document.writeln("<br>");
document.writeln(`ЗАДАЧА: С помощью цикла посчитать сколько раз встречается последняя цифра в заданном числе`);

document.writeln("<br>");

let str = "123456222456352";
document.writeln("Число: " + str + "<br>");
document.writeln("<br>");
countLetters(str);

function countLetters(st) {
     let numbers = (str.at (- 1)); // Посленее значение индекса присваивается в numbers
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < st.length; j++) {
            if (st[j] == numbers[i]) {
                count++;
            }
        }
        console.log(str.length);
        document.writeln("Цифра " + "<span style = 'color: blue;'>"+ numbers[i]+"</span> "+" встречается " + "<span style = 'color: blue;'>" + count +  "</span> " + " раз(а)<br>");
    }
}
