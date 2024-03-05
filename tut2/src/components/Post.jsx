import React from "react";
import styles from "./Post.module.css";

const Post = ({ author, content }) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{content}</p>
    </div>
  );
};

export default Post;
