//select p tag

const p = document.getElementById("textElement");

// p.classList.add("bold");
// p.classList.add("italic");

//function to add class

function addClass() {
  p.classList.add("highlight", "bold", "italic");
}

//remove class

function removeClass() {
  p.classList.remove("highlight", "bold", "italic");
}

//toggle class

function toggleClass() {
  p.classList.toggle("highlight");
}

//contains class

const isTrue = p.classList.contains("italic");
console.log(isTrue);

function checkContains() {
  alert(p.classList.contains("highlight") ? "cotnains high" : "Does not");
}

//replace class

function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  }
}

//lisitem

function listItem() {
  alert("the first class is :" + p.classList.item(0));
}

//get value

function getValue() {
  console.log(p.classList.value);
}
