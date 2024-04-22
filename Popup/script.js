const popup = document.querySelector(".popup")
const submitBtn = document.getElementById("popup-button");
const okBtn = document.getElementById("ok-button");

submitBtn.addEventListener("click", visiblePopup);

function visiblePopup(){
    popup.classList.add("visiblePopUp");
};

okBtn.addEventListener("click", hiddenPopup);

function hiddenPopup(){
    popup.classList.remove("visiblePopUp");
};
