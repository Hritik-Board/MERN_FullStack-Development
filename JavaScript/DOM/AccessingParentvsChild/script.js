//Accessing parent

const parentele = document.getElementById("parent");

console.log(parentele.parentNode);

const grandParent = parentele.parentNode;

console.log(grandParent);

const firstChild = parentele.firstChild;
const lastchild = parentele.lastChild;

console.log(lastchild.textContent);
// console.log(firstChild);

const firstElechild = parentele.firstElementChild;

console.log(firstElechild);
