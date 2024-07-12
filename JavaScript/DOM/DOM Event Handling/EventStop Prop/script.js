// add event listener to the outer div

document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("outer div clicked" + event.eventPhase);
  },
  false
);
//bubbling phase

///event listener to the middle div

document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("middle div clicked" + event.eventPhase);
    event.stopPropagation();
  },
  false
);
//bubbling phase

document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("inner div clicked" + event.eventPhase);
  },
  true
);
