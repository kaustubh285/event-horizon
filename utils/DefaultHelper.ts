import { Icon } from "leaflet";

type KnownCategoryNames =
  | "Drought"
  | "Dust and Haze"
  | "Earthquakes"
  | "Floods"
  | "Landslides"
  | "Manmade"
  | "Sea and Lake Ice"
  | "Severe Storms"
  | "Snow"
  | "Temperature Extremes"
  | "Volcanoes"
  | "Water Color"
  | "Wildfires";
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
  const icon: Icon = new Icon({
    iconUrl:
      `marker-icons/${categoryIconMapper[category]}` ||
      "marker-icons/red-marker.svg",
    iconSize: [20, 23],
    iconAnchor: [30, 41],
  });

  return icon;
}

export function findCategoryImage(category: KnownCategoryNames) {
  return "/marker-icons/" + categoryIconMapper[category];
}
