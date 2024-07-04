"use client";
import { Category, Event, Location } from "@/typings";
import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";

import { handleFetch } from "@/utils/FetchHelper";

import Sidebar from "./Sidebar";

import MapArea from "./MapArea";
import Controls from "./Controls";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { getLocalData } from "@/utils/DefaultHelper";

const Container = () => {
  const defaultPosition: Location = [11.505, 10.09];
  const [allCategories, setAllCategories] = useState<Category[] | undefined>();
  const [allEvents, setAllEvents] = useState<Event[] | undefined>();
  const [allEventsBkp, setAllEventsBkp] = useState<Event[] | []>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>();
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = (days: number) => {
    let localDataCheck = getLocalData(days);
    if (localDataCheck === false) {
      handleFetch(
        setAllCategories,
        setAllEvents,
        days,
        setAllEventsBkp,
        setIsLoading
      );
    } else {
      setAllEvents(localDataCheck);
      setAllEventsBkp(localDataCheck);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(15);
  }, []);

  useEffect(() => {
    if (selectedFilter === "all") {
      setAllEvents(allEventsBkp);
      return;
    }
    const searchedEvents: Event[] =
      allEventsBkp?.filter((eve: Event) =>
        eve.categories.some((cat) =>
          cat.title.toLowerCase().includes(selectedFilter)
        )
      ) || [];

    setAllEvents(searchedEvents);
  }, [selectedFilter, allEventsBkp]);

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
    <Wrapper className='flex flex-col space-y-2 '>
      <Controls
        allCategories={allCategories}
        getData={getData}
        allEventsBkp={allEventsBkp}
        setSearchQuery={setSearchQuery}
        setSelectedFilter={setSelectedFilter}
      />
      <div className=' h-full flex flex-col space-x-4 md:flex-row  items-stretch justify-around relative'>
        {!isLoading && (
          <>
            <MapArea
              defaultPosition={defaultPosition}
              allEvents={allEvents}
              selectEvent={selectEvent}
              selectedEvent={selectedEvent}
            />
            <Sidebar allEvents={allEvents} selectEvent={selectEvent} />
          </>
        )}
        {isLoading && (
          <>
            {/* <div
              style={{
                zIndex: 999,
              }}
              className=' h-full w-full absolute left-0 top-0 right-0 bottom-0 opacity-100 flex flex-col justify-center items-center rounded-2xl'>
              {" "}
              <Image
                src={"/event-horizon.png"}
                height={200}
                width={200}
                alt=''
                className=' absolute top-20'
              />
            </div> */}
            <div
              style={{
                zIndex: 999,
              }}
              className=' h-full w-full absolute left-0 top-0 right-0 bottom-0  flex flex-col justify-center items-center rounded-2xl'>
              {/* <Image
                src={`https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczU3OHNtbzd6djJjbXRqZWM5aGo1MWZtM2xjNmU3YmFndnM2d2F2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.webp`}
                height={300}
                width={300}
                alt='loading'
                className=' bottom-30 absolute'
                unoptimized
              /> */}

              <Image
                src={"/event-horizon.png"}
                height={200}
                width={200}
                alt=''
                className=' absolute top-20'
              />
              <p className=' text-2xl '>Loading...</p>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Container;
