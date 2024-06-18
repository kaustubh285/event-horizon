import { Category, Event } from "@/typings";

export async function handleFetch(
  setAllCategories: React.Dispatch<
    React.SetStateAction<Category[] | undefined>
  >,
  setAllEvents: React.Dispatch<React.SetStateAction<Event[] | undefined>>
) {
  //   Fetch types of categories for dropdown menu
  const getCategories = await fetch(`http://localhost:3000/api/categories/`);
  setAllCategories(await getCategories.json());

  const getEvents = await fetch(`http://localhost:3000/api/events/`);
  setAllEvents(await getEvents.json());
}
