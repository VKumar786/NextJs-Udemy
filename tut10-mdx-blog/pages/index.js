import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-utils";
import { Head } from "next/document";

const Home = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
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

export default Home;
