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
  const [allEventsBkp, setAllEventsBkp] = useState<Event[] | []>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>();

  const getData = (days: number) => {
    handleFetch(setAllCategories, setAllEvents, days, setAllEventsBkp);
  };

  // useEffect(()=>getData(15), []);

  useEffect(() => {
    if (searchQuery === "") {
      setAllEvents(allEventsBkp);
      return;
    }
    const searchedEvents: Event[] =
      allEventsBkp?.filter(
        (eve: Event) =>
          eve.description.toLowerCase().includes(searchQuery) ||
          eve.title.toLowerCase().includes(searchQuery) ||
          eve.sources.some((source) =>
            source.url.toLowerCase().includes(searchQuery)
          )
      ) || [];

    setAllEvents(searchedEvents);
  }, [searchQuery, allEventsBkp]);
  const selectEvent = (event: Event) => {
    setSelectedEvent(event);
  };
  return (
    <div className=' bg-secondary flex-1 h-full w-full p-4 rounded-t-xl flex flex-col space-y-2 '>
      <Controls
        allCategories={allCategories}
        getData={getData}
        allEvents={allEvents}
        setSearchQuery={setSearchQuery}
      />
      <div className=' h-full flex flex-col space-x-4 md:flex-row  items-stretch justify-around'>
        <MapArea
          defaultPosition={defaultPosition}
          allEvents={allEvents}
          selectEvent={selectEvent}
          selectedEvent={selectedEvent}
        />
        <Sidebar allEvents={allEvents} selectEvent={selectEvent} />
      </div>
    </div>
  );
};

export default Container;
