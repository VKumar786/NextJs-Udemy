//@ts-nocheck
import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import React from "react";

const FilteredEvents = (props) => {
  const filterData = getFilteredEvents({
    year: +props.params.slug[0],
    month: +props.params.slug[1],
  });

  if (!filterData) return <p>Nothing Found</p>;

  return (
    <div>
      <EventList data={filterData} />
    </div>
  );
};

export default FilteredEvents;
