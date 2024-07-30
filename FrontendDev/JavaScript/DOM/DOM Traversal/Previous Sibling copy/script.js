//select the list element with id cherry

const cherryEle = document.getElementById("cherry");

//select previous single element

const prevEle = cherryEle.previousElementSibling;

const prevnode = cherryEle.previousSibling;

console.log(prevEle);
console.log(prevnode);

const nextEle = cherryEle.nextElementSibling;

const nextNode = cherryEle.nextSibling;

console.log(nextEle);
console.log(nextNode);
