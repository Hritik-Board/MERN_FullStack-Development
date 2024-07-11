//slect the element

const btnclickEle = document.getElementById("clickButton");

btnclickEle.addEventListener("click", function () {
  console.log(this);
});

document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", (e) => {
    console.log(e);
    console.log("double clicked");
  });

document.getElementById("hoverDiv").addEventListener("mouseover", () => {
  console.log("mouse over");
});
