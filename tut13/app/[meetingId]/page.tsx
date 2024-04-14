import React from "react";
import Image from "next/image";
import classes from "../../styles/MeetupDetails.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEETUP DETAILS",
  description: "---MEETUP DETAILS---",
};

const fetchMeetup = async (meetingId: any) => {
  const meetups = await (await fetch("http://localhost:3001/meetups")).json();
  return meetups.filter((meetup: any) => meetup.id === meetingId)[0] || {};
};

const ParticularMeeting = async (props: any) => {
  const meetingId = props.params.meetingId;
  const meetup = await fetchMeetup(meetingId);

  const { title, image, address, description } = meetup;
  return (
    <div className={classes.detail}>
      <Image src={image} alt={title} width={1000} height={700} />
      <h2 className=" text-4xl font-bold my-5">{title}</h2>
      <address className=" text-gray-500 mb-3">{address}</address>
      <p>{description}</p>
    </div>
  );
};

export default ParticularMeeting;
