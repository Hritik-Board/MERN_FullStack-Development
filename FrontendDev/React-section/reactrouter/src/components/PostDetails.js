import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/data";

const PostDetails = () => {
  const postId = useParams().postId;
  const post = posts.find((post) => post.id === parseInt(postId));

  return (
    <div>
      <h1>post details : {postId}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
