const url = "https://jsonplaceholder.typicode.com/posts";

// //create a new instance of XHR

//Using promise based AXIOS

// const fetchdata = () => {
//   axios
//     .get(url)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// fetchdata();

// Using async await AXIOS

const fetchData2 = async () => {
  try {
    const result = await axios.get(url);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchData2();
