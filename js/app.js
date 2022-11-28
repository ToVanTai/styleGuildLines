//handle toast messenger
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