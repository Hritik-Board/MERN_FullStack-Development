//Function to add new fruit

function addFruit(name) {
  const ulContainer = document.getElementById("fruitList");

  //crate li

  const liEle = document.createElement("li");
  liEle.className = "fruit";

  liEle.textContent = name;

  ulContainer.append(liEle);

  // console.log(ulContainer);
}

addFruit("Apple");
addFruit("Cherry");
addFruit("Banana");
addFruit("Grapes");

//remove fruit function

function removeFruit(name) {
  //select the parent
  const ulEl = document.getElementById("fruitList");

  let fruitFound = false;

  //loop through the fruit

  // console.log(ulContainer.children);

  for (const li of ulEl.children) {
    if (li.textContent === name) {
      fruitFound = true;
      //remove the fruit

      ulEl.removeChild(li);
      break;
    }
  }

  document.getElementById("message").textContent = fruitFound
    ? `${name}  was removed from the list`
    : `${name} was not found`;
}

removeFruit("Banana");
