import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getFeaturedPosts } from "../../lib/posts-utils";

const AllPostsPage = (props) => {
  const { posts } = props;
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default AllPostsPage;
