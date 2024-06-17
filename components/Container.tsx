"use client";
import { Category } from "@/typings";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Select } from "@chakra-ui/react";

export type Location = [number, number];

async function handleFetch(
  setData: React.Dispatch<React.SetStateAction<Category[] | undefined>>
) {
  const getEvents = await fetch(`http://localhost:3000/api/events/`);
  setData(await getEvents.json());
}

const Container = () => {
  const defaultPosition: Location = [51.505, -0.09];
  const [data, setData] = useState<Category[] | undefined>();

  useEffect(() => {
    handleFetch(setData);
  }, []);
  return (
    <div className=' bg-secondary content'>
      <div className=' h-full w-full flex flex-col'>
        <div className=' h-12 flex'>
          <div className=' w-48'>
            <Select placeholder='Select option'>
              <option value={"all"}>All</option>
              {data?.length &&
                data.map((cat: Category) => (
                  <option value={cat.title.toLowerCase()} key={cat.id}>
                    {cat.title}
                  </option>
                ))}
            </Select>
          </div>
        </div>
        <MapContainer
          center={defaultPosition}
          zoom={13}
          className='map-container '>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

          <Marker position={defaultPosition}>
            <Popup>Hello there</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Container;
