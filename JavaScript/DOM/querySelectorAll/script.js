const allcards = document.querySelectorAll(".product-card");

console.log(allcards);

const productName = document.querySelectorAll(".product-name");

console.log(productName);

productName.forEach((el) => {
  console.log(el);
});

const arr = Array.from(productName);

console.log(arr);
