"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ParticularPage = (props: any) => {
  const { params, searchParams } = props;
  const router = useRouter();

  const handleRedirect = () => {
    const id = "19-12-2002";
    const slug = "this-is-something-special"; // Initialize the slug variable with a value
    router.push(`/blog/${id}/${slug}`);
  };

  return (
    <div>
      {JSON.stringify(props)}
      <br />
      {JSON.stringify(params)}
      <br />
      {JSON.stringify(searchParams)}
      <button onClick={handleRedirect}>Go back</button>
    </div>
  );
};

export default ParticularPage;
