import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import FlyToMarker from "./FlyToMarker";
import { Event, Location } from "@/typings";
import { getCategoryIcon } from "@/utils/DefaultHelper";

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
              selectedEvent?.geometries[0].coordinates[0] + 0.002,
              selectedEvent?.geometries[0].coordinates[1],
            ]}>
            <p className=' font-semibold'>{selectedEvent.title}</p>
            <p className=' text-xs font-light'>{selectedEvent?.description}</p>
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
