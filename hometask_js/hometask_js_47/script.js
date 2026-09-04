"use strict";

let request = new XMLHttpRequest();
request.open("GET", "goods.json");
request.send();

request.addEventListener("load", () => {
    if(request.status == 200){
        console.log(request.response);
    }
})