import React from "react";
import { Category, Event, Location } from "@/typings";
import EventSidebarAccordion from "./EventSidebarAccordion";
import { Accordion } from "@chakra-ui/react";

type Props = {
  allEvents: Event[] | undefined;
  selectEvent: (event: Event) => void;
};

const Sidebar = ({ allEvents, selectEvent }: Props) => {
  return (
    <div
      className=' overflow-scroll h-full w-1/4 text-tertiary'
      style={{ maxHeight: "590px" }}>
      {/* <p className=' text-xl font-semibold text-center underline'>
        List of naturally occuring events happening across the globe
      </p> */}

      <Accordion allowToggle className=' space-y-2'>
        {allEvents?.map((eve: Event) => (
          <EventSidebarAccordion
            event={eve}
            key={eve.id}
            selectEvent={selectEvent}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
