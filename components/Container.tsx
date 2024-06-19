"use client";
import { Category, Event, Location } from "@/typings";
import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";

import { handleFetch } from "@/utils/FetchHelper";

import Sidebar from "./Sidebar";

import MapArea from "./MapArea";
import Controls from "./Controls";

const Container = () => {
  const defaultPosition: Location = [11.505, 10.09];
  const [allCategories, setAllCategories] = useState<Category[] | undefined>();
  const [allEvents, setAllEvents] = useState<Event[] | undefined>();

  const [selectedEvent, setSelectedEvent] = useState<Event | null>();

  useEffect(() => {
    handleFetch(setAllCategories, setAllEvents);
  }, []);

  const selectEvent = (event: Event) => {
    setSelectedEvent(event);
  };
  return (
    <div className=' bg-secondary flex-1 h-full w-full p-4'>
      <div className=' h-full w-full flex flex-col space-y-2'>
        <Controls allCategories={allCategories} />
        <div className=' flex-1 flex flex-col space-x-4 md:flex-row'>
          <MapArea
            defaultPosition={defaultPosition}
            allEvents={allEvents}
            selectEvent={selectEvent}
            selectedEvent={selectedEvent}
          />
          <Sidebar allEvents={allEvents} selectEvent={selectEvent} />
        </div>
      </div>
    </div>
  );
};

export default Container;
