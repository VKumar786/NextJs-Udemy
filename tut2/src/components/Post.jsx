import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ id, author, content }) => {
  return (
    <Link to={`/${id}`}>
      <div className={styles.post}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{content}</p>
      </div>
    </Link>
  );
};

export default Post;
