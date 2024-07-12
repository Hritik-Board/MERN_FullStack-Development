//Add event listener to the parent div

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("div clicked , Event phase " + event.eventPhase);
  },
  true
); //capturing phase

//add event listener to the ul

document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("list clicked , Event phase " + event.eventPhase);
  },
  true
); //capturing phase

//add event listener to the li

document.getElementById("item1").addEventListener(
  "click",
  function (event) {
    alert("item1 clicked , Event phase " + event.eventPhase);
  },
  false
); //bubbling phase

document.getElementById("item2").addEventListener(
  "click",
  function (event) {
    alert("item2 clicked , Event phase " + event.eventPhase);
  },
  false
); //bubbling phase
