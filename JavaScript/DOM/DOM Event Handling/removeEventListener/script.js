//named function

function showAlert() {
  console.log("hello");
}

//get the button ele

const alertButtonEle = document.getElementById("alertButton");

//add event listener

alertButtonEle.addEventListener("click", showAlert);

//named func for removing the event

function removeAlert() {
  alertButtonEle.removeEventListener("click", showAlert);
}

document.getElementById("removeButton").addEventListener("click", removeAlert);
