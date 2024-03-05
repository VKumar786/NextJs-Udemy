import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [data, setData] = useState({ body: "", name: "" });

  return (
    <>
      <button onClick={() => setModalIsVisible(true)}>toggle</button>
      {modalIsVisible && (
        <Modal setIsVisible={setModalIsVisible}>
          <NewPost data={data} setData={setData} />
        </Modal>
      )}
      <div className={styles.posts}>
        <Post author={data.name} content={data.body} />
        <Post author="vishal" content="React.js is Frontend dev" />
        <Post author="vivek" content="Full Stack Dev" />
      </div>
    </>
  );
};

export default PostList;
