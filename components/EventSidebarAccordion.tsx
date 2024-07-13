import { Event } from "@/typings";
import { convertTZ, findCategoryImage } from "@/utils/DefaultHelper";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

type Props = {
  event: Event;
  selectEvent: (event: Event) => void;
};
const EventSidebarAccordion = ({ event, selectEvent }: Props) => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <AccordionItem className=' bg-primary rounded-md'>
      <h2>
        <AccordionButton>
          <Box as='div' flex='1' textAlign='left'>
            <div className=' flex items-start justify-start space-x-3'>
              <Image
                height={20}
                width={20}
                src={findCategoryImage(event.categories[0].title)}
                alt={event.title}
              />
              <p className=' text-sm'>{event.title}</p>
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={4}
        className=' flex flex-col justify-start items-start space-y-4 text-wrap'>
        <p className=' text-sm'>
          {event.description || (
            <span className=' font-extralight'>No further information</span>
          )}
        </p>
        <p className=' text-sm'>
          Occured at :{convertTZ(event.geometries[0].date, tz).toLocaleString()}
        </p>

        <p className=' text-xs font-light text-tertiary text-wrap w-full'>
          For more information:{" "}
          <Link
            target='_blank'
            href={event.sources[0].url}
            className=' hover:text-blue-300 hover:underline text-wrap w-full flex space-x-2'>
            {event.sources[0].url}{" "}
            <Image
              src='/new-tab.png'
              height={10}
              width={15}
              alt='[]->'
              className=' ml-1'
            />
          </Link>
        </p>

        <button
          className='px-3 py-2 rounded-lg bg-sky-500'
          onClick={() => selectEvent(event)}>
          View
        </button>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default EventSidebarAccordion;
