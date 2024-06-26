import React from "react";
import styles from "../../styles/featured-posts.module.css";
import PostGrid from "../posts/post-grid";

const FeaturedPosts = (props) => {
  const { posts } = props;
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>

      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
