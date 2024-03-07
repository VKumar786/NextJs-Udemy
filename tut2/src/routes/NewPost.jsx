import React from "react";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="author">Text</label>
          <textarea id="author" name="author" required rows={3} />
        </p>
        <p>
          <label htmlFor="content">Your name</label>
          <input type="text" id="content" name="content" required />
        </p>
        <p className={styles.actions}>
          <Link to={".."} type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({ request }) => {
  const data = await request.formData();
  const postData = Object.fromEntries(data);

  const res = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("..");
};
