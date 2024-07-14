const url = "https://jsonplaceholder.typicode.com/posts";

// //create a new instance of XHR

// const xhr = new XMLHttpRequest();

// //configure the request

// xhr.open("GET", url, true);

// //attach event listener to handle the changes in the reuqets

// xhr.onreadystatechange = function () {
//   //check if the requrst is comeplet (readystate 4)

//   if (xhr.readyState === 4 && xhr.status === 200) {
//     //parse json data
//     console.log(JSON.parse(xhr.responseText));
//   }
//   //handle error
//   if (xhr.readyState === 4 && xhr.status !== 200) {
//     console.log(xhr.statusText);
//   }
// };

// //send the request

// xhr.send();

//Using promise based

const fetchdata = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// fetchdata();

//Using async await

const fetchData2 = async () => {
  try {
    const result = await fetch(url);
    return result.json();
  } catch (error) {
    console.log(error);
  }
};

fetchData2().then((res) => {
  console.log(res);
});
