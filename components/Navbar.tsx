"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=' w-full px-4 py-2 text-white flex justify-start items-baseline space-x-7'>
      <Link
        href={`#`}
        className=' text-3xl font-light hover:underline hover:cursor-pointer'>
        Horizon
      </Link>

      <Link
        href={`#`}
        className=' text-lg font-light hover:cursor-pointer hover:underline'>
        Natural Events
      </Link>

      <Link
        href={`#`}
        className=' text-lg font-light hover:cursor-pointer hover:underline'>
        Astronomy Picture of the Day
      </Link>

      <Link
        href={`#`}
        className=' text-lg font-light hover:cursor-pointer hover:underline'>
        Credits
      </Link>
    </div>
  );
};

export default Navbar;
