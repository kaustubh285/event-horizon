"use client";
import { Category, Event, Location } from "@/typings";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMap,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Select } from "@chakra-ui/react";
import { handleFetch } from "@/utils/FetchHelper";
import FlyToMarker from "./FlyToMarker";
import Sidebar from "./Sidebar";
import { getCategoryIcon } from "@/utils/DefaultHelper";

const Container = () => {
  const defaultPosition: Location = [11.505, 10.09];
  const [allCategories, setAllCategories] = useState<Category[] | undefined>();
  const [allEvents, setAllEvents] = useState<Event[] | undefined>();

  const [selectedEvent, setSelectedEvent] = useState<Event | null>();

  const icon: Icon = new Icon({
    iconUrl: "marker-icons/red-marker.svg",
    iconSize: [55, 55],
    iconAnchor: [30, 41],
  });

  useEffect(() => {
    handleFetch(setAllCategories, setAllEvents);
  }, []);

  const selectEvent = (event: Event) => {
    setSelectedEvent(event);
  };
  return (
    <div className=' bg-secondary content'>
      <div className=' h-full w-full flex'>
        <div className=' flex-1 flex flex-col p-4'>
          <div className=' h-12 flex'>
            <div className=' w-48'>
              <Select placeholder='Select option'>
                <option value={"all"}>All</option>
                {allCategories?.length &&
                  allCategories.map((cat: Category) => (
                    <option value={cat.title.toLowerCase()} key={cat.id}>
                      {cat.title}
                    </option>
                  ))}
              </Select>
            </div>
          </div>
          {
            <MapContainer
              center={defaultPosition}
              zoom={2}
              minZoom={2}
              className='map-container '>
              <GeoJSON
                attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
              />
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

              {allEvents?.map((eve: Event) => {
                // const position = [...eve.geometries[0]?.coordinates].reverse();

                return (
                  <Marker
                    key={eve.id}
                    position={eve.geometries[0]?.coordinates || defaultPosition}
                    icon={getCategoryIcon(eve.categories[0].title)}
                    eventHandlers={{
                      click: () => selectEvent(eve),
                    }}></Marker>
                );
              })}

              {selectedEvent && (
                <>
                  <Popup
                    position={[
                      selectedEvent?.geometries[0].coordinates[0] + 0.002,
                      selectedEvent?.geometries[0].coordinates[1],
                    ]}>
                    {/* {selectedEvent.title} */}
                    {selectedEvent?.description}
                  </Popup>
                  <FlyToMarker
                    position={selectedEvent?.geometries[0].coordinates}
                    zoomLevel={15}
                  />
                </>
              )}
              {/* <Popup>{eve.title}</Popup> */}
            </MapContainer>
          }
        </div>
        <Sidebar allEvents={allEvents} />
      </div>
    </div>
  );
};

export default Container;
