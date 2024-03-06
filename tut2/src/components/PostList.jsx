import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";

const PostList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([
    { author: "vishal", content: "learning nextjs" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/posts");
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.posts}>
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              color: "white",
              gridColumn: "span 3",
            }}
          >
            <h2>Loading...</h2>
          </div>
        ) : posts.length === 0 ? (
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
            return (
              <Post
                key={post.author}
                author={post.author}
                content={post.content}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default PostList;
