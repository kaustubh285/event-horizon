import { Category } from "@/typings";
import { Select } from "@chakra-ui/react";
import React from "react";

type Props = {
  allCategories: Category[] | undefined;
};

const Controls = ({ allCategories }: Props) => {
  return (
    <div className=' flex space-x-3 w-full items-baseline text-black '>
      <div className=' flex space-x-3 flex-1 '>
        <div className=' flex items-center space-x-2 bg-white p-3 rounded-lg'>
          <label htmlFor='from_date_input'>From Date:</label>
          <input
            id='from_date_input'
            className=' rounded-md border-white border bg-primary px-2 text-white h-10'
            type='date'
          />
        </div>

        <div className=' flex items-center space-x-2 bg-white p-3 rounded-lg'>
          <label htmlFor='to_date_input'>To Date:</label>
          <input
            id='to_date_input'
            className=' rounded-md border-white border bg-primary px-2 text-white h-10'
            type='date'
          />
        </div>
        <button className=' bg-sky-500 px-2 py-1 flex items-center text-tertiary shadow-lg rounded-lg hover:bg-sky-400 active:shadow-none active:bg-sky-500'>
          GO
        </button>
      </div>

      <div className='flex items-center space-x-2 bg-white p-3 rounded-lg '>
        <label>Filter:</label>
        <Select placeholder='Filter specific type' variant='flushed'>
          <option value={"all"}>All</option>
          {allCategories?.length &&
            allCategories.map((cat: Category) => (
              <option value={cat.title.toLowerCase()} key={cat.id}>
                {cat.title}
              </option>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default Controls;
