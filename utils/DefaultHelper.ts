import { KnownCategoryNames } from "@/typings";
import { Icon } from "leaflet";

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

export function getCategoryIcon(category: KnownCategoryNames) {
  let iconUrl = "marker-icons/red-marker.svg";
  if (Object.keys(categoryIconMapper).includes(category)) {
    iconUrl = `marker-icons/${categoryIconMapper[category]}`;
  }
  const icon: Icon = new Icon({
    iconUrl: iconUrl,
    iconSize: [20, 23],
    iconAnchor: [20, 23],
  });

  return icon;
}

export function findCategoryImage(category: KnownCategoryNames) {
  return "/marker-icons/" + categoryIconMapper[category];
}

export function convertTZ(date: Date | string, tzString: string) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}
