import React from "react";
import posts from "../utils/data";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link to={`/posts/&{post.id}`}>
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
