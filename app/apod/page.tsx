"use client";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import { Apod } from "@/typings";
import { handleApodFetch } from "@/utils/FetchHelper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function APOD() {
  const defaultApod = {
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  };
  const [apodData, setApodData] = useState<Apod>(defaultApod);
  useEffect(() => {
    handleApodFetch(setApodData);
  }, []);
  return (
    <main className='w-screen h-screen flex flex-col '>
      <Navbar />
      <Wrapper>
        <div className=' w-full flex justify-start '>
          <div className=' p-2 rounded-xl  w-max  max-w-sm text-black bg-white'>
            <div className='flex flex-col justify-center items-center  mx-auto space-y-3 p-5'>
              <div className=''>
                {apodData.media_type === "image" ? (
                  <Image
                    height={300}
                    width={400}
                    className=' h-80 w-80'
                    src={apodData.url}
                    alt={apodData.title}
                  />
                ) : (
                  <iframe
                    width='800'
                    height='600'
                    src={apodData.url}
                    title={apodData.title}
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen></iframe>
                )}
              </div>

              <div className=' bg-white text-wrap mx-auto'>
                <p className=' text-lg text-center'>{apodData.title}</p>
              </div>
            </div>
          </div>

          <div className=' flex-1 p-2 font-medium flex flex-col h-full space-y-4'>
            <p className=' flex-1'>{apodData.explanation}</p>
            <p className=''>Copyright: {apodData.copyright}</p>
            <p className=''>Date: {apodData.copyright}</p>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}
