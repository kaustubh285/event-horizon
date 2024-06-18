import { Event } from "@/typings";
import { findCategoryImage } from "@/utils/DefaultHelper";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

import React from "react";

type Props = {
  event: Event;
};
const EventSidebarAccordion = ({ event }: Props) => {
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
              <p>{event.title}</p>
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <p className=' text-lg'>{event.description}</p>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default EventSidebarAccordion;
