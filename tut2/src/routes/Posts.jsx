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
