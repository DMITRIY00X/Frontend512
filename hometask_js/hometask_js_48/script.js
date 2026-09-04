

document.querySelector("#load").addEventListener("click", load);

function load() {
    let url = "https://jsonplaceholder.typicode.com/todos" // здесь должна быть ссылка
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let ul = document.querySelector("#list");

            let html = data.map(function (item) {
                if (item.completed == true) {
                    item.completed = "выполнил задачу";
                }else{
                    item.completed = "не выполнил задачу"
                }
                return "<li>" + "Пользователь: " + item.userId + " " + item.completed + " " + "№" + item.id + " " + "(" + item.title + ")" + "</li>";
            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "));
        })

}