import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      <div className={styles.posts}>
        {posts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "white",
              gridColumn: "span 3",
            }}
          >
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        ) : (
          posts?.map((post) => {
            return <Post key={post.author} {...post} />;
          })
        )}
      </div>
    </>
  );
};

export default PostList;
