/* Here goes your JS code */
const showPopupButton = document.getElementById("show-popup-button")
const showPopupButtonMain = document.getElementById("show-popup-button-main")
const showPopupForm = document.getElementById("show-popup-form")
const showPopupFormMain = document.getElementById("show-popup-form-main")
const showPopupSuccessMain = document.getElementById("show-popup-success-main")
const faCheck = document.querySelector(".fa-check")
const formInputLabel = document.querySelector(".form-input-label")
const faTimesCircle = document.querySelector(" fa-times-circle")
showPopupButton.addEventListener("click", ev => {
    showPopupButtonMain.classList.add("hidden");
    showPopupFormMain.classList.remove("hidden");
});
faTimesCircle.addEventListener("click", ev => {
    showPopupForm.classList.add("hidden")
})
showPopupForm.addEventListener("submit", ev => {
    ev.preventDefault()
    showPopupFormMain.classList.add("hidden");
    showPopupSuccessMain.classList.remove("hidden");
});
formInputLabel.addEventListener("click", ev=>{
    faCheck.style.color = "black"
})
