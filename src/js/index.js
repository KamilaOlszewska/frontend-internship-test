/* Here goes your JS code */
const showPopupButton = document.getElementById("show-popup-button")
const showPopupButtonMain = document.getElementById("show-popup-button-main")
showPopupButton.addEventListener("click", ev => {
    showPopupButtonMain.classList.add("hidden");
    showPopupFormMain.classList.remove("hidden");
});


const showPopupForm = document.getElementById("show-popup-form")
const showPopupFormMain = document.getElementById("show-popup-form-main")
const showPopupSuccessMain = document.getElementById("show-popup-success-main")
const faCheck = document.querySelector(".fa-check")
const formInputLabel = document.querySelector(".form-input-label")

showPopupForm.addEventListener("submit", ev => {
    ev.preventDefault()
    showPopupFormMain.classList.add("hidden");
    showPopupSuccessMain.classList.remove("hidden");

});
formInputLabel.addEventListener("click", ev=>{
    faCheck.style.color = "black"
})
