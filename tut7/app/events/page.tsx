import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";
import React from "react";

const Events = () => {
  const events = getAllEvents();

  return (
    <>
      <EventList data={events} />
    </>
  );
};

export default Events;
