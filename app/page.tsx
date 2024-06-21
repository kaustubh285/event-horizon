"use client";

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/components/Container"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-col'>
      <Navbar />
      <Container />
    </main>
  );
}
