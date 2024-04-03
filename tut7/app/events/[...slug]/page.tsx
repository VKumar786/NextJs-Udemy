//@ts-nocheck
import ResultsTitle from "@/components/event-detail/results-title";
import EventList from "@/components/events/EventList";
import Button from "@/components/ui/button";
import { getFilteredEvents } from "@/dummy-data";
import React from "react";

const FilteredEvents = (props) => {
  const filterData = getFilteredEvents({
    year: +props.params.slug[0],
    month: +props.params.slug[1],
  });

  if (!filterData || !filterData.length) return (
    <div className="flex items-center justify-center flex-col min-h-[500px]">
      <p>No Events Found for the chosen filter!</p>
      <div className="center mt-3">
        <Button href="/events">Show All Events</Button>
      </div>
    </div>
  );

  const date = new Date(props.params.slug[0], props.params.slug[1] - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList data={filterData} />
    </>
  );
};

export default FilteredEvents;
