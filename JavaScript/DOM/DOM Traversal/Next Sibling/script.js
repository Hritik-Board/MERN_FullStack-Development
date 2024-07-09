//slect buttons

const buttonEl = document.getElementById("button1");

const buttonE2 = document.getElementById("button2");

const prevSibEle = buttonEl.previousSibling;

console.log(prevSibEle);

if (prevSibEle.nodeType === 3) {
  prevSibEle.textContent = "Text 2 updated";
}
