import React from "react";
import styles from "../../styles/posts-grid.module.css";
import PostItem from "./post-item";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </ul>
  );
};

export default PostGrid;
