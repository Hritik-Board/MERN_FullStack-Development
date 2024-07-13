//access the button element

const buttonEl = document.getElementById("actionButton");

//single click

buttonEl.addEventListener("click", function () {
  console.log("Clicked");
});

//double click

buttonEl.addEventListener("dblclick", function () {
  console.log("double Clicked");
});

//mouse enter

buttonEl.addEventListener("mouseenter", function () {
  console.log("Mouse enter");
});
