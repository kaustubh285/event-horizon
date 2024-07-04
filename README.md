![event-horizon](https://github.com/kaustubh285/event-horizon/blob/main/public/event-horizon.png?raw=true)

# Event Horizon

Event Horizon is a Next.js web application designed to provide up-to-date information on natural events such as wildfires, volcanoes, ice caps melting, thunderstorms etc. The data is sourced from NASA's public API, ensuring accurate and timely updates.

Due to technical limitations, the application is restricted to a maximum of 50 days limit. This would addressed soon.

## Key Features

### Interactive Map

- **Markers for various natural events around the world**: View the locations of natural events globally, with each event represented by a marker.
- **Detailed information**: On clicking the marker, the map zooms in on the location, and provides a brief description (if available) and links to the sources.
- **Clustering markers**: When zoomed out, markers in close proximity are clustered for clarity. Zooming in un-clusters the markers for detailed viewing.
- **Cache**: The application would fetch cached information if attempted to fetch data repeatedly i.e spamming the server.

### Event Search and Filter

- **Search through the fetched events using keywords**: Users can easily find specific events by entering keywords related to the event’s title, description, or sources.
- **Filters to narrow down events based on types**: Filters are available for different types of events such as volcanoes, wildfires, and more, making it easier to find relevant events.

### Astronomy Picture of the Day

- **Displays NASA's Astronomy Picture of the Day**: A dedicated page showcases NASA's daily astronomical images along with descriptions, allowing users to explore and learn about the cosmos.

## Installation and Setup

### Prerequisites

- Node.js
- npm

### Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/kaustubh285/event-horizon.git
   cd event-horizon
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Run the development server**:

   ```sh
   npm run dev
   ```

4. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Configuration

To fetch images and videos, you need to allow specific hostnames in the Next.js configuration:

```js
// next.config.js
module.exports = {
  images: {
    domains: ["apod.nasa.gov", "www.youtube.com"],
  },
};
```

## Conclusion

Event Horizon offers a comprehensive and intuitive interface for exploring natural events and astronomical phenomena. By leveraging NASA's APIs, it ensures users have access to accurate and up-to-date information, making it a valuable tool for anyone interested in tracking natural events around the globe.

## Credits

Event Horizon leverages various external resources and libraries to provide a robust and interactive experience. Here are the key credits:

### Data Sources

- **NASA API**: The application fetches natural events and Astronomy Picture of the Day data from NASA's public API. [NASA API](https://api.nasa.gov/)

### Icons

- **Flaticons**: Marker icons are sourced from Flaticons. [Flaticons](https://www.flaticon.com/)

### Maps

- **Leaflet**: Used for rendering interactive maps. [Leaflet](https://leafletjs.com/)
- **OpenStreetMap**: Provides the map view used in the application. [OpenStreetMap](https://www.openstreetmap.org/)
- **React Leaflet Cluster**: Used for clustering map markers to enhance the user experience when viewing large numbers of events. [React Leaflet Cluster](https://www.npmjs.com/package/react-leaflet-cluster)

These resources have significantly contributed to the development of Event Horizon, enabling the integration of accurate data and interactive map features.
