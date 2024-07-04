import { Apod, Category, Event } from "@/typings";
import { saveLocalData } from "./DefaultHelper";

export async function handleFetch(
  setAllCategories: React.Dispatch<
    React.SetStateAction<Category[] | undefined>
  >,
  setAllEvents: React.Dispatch<React.SetStateAction<Event[] | undefined>>,
  days: number,
  setAllEventsBkp: React.Dispatch<React.SetStateAction<Event[] | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsLoading(true);
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
  saveLocalData(data, days);
  setIsLoading(false);
}

export async function handleApodFetch(
  setApodData: React.Dispatch<React.SetStateAction<Apod>>
) {
  const getPictureApi = await fetch(`http://localhost:3000/api/apod/`);
  setApodData(await getPictureApi.json());
  // setApodData({
  //   copyright: "Long Xin",
  //   date: "2024-06-22",
  //   explanation:
  //     'Stars are forming in Lynds Dark Nebula (LDN) 1251. About 1,000 light-years away and drifting above the plane of our Milky Way galaxy, LDN 1251 is also less appetizingly known as "The Rotten Fish Nebula." The dusty molecular cloud is part of a complex of dark nebulae mapped toward the Cepheus flare region. Across the spectrum, astronomical explorations of the obscuring interstellar clouds reveal energetic shocks and outflows associated with newborn stars, including the telltale reddish glow from scattered Herbig-Haro objects hiding in the image. Distant background galaxies also lurk in the scene, almost buried behind the dusty expanse. This alluring view spans over four full moons on the sky, or 35 light-years at the estimated distance of LDN 1251.',
  //   hdurl: "https://apod.nasa.gov/apod/image/2406/LDN1251_2048.png",
  //   media_type: "image",
  //   service_version: "v1",
  //   title: "Lynds Dark Nebula 1251",
  //   url: "https://apod.nasa.gov/apod/image/2406/LDN1251_1098c.png",
  // });
}
