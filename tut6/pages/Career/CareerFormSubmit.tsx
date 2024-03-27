"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const CareerFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Resume"}
    </button>
  );
};

export default CareerFormSubmit;
