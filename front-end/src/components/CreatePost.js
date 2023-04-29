import React, { useState } from "react";
import Post from "../services/postServices";
// var FormData = require("form-data");
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
   const handleImageChange = (event) => {
    console.log(event.target.files);
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("image", image);
    
    // console.log(newUser);
      // for (const [key, value] of formData) {
      //   console.log(key, value);
      // }

    await Post.createPost(formData);
  };

  return (
    <div>
      <h2>Create Post</h2>
    
       {/* photo preview and get photo  */}
      {image && (
        <div>
          <img
            className="post-img"
            src={URL.createObjectURL(image)}
            alt=" post"
          />
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePost;
