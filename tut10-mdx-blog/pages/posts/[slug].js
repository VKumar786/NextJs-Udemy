import React from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

const Post = (props) => {
  const { post } = props;
  return <PostContent {...post} />;
};

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export default Post;
