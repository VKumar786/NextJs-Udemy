import React from "react";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Outlet />
      <PostList />
    </div>
  );
};

export default Posts;

export const loader = async () => {
  const res = await fetch("http://localhost:8080/posts");
  const data = await res.json();
  return data.posts;
};
