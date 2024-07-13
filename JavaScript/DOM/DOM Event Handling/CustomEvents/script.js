//accessing theusername input and submit button

const usernameEle = document.getElementById("username");

const submitButtonEle = document.getElementById("submitButton");

// crete a custom

const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

//attach an event listener

document.addEventListener("usernameSubmitted", function (event) {
  console.log(`username is ${event.detail.text} has been submitted`);
});

submitButtonEle.addEventListener("click", function () {
  usernameSubmitted.detail.text = usernameEle.value;

  document.dispatchEvent(usernameSubmitted);
});
