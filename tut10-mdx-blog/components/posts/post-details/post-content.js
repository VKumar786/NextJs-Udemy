import React from "react";
import styles from "../../../styles/post-content.module.css";
import PostHeader from "./post-header";
import Markdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "admin.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const { slug, title, image, date, content } = DUMMY_POST;
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={`/posts/${slug}/${image}`} />
      <Markdown>{content}</Markdown>
    </article>
  );
};

export default PostContent;
