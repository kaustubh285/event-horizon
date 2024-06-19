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

// <a href="https://www.flaticon.com/free-icons/flood" title="flood icons">Flood icons created by smalllikeart - Flaticon</a>

{
  /* <a href="https://www.flaticon.com/free-icons/landslide" title="landslide icons">Landslide icons created by Freepik - Flaticon</a> */
}

// <a href="https://www.flaticon.com/free-icons/storm" title="storm icons">Storm icons created by Freepik - Flaticon</a>

{
  /* <a href="https://www.flaticon.com/free-icons/snow" title="snow icons">Snow icons created by Muhammad_Usman - Flaticon</a> */
}

// <a href="https://www.flaticon.com/free-icons/extreme-weather" title="extreme weather icons">Extreme weather icons created by Infinite Dendrogram - Flaticon</a>

{
  /* <a href="https://www.flaticon.com/free-icons/volcano" title="volcano icons">Volcano icons created by Muhammad_Usman - Flaticon</a> */
}

{
  /* <a href="https://www.flaticon.com/free-icons/sea" title="sea icons">Sea icons created by Yobany_MTOM - Flaticon</a> */
}

// <a href="https://www.flaticon.com/free-icons/wildfire" title="wildfire icons">Wildfire icons created by BZZRINCANTATION - Flaticon</a>
