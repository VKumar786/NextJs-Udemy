import React from "react";
import Modal from "../components/Modal";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import styles from "./NewPost.module.css";

const PostDetails = () => {
  const post = useLoaderData()
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="author">Text</label>
          <textarea id="author" name="author" required rows={3} defaultValue={post?.author}/>
        </p>
        <p>
          <label htmlFor="content">Your name</label>
          <input type="text" id="content" name="content" required defaultValue={post?.content}/>
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

export default PostDetails;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const postData = Object.fromEntries(data);

  const res = await fetch("http://localhost:8080/posts/" + params.id, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("..");
};

export const loader = async ({ params }) => {
  const res = await fetch("http://localhost:8080/posts/" + params.id);
  const data = await res.json();
  return data.post;
};
