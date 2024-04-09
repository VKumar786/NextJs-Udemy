//@ts-nocheck

"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendFeedback } from "../lib/actions";
import GetFeedbacks from "./getFeedback";

const Contact = () => {
  const [state, formAction] = useFormState(sendFeedback, { message: null });
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email" required name="email" />
      </div>
      <div>
        <label htmlFor="feedback">Feedback</label>
        <textarea
          placeholder="Enter Feedback"
          required
          rows={5}
          name="feedback"
        />
      </div>
      {state?.message && <p>{state?.message}</p>}
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Send"}
      </button>
      <GetFeedbacks />  
    </form>
  );
};

export default Contact;
