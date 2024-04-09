//@ts-nocheck

import React from "react";
import { getFeedback } from "../getFeedback";

const particularFeedback = async (props) => {
  const id = props.params.slug[0];
  console.log(id);
  const data = await getFeedback();
  console.log(data);
  const feedback = data.filter((feedback) => feedback.id === id);
  console.log(feedback);
  return <div>{JSON.stringify(feedback)}</div>;
};
export default particularFeedback;
