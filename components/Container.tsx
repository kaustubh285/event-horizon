"use client";
import { Category, Event, KnownCategoryNames, Location } from "@/typings";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Select } from "@chakra-ui/react";
import { handleFetch } from "@/utils/FetchHelper";
import FlyToMarker from "./FlyToMarker";

const Container = () => {
  const defaultPosition: Location = [51.505, -0.09];
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
      <div className=' h-full w-full flex flex-col'>
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
        <MapContainer
          center={defaultPosition}
          zoom={1}
          className='map-container '>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

          <Marker position={defaultPosition} icon={icon}>
            <Popup>Hello there</Popup>
          </Marker>

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
                {selectedEvent.title}
              </Popup>
              <FlyToMarker
                position={selectedEvent?.geometries[0].coordinates}
                zoomLevel={15}
              />
            </>
          )}
          {/* <Popup>{eve.title}</Popup> */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Container;

let KnownCategoryNames = [
  "Drought",
  "Dust and Haze",
  "Earthquakes",
  "Floods",
  "Landslides",
  "Manmade",
  "Sea and Lake Ice",
  "Severe Storms",
  "Snow",
  "Temperature",
  "Volcanoes",
  "Water Color",
  "Wildfires",
];

function getCategoryIcon(category: KnownCategoryNames) {
  const categoryIconMapper: Record<KnownCategoryNames, string> = {
    Drought: "drought-icon.png",
    "Dust and Haze": "dust-and-haze-icon.jpg",
    Earthquakes: "earthquake-icon.png",
    Floods: "flood-icon.png",
    Landslides: "landslide-icon.png",
    Manmade: "man-made-icon.png",
    "Sea and Lake Ice": "sea-and-lake-ice-icon.png",
    "Severe Storms": "severe-storm-icon.png",
    Snow: "snow-icon.png",
    "Temperature Extremes": "extreme-temperature-icon.png",
    Volcanoes: "volcano-icon.png",
    "Water Color": "water-color-icon.png",
    Wildfires: "wildfire-icon.png",
  };

  const icon: Icon = new Icon({
    iconUrl:
      `marker-icons/${categoryIconMapper[category]}` ||
      "marker-icons/red-marker.svg",
    iconSize: [40, 35],
    iconAnchor: [30, 41],
  });

  return icon;
}
