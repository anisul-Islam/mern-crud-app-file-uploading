import React, { useEffect, useState } from "react";
import Post from "../services/postServices";
import SinglePost from "./SinglePost";

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const result = await Post.getPosts();
    setPosts(result.data.data);
    console.log(posts);
  };

  const handleDeletePost = async (id) => {
    const result = await Post.deletePost(id);
    if (result.data.success === true) {
      console.log("product is deleted");
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length > 1 &&
        posts.map((post) => (
          <SinglePost
            post={post}
            key={post._id}
            onHandleDeletePost={handleDeletePost}
          />
        ))}
    </div>
  );
};

export default ListPosts;
