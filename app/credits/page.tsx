import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className='w-screen h-screen flex flex-col'>
      <Navbar />
      <Wrapper>
        <p className=' text-2xl pb-5'>Credits</p>
        <div className='flex flex-col justify-start items-start space-y-2 bg-white p-3 rounded-lg text-slate-600'>
          <p className='font-bold text-lg'>Data Sources</p>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://api.nasa.gov/'
            title='NASA API'>
            {
              "NASA API: The application fetches natural events and Astronomy Picture of the Day data from NASA's public API."
            }
          </Link>
          <p className='font-bold text-lg mt-4'>Icons</p>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/flood'
            title='flood icons'>
            Flood icons created by smalllikeart - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/landslide'
            title='landslide icons'>
            Landslide icons created by Freepik - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/storm'
            title='storm icons'>
            Storm icons created by Freepik - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/snow'
            title='snow icons'>
            Snow icons created by Muhammad_Usman - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/extreme-weather'
            title='extreme weather icons'>
            Extreme weather icons created by Infinite Dendrogram - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/volcano'
            title='volcano icons'>
            Volcano icons created by Muhammad_Usman - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/sea'
            title='sea icons'>
            Sea icons created by Yobany_MTOM - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/wildfire'
            title='wildfire icons'>
            Wildfire icons created by BZZRINCANTATION - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/new-tab'
            title='new tab icons'>
            New tab icons created by mavadee - Flaticon
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.flaticon.com/free-icons/environment'
            title='environment icons'>
            Environment icons created by Pixelmeetup - Flaticon
          </Link>
          <p className='font-bold text-lg mt-4'>Maps</p>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://leafletjs.com/'
            title='Leaflet'>
            Leaflet: Used for rendering interactive maps.
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.openstreetmap.org/'
            title='OpenStreetMap'>
            OpenStreetMap: Provides the map view used in the application.
          </Link>
          <Link
            target='_blank'
            className='hover:underline'
            href='https://www.npmjs.com/package/react-leaflet-cluster'
            title='React Leaflet Cluster'>
            React Leaflet Cluster: Used for clustering map markers to enhance
            the user experience when viewing large numbers of events.
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default page;
