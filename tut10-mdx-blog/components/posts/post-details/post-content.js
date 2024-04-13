import React from "react";
import styles from "../../../styles/post-content.module.css";
import PostHeader from "./post-header";
import Markdown from "react-markdown";
import Image from "next/image";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting Started with NextJS",
//   image: "admin.jpg",
//   date: "2022-02-10",
//   content: "# This is a first post",
// };

const PostContent = (props) => {
  // const { slug, title, image, date, content } = DUMMY_POST;
  const { slug, title, image, date, content } = props;

  const customComponents = {
    img(image) {
      return (
        <div className={styles.image}>
          <Image
            src={`/posts/${slug}/${image.src}`}
            alt={image.alt}
            width={300}
            height={200}
            style={{margin: "0 auto"}}
          />
        </div>
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={`/posts/${slug}/${image}`} />
      <Markdown components={customComponents}>{content}</Markdown>
    </article>
  );
};

export default PostContent;
