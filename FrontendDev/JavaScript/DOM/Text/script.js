//Using the text content to update the blog title

// const blogtitle = document.getElementById("title");

// console.log((blogtitle.textContent = "New blog title"));

// //change the background color

// blogtitle.style.color = "green";

//InnnerHTML

const blogtitle = document.getElementById("paragraph");

blogtitle.innerHTML = "<h1>New blog post</h1>";

blogtitle.style.color = "green";
