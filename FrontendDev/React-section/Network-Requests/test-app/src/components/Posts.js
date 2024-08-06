import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  //use State
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //Use Effect
  useEffect(() => {
    //make http reqyuestr
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((post) => {
        console.log(post);
        setIsLoading(false);
        //update the ppost state
        setPosts(post.data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [loading, error]);

  //display loaging
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.message}...</div>;
  return (
    <div>
      <h2>Network request</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
