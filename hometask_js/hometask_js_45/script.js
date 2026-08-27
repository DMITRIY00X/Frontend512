

const items = [11, "одиннадцать", 12, "Двенадцать", 13, "тринадцать","пять", 5];

const enumerate = Map.groupBy(items, n => typeof n == "number" ? "число" : "строка");

console.log(enumerate);

