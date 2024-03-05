import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostList = ({ isVisible, setIsVisible, posts, setPosts, isLoading }) => {
  const [data, setData] = useState({ author: "", content: "" });

  let modalContent = (
    <Modal setIsVisible={setIsVisible}>
      <NewPost
        data={data}
        setData={setData}
        onCancel={() => {
          setIsVisible(false);
        }}
        setPosts={setPosts}
      />
    </Modal>
  );

  return (
    <>
      {isVisible && modalContent}
      <div className={styles.posts}>
        {posts?.map((post) => {
          return (
            <Post
              key={post.author}
              author={post.author}
              content={post.content}
            />
          );
        })}
        {isLoading && (
          <div
            style={{
              textAlign: "center",
              color: "white",
              gridColumn: "span 3",
            }}
          >
            <h2>Loading...</h2>
          </div>
        )}
        {posts.length === 0 && !isLoading && (
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
        )}
      </div>
    </>
  );
};

export default PostList;
