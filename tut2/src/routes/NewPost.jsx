import React, { useState } from "react";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ author: "", content: "" });

  const handleSubmit = async (e) => {
    //
    e.preventDefault();

    if (data.author === "" || data.content === "") return;

    const res = await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // setPosts((prev) => [...prev, data]);

    navigate("..");
  };

  return (
    <Modal>
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
          <Link to={".."} type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
