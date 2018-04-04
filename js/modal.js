var button = document.querySelector(".footer-contacts .btn");
var modal = document.querySelector(".write-us");
var close = modal.querySelector(".write-us-close");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("js-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("js-show");
});
