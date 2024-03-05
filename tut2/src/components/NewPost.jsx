import React from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ data, setData }) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          name="body"
          required
          rows={3}
          value={data.body}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                body: e.target.value,
              };
            })
          }
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={data.name}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
        />
      </p>
    </form>
  );
};

export default NewPost;
