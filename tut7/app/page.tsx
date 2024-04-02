//@ts-nocheck

"use client";

import React from "react";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/event-detail/event-search";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const onSearch = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList data={featuredEvents} />
    </div>
  );
};

export default Home;
