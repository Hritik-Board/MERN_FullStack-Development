//Select a list item using the data attribute
const selectedEle = document.querySelector("[data-item = 'fruit']");

console.log(selectedEle);

//Navigate to the parent Ul element

const parentlistele = selectedEle.parentNode;

console.log(parentlistele);

//Navigate to the grandParent
const grandParent = parentlistele.parentNode;

console.log(grandParent);
