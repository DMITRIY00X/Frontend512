

let num = prompt(`Введите пятизначное число: `, 39671);
console.log(num);

let one, two, three, four, five;

 one = num % 10    // one = 1
console.log(one);
num = parseInt(num / 10);
 two = num % 10;    //  two = 7
console.log(two)  
num = parseInt(num / 10);  
 three = num % 10;  //   three = 6
console.log(three) 
num = parseInt(num / 10);
four = num % 10;    //  four = 9
console.log(four)  
num = parseInt(num / 10);
 five = num % 10;   //   five = 3 
console.log(five);  

console.log("Произведение цифр: ", five * four * three * two * one  )
sum = five + four + three + two + one;
console.log("Среднее арифметическое: ",  sum / 5);




