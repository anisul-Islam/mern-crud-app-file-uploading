import React from "react";
import Post from "../services/postServices";

const SinglePost = ({ post, onHandleDeletePost }) => {
  const handleDelete = (id) => {
    onHandleDeletePost(id);
  };
  return (
    <div style={{ backgroundColor: "pink", margin: "2rem" }}>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <img
        src={"http://127.0.0.1:3001/api/v1/posts/images/" + post.image}
        alt={post.title}
        height="200"
        width="200"
      />
      <div>
        <button
          onClick={() => {
            handleDelete(post._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
