import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import CreatePost from "../components/CreatePost";
import Home from "../pages/Home";
import ListPosts from "../components/ListPosts";

const Index = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/create-post">Create Post</Link> <br />
        <Link to="/list-posts">List Posts</Link> <br />
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/list-posts" element={<ListPosts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
