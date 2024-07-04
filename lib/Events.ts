import { Event, EventApi, Geometry, Location } from "@/typings";

export const fetchCategories = async (days: string) => {
  let data = await fetch(
    `https://eonet.gsfc.nasa.gov/api/v2.1/categories`
  ).then((res) => res.json());
  data = data["categories"];

  return data;
};

export const fetchApod = async () => {
  let data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return data;
};

export const fetchEvents = async (days: string) => {
  let apiData = await fetch(
    `https://eonet.gsfc.nasa.gov/api/v2.1/events?days=${days}&api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  let eventsData: Event[] = apiData["events"].map((eve: Event) => ({
    ...eve,
    geometries: eve.geometries.map((geometry: Geometry) => {
      const reversedCoordinates: Location = [
        geometry.coordinates[1],
        geometry.coordinates[0],
      ];
      return {
        ...geometry,
        coordinates: reversedCoordinates,
      };
    }),
  }));

  return eventsData;
};
