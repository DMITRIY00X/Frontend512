
let del = document.querySelectorAll(".remove-button");

for (i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {
        this.parentNode.remove();
    })

}



