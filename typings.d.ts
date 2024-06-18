export interface SubCategory {
  id: number;
  title: string;
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
