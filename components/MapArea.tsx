import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import FlyToMarker from "./FlyToMarker";
import { Event, Location } from "@/typings";
import { convertTZ, getCategoryIcon } from "@/utils/DefaultHelper";
import Link from "next/link";

type Props = {
  defaultPosition: Location;
  allEvents: Event[] | undefined;
  selectEvent: (event: Event) => void;
  selectedEvent: Event | null | undefined;
};

const MapArea = ({
  defaultPosition,
  allEvents,
  selectEvent,
  selectedEvent,
}: Props) => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <MapContainer
      center={defaultPosition}
      zoom={2}
      minZoom={2}
      className='map-container '>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
      />

      {allEvents?.map((eve: Event) => {
        // const position = [...eve.geometries[0]?.coordinates].reverse();

        return (
          <Marker
            key={eve.id}
            riseOnHover
            position={
              [
                eve?.geometries[0].coordinates[0],
                eve?.geometries[0].coordinates[1] - 0.002,
              ] || defaultPosition
            }
            icon={getCategoryIcon(eve.categories[0].title)}
            eventHandlers={{
              click: () => selectEvent(eve),
            }}>
            <Tooltip direction='bottom' offset={[-20, 10]} opacity={0.7}>
              {eve.title}
            </Tooltip>
          </Marker>
        );
      })}

      {selectedEvent && (
        <>
          <Popup
            position={[
              selectedEvent?.geometries[0].coordinates[0] + 0.001,
              selectedEvent?.geometries[0].coordinates[1],
            ]}>
            <div className=' flex flex-col justify-around space-y-3'>
              <p className=' font-semibold text-xl'>{selectedEvent.title}</p>
              <p className=' text-sm'>
                {selectedEvent.description || (
                  <span className=' font-extralight'>
                    Detailed information unavailable
                  </span>
                )}
              </p>
              <p className=' text-sm'>
                Occured at :
                {convertTZ(
                  selectedEvent.geometries[0].date,
                  tz
                ).toLocaleString()}
              </p>
              <p className='text-xs  text-slate-700 text-wrap w-full'>
                Source:
                <span>
                  {"  "}
                  {selectedEvent.sources[0].id}
                </span>
              </p>

              <p className=' text-xs font-light text-slate-700 text-wrap w-full'>
                For more information:{" "}
                <Link
                  href={selectedEvent.sources[0].url}
                  className='font-normal hover:underline text-wrap w-full'>
                  {selectedEvent.sources[0].url}
                </Link>
              </p>
            </div>
          </Popup>
          <FlyToMarker
            position={selectedEvent?.geometries[0].coordinates}
            zoomLevel={15}
          />
        </>
      )}
    </MapContainer>
  );
};

export default MapArea;
