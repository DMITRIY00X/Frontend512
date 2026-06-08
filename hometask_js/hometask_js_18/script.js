
let but = document.querySelector("#cl"); //Получаю доступ к ID "cl"
let size = document.querySelector(".size");
but.addEventListener("click", myMove);


function myMove() {
    let elem = document.getElementById("animate")
    let pos = 0;
    let id = setInterval(frame, 30);

    function frame() {
        if (pos !== 0 && pos < 300) {
            but.style.display = "none"

        }
        if (pos >= 350) {
            but.style.display = "inline"
            
        }
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px"
            elem.style.left = pos + "px"
        }

    }
}




