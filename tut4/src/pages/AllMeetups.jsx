import React from "react";
import { faker } from "@faker-js/faker";
import MeetupList from "../components/meetups/MeetupList";

const DATA = [0, 0, 0, 0, 0, 0].map((item) => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.text(),
    image: "https://picsum.photos/seed/picsum/200/300",
    address: faker.lorem.text(),
    description: faker.lorem.paragraph(),
  };
});

const AllMeetups = () => {
  return (
    <div>
      <h1>All Meetup</h1>
      <MeetupList meetups={DATA} />
    </div>
  );
};

export default AllMeetups;
