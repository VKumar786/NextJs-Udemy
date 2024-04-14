"use client";

import React from "react";
import NewMeetingForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEW MEETUP",
  description: "---NEW MEETUP---",
};

const NewMeeting = () => {
  const router = useRouter();
  const AddMeetingHandler = async (data: any) => {
    const res = await (
      await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    console.log(data);
    router.push("/");
  };

  return (
    <div>
      <NewMeetingForm onAddMeetup={AddMeetingHandler} />
    </div>
  );
};

export default NewMeeting;
