"use client";
import { Category, Event } from "@/typings";
import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Props = {
  allCategories: Category[] | undefined;
  getData: (arg0: number) => void;
  allEventsBkp: Event[] | undefined;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Controls = ({
  allCategories,
  getData,
  allEventsBkp,
  setSearchQuery,
  setSelectedFilter,
}: Props) => {
  // Get today's date and a date one week ago
  let today = new Date();
  let lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const [categories, setCategories] = useState<Array<string>>([]);

  useEffect(() => {
    let allCats: string[] = [];
    allEventsBkp?.forEach((eve: Event) => {
      if (!allCats.includes(eve.categories[0].title))
        allCats.push(eve.categories[0].title);
    });
    setCategories(allCats);
  }, [allEventsBkp]);

  //   const [fromDate, setFromDate] = useState<string>(formatDate(lastWeek));
  const [toDate, setToDate] = useState<number>(15);

  return (
    <div className=' flex space-x-3 w-full items-baseline text-black '>
      <div className=' flex space-x-3 flex-1 '>
        <div className=' flex items-center space-x-2 bg-white p-3 rounded-lg'>
          <label htmlFor='to_date_input'>To Date:</label>
          <input
            max={50}
            min={1}
            id='to_date_input'
            value={toDate}
            onChange={(e) => {
              setToDate(parseInt(e.target.value));
            }}
            className=' rounded-md border-white border bg-primary px-2 text-white h-10'
            type='number'
          />
        </div>

        <button
          className=' bg-sky-500 px-5 py-1 flex items-center text-tertiary shadow-lg rounded-lg hover:bg-sky-400 active:shadow-none active:bg-sky-500'
          onClick={() => getData(toDate)}>
          GO
        </button>
      </div>

      <div className='flex items-center space-x-2 bg-white p-3 rounded-lg '>
        <label>Search:</label>
        <input
          type='text'
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          className=' rounded-md border-white border bg-primary px-2 text-white h-10'
        />
        <label>Filter:</label>
        <Select
          variant='flushed'
          onChange={(e) => setSelectedFilter(e.target.value)}>
          <option value={"all"}>All</option>
          {/* {allCategories?.length &&
            allCategories.map((cat: Category) => (
              <option value={cat.title.toLowerCase()} key={cat.id}>
                {cat.title}
              </option>
            ))} */}

          {categories?.length &&
            categories.map((cat: string, ind: number) => (
              <option value={cat.toLowerCase()} key={ind}>
                {cat}
              </option>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default Controls;
