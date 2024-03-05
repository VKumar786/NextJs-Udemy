import React from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ data, setData, onCancel, setPosts }) => {
  const handleSubmit = async (e) => {
    //
    e.preventDefault();

    const res = await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((prev) => [...prev, data]);

    onCancel();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="author">Text</label>
        <textarea
          id="author"
          name="author"
          required
          rows={3}
          value={data.body}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                author: e.target.value,
              };
            })
          }
        />
      </p>
      <p>
        <label htmlFor="content">Your name</label>
        <input
          type="text"
          id="content"
          name="content"
          required
          value={data.name}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                content: e.target.value,
              };
            })
          }
        />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
