import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { GetStaticProps } from "next";
import React, { Suspense } from "react";

async function Event({ eventId }: { eventId: string }) {
  const event = getEventById(eventId);

  if (!event) return <p>No Event Found!</p>;
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

const ParticularEvents = (props: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Event eventId={props.params.eventId} />
    </Suspense>
  );
};

export default ParticularEvents;
