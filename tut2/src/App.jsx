import React, { useEffect, useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/posts");
      const data = await res.json();
      setPosts(data.posts);
      await setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <MainHeader onCreatePost={() => setModalIsVisible(true)} /> */}
      <PostList
        isVisible={modalIsVisible}
        setIsVisible={setModalIsVisible}
        posts={posts}
        setPosts={setPosts}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
