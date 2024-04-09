//@ts-nocheck

import Link from "next/link";
import React from "react";

export const getFeedback = async () =>
  await (await fetch("http://localhost:3001/feedbacks")).json();

const GetFeedbacks = async () => {
  const feedbacks = await getFeedback();

  return (
    <div>
      {feedbacks.map((feedback) => (
        <Link key={feedback.id} href={`/contact/${feedback.id}`}>
          <h3>{feedback.email}</h3>
          <p>{feedback.feedback}</p>
        </Link>
      ))}
    </div>
  );
};

export default GetFeedbacks;
