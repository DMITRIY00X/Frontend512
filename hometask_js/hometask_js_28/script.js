"use strict";

let button = document.querySelector("#button");
button.addEventListener("click", smsUser);

function smsUser() {
    let name = document.querySelector("#name").value;
    let text = document.querySelector("#text").value;
    let regExpBBBold =/(.*?)<(b|u|i|s|h1|p)>(.*?)<\/\2>/ig;

    

    text = text.replace(regExpBBBold, (`
        <div>
        $1<span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt/$2&gt</span>
        </div>
        `));

    let form = document.querySelector("form");
    form.insertAdjacentHTML("afterend", `<fieldset>
        <legend>${name}</legend>
        <div>${text}</div>
        </fieldset>`)


};