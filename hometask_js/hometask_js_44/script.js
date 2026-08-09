
const text = document.querySelector("#text");

let counter;

if (localStorage.getItem("count")) {
    console.log("Эта строчка работает");
    counter = localStorage.getItem("count");  // В counter присваивается ключ count
    text.textContent = counter;
}

text.addEventListener("input", function () {
    text.textContent = counter;
    localStorage.setItem("count", this.value);

})
