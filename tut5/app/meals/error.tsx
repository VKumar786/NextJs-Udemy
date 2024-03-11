//@ts-nocheck

"use client";

import React from "react";

const Error = ({ error }) => {
  return (
    <main className="not-found">
      <h1>An Error Occurred!</h1>
      <p>Please Try Again Later</p>
      {/* <p>{JSON.stringify(error)}</p> */}
    </main>
  );
};

export default Error;
