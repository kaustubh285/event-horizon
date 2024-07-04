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
        <div className=' flex flex-col justify-start items-start space-y-2 bg-white p-3 rounded-lg text-slate-600'>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/flood'
            title='flood icons'>
            Flood icons created by smalllikeart - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/landslide'
            title='landslide icons'>
            Landslide icons created by Freepik - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/storm'
            title='storm icons'>
            Storm icons created by Freepik - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/snow'
            title='snow icons'>
            Snow icons created by Muhammad_Usman - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/extreme-weather'
            title='extreme weather icons'>
            Extreme weather icons created by Infinite Dendrogram - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/volcano'
            title='volcano icons'>
            Volcano icons created by Muhammad_Usman - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/sea'
            title='sea icons'>
            Sea icons created by Yobany_MTOM - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/wildfire'
            title='wildfire icons'>
            Wildfire icons created by BZZRINCANTATION - Flaticon
          </Link>
          <Link
            target='_blank'
            className=' hover:underline'
            href='https://www.flaticon.com/free-icons/environment'
            title='environment icons'>
            Environment icons created by Pixelmeetup - Flaticon
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default page;
