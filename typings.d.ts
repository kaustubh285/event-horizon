export type KnownCategoryNames =
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

export interface SubCategory {
  id: number;
  title: KnownCategoryNames;
}

export interface Category extends SubCategory {
  link: string;
  description: string;
  layers: string;
}
export type Location = [number, number];

export type EventApi = {
  title: string;
  description: string;
  link: string;
  events: Event[];
};

export type Event = {
  id: string;
  title: string;
  description: string;
  link: string;
  categories: SubCategory[];
  sources: Source[];
  geometries: Geometry[];
};

export type Source = {
  id: string;
  url: string;
};

export type Geometry = {
  date: string;
  type: string;
  coordinates: Location;
};

export type Apod = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
