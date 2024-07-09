//select the container

const containerId = document.getElementById("container");

console.log(containerId);

//get all the buttons on the container

const buttonsEle = document.querySelectorAll("button");

console.log(buttonsEle);

//loop thrgh each buttons

buttonsEle.forEach((button) => {
  const nextEle = button.nextSibling;
  console.log(nextEle);

  //check if the next sibling is a element node

  if (nextEle && nextEle.nodeType === 3) {
    nextEle.textContent = "Changed text";
  }
});
