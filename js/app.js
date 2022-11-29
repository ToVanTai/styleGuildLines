//start handle toast messenger
var listToastMessenger = document.querySelectorAll(".m-toast-messenger-container .m-toast-messenger-item")
var timeStart = 3000
listToastMessenger.forEach((item, index) => {
  setTimeout(() => {
    item.style.display = "none";
  }, 3000 + index * 3000);
  item.addEventListener("click", () => {
    item.style.display = "none"
  })
})
//end handle toast messenger

//start handle popup 
var showPopup = function (type) {
  let popupElm = document.querySelector(".m-popup")
  let overlayElm = document.querySelector(".m-overlay")
  overlayElm.classList.add("open")
  popupElm.className = "m-popup open"
  switch (type) {
    case "warning":
      popupElm.classList.add("warning")
      break;
    case "danger":
      popupElm.classList.add("danger")
      break;
    case "notify":
      popupElm.classList.add("notify")
      break;
    default:
      popupElm.classList.add("notify")
      break;
  }
}
var closePopup = function () {
  console.log("close");
  let popupElm = document.querySelector(".m-popup")
  let overlayElm = document.querySelector(".m-overlay")
  popupElm.classList.remove("open")
  overlayElm.classList.remove("open")
}
document.querySelector(".m-overlay").addEventListener("click", closePopup)
//end handle popup
