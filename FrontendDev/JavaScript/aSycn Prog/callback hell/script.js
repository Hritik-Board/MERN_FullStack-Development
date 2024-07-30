// //Nested timeout Functions

// const task1 = (callback) => {
//   setTimeout(() => {
//     console.log("Task 1 completed");
//     callback();
//   }, 3000);
// };

// const task2 = (callback) => {
//   setTimeout(() => {
//     console.log("Task 2 completed");
//     callback();
//   }, 2000);
// };

// const task3 = (callback) => {
//   setTimeout(() => {
//     console.log("Task 3 completed");
//     callback();
//   }, 1000);
// };

// //start the first task

// task1(function () {
//   //once the first one is completeds , start second one
//   task2(function () {
//     //once the second is compelte, start tird
//     task3(function () {
//       console.log("All the task are completed");
//     });
//   });
// });

//--fetch user data(dummy)

const userdata = {
  id: 1,
  name: "hritik gupta",
};

const userPost = [
  { id: 101, content: "post 1" },
  { id: 102, content: "post 2" },
];

const postComment = {
  101: ["commnet 1", "comment 2"],
  102: ["commnet 2", "comment 4"],
};

//fetch user fdata

const fetchuserdata = (id, callback) => {
  console.log("Fetching user data");
  setTimeout(() => {
    callback(userdata);
  }, 1000);
};

//fetch post

const fetchuserpost = (userid, callback) => {
  console.log("Fetching user post");
  setTimeout(() => {
    callback(userPost);
  }, 1000);
};

//fetch post

const fetchusercomment = (postid, callback) => {
  console.log("Fetching user comment");
  setTimeout(() => {
    callback(postComment[postid || []]);
  }, 1000);
};

//Intiate the process

fetchuserdata(1, function (userdata) {
  console.log("User data", userdata);
  fetchuserpost(userdata.id, function (post) {
    console.log("User post", userPost);
    userPost.forEach(function (post) {
      console.log("Post", post);
      fetchusercomment(post.id, function (comments) {
        console.log("Comments", comments);
      });
    });
  });
});
