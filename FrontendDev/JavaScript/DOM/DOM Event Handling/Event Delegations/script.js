//add a single event listener to the ul

document.getElementById("itemList").addEventListener("click", function (event) {
  console.log(event);

  const clickEle = event.target;

  //check if the clicked element is a list item

  console.log(clickEle.tagName);

  if (clickEle.tagName === "LI") {
    const itemNum = clickEle.getAttribute("data-item");

    console.log(itemNum);
  }
});
