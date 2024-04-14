import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME",
  description: "---HOME---",
};

const fetchMeetups = async () => {
  return await (await fetch("http://localhost:3001/meetups")).json();
};

const Home = async () => {
  const meetups = await fetchMeetups();
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default Home;
