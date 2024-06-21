import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <main className='w-screen h-screen flex flex-col'>
      <Navbar />
      <Wrapper>APOD page</Wrapper>
    </main>
  );
};

export default page;
