import React from "react";
import styles from "../../styles/post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props;
  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image src={`/posts/${slug}/${image}`} alt="" width={300} height={200} layout="responsive"/>
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
