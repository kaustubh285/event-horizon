import { Category, Event } from "@/typings";

export async function handleFetch(
  setAllCategories: React.Dispatch<
    React.SetStateAction<Category[] | undefined>
  >,
  setAllEvents: React.Dispatch<React.SetStateAction<Event[] | undefined>>,
  days: number,
  setAllEventsBkp: React.Dispatch<React.SetStateAction<Event[] | undefined>>
) {
  //   Fetch types of categories for dropdown menu
  const getCategories = await fetch(
    `http://localhost:3000/api/categories/?days=${days}`
  );
  setAllCategories(await getCategories.json());

  const getEvents = await fetch(
    `http://localhost:3000/api/events/?days=${days}`
  );
  let data = await getEvents.json();
  setAllEvents(data);
  setAllEventsBkp(data);
}
