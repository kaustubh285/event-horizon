"use client";
import { Category, Event } from "@/typings";
import { Select } from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getData(toDate);
  };

  //   const [fromDate, setFromDate] = useState<string>(formatDate(lastWeek));
  const [toDate, setToDate] = useState<number>(15);

  return (
    <div className=' flex space-x-3 w-full items-baseline text-black '>
      <form className=' flex space-x-3 flex-1 ' onSubmit={handleSubmit}>
        <div className=' flex items-center space-x-2 bg-white p-2 rounded-lg'>
          <label htmlFor='to_date_input' className=' text-sm'>
            Last number of days:
          </label>
          <input
            max={50}
            min={1}
            id='to_date_input'
            value={toDate}
            onChange={(e) => {
              setToDate(parseInt(e.target.value));
            }}
            className=' rounded-md border-white border bg-primary px-2 text-white h-10 text-sm'
            type='number'
          />
        </div>

        <button
          className=' bg-sky-500 px-5 py-0 flex items-center text-tertiary shadow-lg rounded-xl hover:bg-sky-400 active:shadow-none active:bg-sky-500 text-sm'
          type='submit'>
          GO
        </button>
      </form>

      <div className='flex items-center space-x-2 bg-white p-2 rounded-lg '>
        <label className=' text-sm'>Search:</label>
        <input
          type='text'
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          className=' rounded-md border-white border bg-primary px-2 text-white h-10 text-sm'
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
