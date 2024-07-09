document.addEventListener("DOMContentLoaded", () => {
  //Select elements

  const counterValue = document.getElementById("counter-value");

  const increaseBtn = document.getElementById("increase-btn");

  const decreaseBtn = document.getElementById("decrease-btn");

  const resetBtn = document.getElementById("reset-btn");

  //Global value

  let counter = 0;

  //add event listeners

  increaseBtn.addEventListener("click", () => {
    counter++;
    //update counter value

    updateCounter();
  });

  decreaseBtn.addEventListener("click", () => {
    counter--;
    //update counter value

    updateCounter();
  });

  resetBtn.addEventListener("click", () => {
    counter = 0;
    //update counter value

    updateCounter();
  });

  function updateCounter() {
    counterValue.textContent = counter;
  }
});

//update counter function
