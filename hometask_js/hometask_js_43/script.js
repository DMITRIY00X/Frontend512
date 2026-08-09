const storageType = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(";")
            .map(cookie => cookie.split("="))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`;
    }
};

const agree = "jdc-consent";
const showPopup = () => !storageType.getItem(agree);
const saveToStorage = () => storageType.setItem(agree, true);

window.addEventListener("load", () => {
    const acceptFn = event => {
        saveToStorage(storageType)
        agreePopup.classList.add("hidden");
    }
    const agreePopup = document.getElementById("consent-popup");
    const acceptBtn = document.getElementById("accept");

    acceptBtn.addEventListener("click", acceptFn);

    if (showPopup(storageType)) {
        setTimeout(() => {
agreePopup.classList.remove("hidden")
        }, 2000);
    }
})

const agreement = document.querySelector("#agreement");

agreement.addEventListener("click", function(){
    window.open("agreement.html");
})
