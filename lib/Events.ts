import { Event, EventApi, Geometry, Location } from "@/typings";

export const fetchCategories = async (days: string) => {
  let data = await fetch(
    `https://eonet.gsfc.nasa.gov/api/v2.1/categories`
  ).then((res) => res.json());
  data = data["categories"];
  // const data = [
  //   {
  //     id: 6,
  //     title: "Drought",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/6",
  //     description:
  //       "Long lasting absence of precipitation affecting agriculture and livestock, and the overall availability of food and water.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/6",
  //   },
  //   {
  //     id: 7,
  //     title: "Dust and Haze",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/7",
  //     description:
  //       "Related to dust storms, air pollution and other non-volcanic aerosols. Volcano-related plumes shall be included with the originating eruption event.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/7",
  //   },
  //   {
  //     id: 16,
  //     title: "Earthquakes",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/16",
  //     description:
  //       "Related to all manner of shaking and displacement. Certain aftermath of earthquakes may also be found under landslides and floods.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/16",
  //   },
  //   {
  //     id: 9,
  //     title: "Floods",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/9",
  //     description:
  //       "Related to aspects of actual flooding--e.g., inundation, water extending beyond river and lake extents.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/9",
  //   },
  //   {
  //     id: 14,
  //     title: "Landslides",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/14",
  //     description:
  //       "Related to landslides and variations thereof: mudslides, avalanche.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/14",
  //   },
  //   {
  //     id: 19,
  //     title: "Manmade",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/19",
  //     description:
  //       "Events that have been human-induced and are extreme in their extent.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/19",
  //   },
  //   {
  //     id: 15,
  //     title: "Sea and Lake Ice",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/15",
  //     description:
  //       "Related to all ice that resides on oceans and lakes, including sea and lake ice (permanent and seasonal) and icebergs.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/15",
  //   },
  //   {
  //     id: 10,
  //     title: "Severe Storms",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/10",
  //     description:
  //       "Related to the atmospheric aspect of storms (hurricanes, cyclones, tornadoes, etc.). Results of storms may be included under floods, landslides, etc.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/10",
  //   },
  //   {
  //     id: 17,
  //     title: "Snow",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/17",
  //     description:
  //       "Related to snow events, particularly extreme/anomalous snowfall in either timing or extent/depth.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/17",
  //   },
  //   {
  //     id: 18,
  //     title: "Temperature Extremes",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/18",
  //     description:
  //       "Related to anomalous land temperatures, either heat or cold.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/18",
  //   },
  //   {
  //     id: 12,
  //     title: "Volcanoes",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/12",
  //     description:
  //       "Related to both the physical effects of an eruption (rock, ash, lava) and the atmospheric (ash and gas plumes).",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/12",
  //   },
  //   {
  //     id: 13,
  //     title: "Water Color",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/13",
  //     description:
  //       "Related to events that alter the appearance of water: phytoplankton, red tide, algae, sediment, whiting, etc.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/13",
  //   },
  //   {
  //     id: 8,
  //     title: "Wildfires",
  //     link: "https://eonet.gsfc.nasa.gov/api/v2.1/categories/8",
  //     description:
  //       "Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade.",
  //     layers: "https://eonet.gsfc.nasa.gov/api/v2.1/layers/8",
  //   },
  // ];
  return data;
};

export const fetchEvents = async (days: string) => {
  // let apiData = await fetch(
  //   `https://eonet.gsfc.nasa.gov/api/v2.1/events?days=${days}&api_key=${process.env.API_KEY}`
  // ).then((res) => res.json());

  const data: EventApi = {
    title: "EONET Events",
    description: "Natural events from EONET.",
    link: "https://eonet.gsfc.nasa.gov/api/v2.1/events",
    events: [
      {
        id: "EONET_6681",
        title: "Wildfire in Brazil 1019839",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6681",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019839",
          },
        ],
        geometries: [
          {
            date: "2024-06-13T19:00:00Z",
            type: "Point",
            coordinates: [-57.283932134982507, -17.671302478650173],
          },
        ],
      },
      {
        id: "EONET_6687",
        title: "Wildfire in Botswana 1019845",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6687",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019845",
          },
        ],
        geometries: [
          {
            date: "2024-06-13T19:00:00Z",
            type: "Point",
            coordinates: [24.834011456500079, -20.022067007217888],
          },
        ],
      },
      {
        id: "EONET_6682",
        title: "Wildfire in Zambia 1019840",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6682",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019840",
          },
        ],
        geometries: [
          {
            date: "2024-06-12T19:00:00Z",
            type: "Point",
            coordinates: [26.468053102960674, -14.774490930290243],
          },
        ],
      },
      {
        id: "EONET_6683",
        title: "Wildfire in Australia 1019841",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6683",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019841",
          },
        ],
        geometries: [
          {
            date: "2024-06-12T19:00:00Z",
            type: "Point",
            coordinates: [137.32809858600069, -16.628472234184954],
          },
        ],
      },
      {
        id: "EONET_6684",
        title: "Wildfire in Australia 1019842",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6684",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019842",
          },
        ],
        geometries: [
          {
            date: "2024-06-12T19:00:00Z",
            type: "Point",
            coordinates: [137.16183433759409, -16.660030796521053],
          },
        ],
      },
      {
        id: "EONET_6688",
        title: "Wildfire in Russian Federation 1019846",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6688",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019846",
          },
        ],
        geometries: [
          {
            date: "2024-06-12T19:00:00Z",
            type: "Point",
            coordinates: [131.4354712009206, 59.165941476718011],
          },
        ],
      },
      {
        id: "EONET_6689",
        title: "Wildfire in Australia 1019847",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6689",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019847",
          },
        ],
        geometries: [
          {
            date: "2024-06-12T19:00:00Z",
            type: "Point",
            coordinates: [132.18898245941429, -13.488430521570111],
          },
        ],
      },
      {
        id: "EONET_6678",
        title: "Wildfire in China 1019836",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6678",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019836",
          },
        ],
        geometries: [
          {
            date: "2024-06-11T19:00:00Z",
            type: "Point",
            coordinates: [112.13231659287177, 36.031661543156666],
          },
        ],
      },
      {
        id: "EONET_6690",
        title: "Wildfire in Russian Federation 1019848",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6690",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019848",
          },
        ],
        geometries: [
          {
            date: "2024-06-11T19:00:00Z",
            type: "Point",
            coordinates: [128.66495544704927, 53.277422757223711],
          },
        ],
      },
      {
        id: "EONET_6691",
        title: "Wildfire in Russian Federation 1019849",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6691",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019849",
          },
        ],
        geometries: [
          {
            date: "2024-06-11T19:00:00Z",
            type: "Point",
            coordinates: [136.2825117087701, 62.769134900333306],
          },
        ],
      },
      {
        id: "EONET_6692",
        title: "Wildfire in Brazil 1019850",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6692",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019850",
          },
        ],
        geometries: [
          {
            date: "2024-06-11T19:00:00Z",
            type: "Point",
            coordinates: [-56.331170413177823, -19.780401642890286],
          },
        ],
      },
      {
        id: "EONET_6666",
        title: "Wildfire in Bolivia, Brazil 1019827",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6666",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019827",
          },
        ],
        geometries: [
          {
            date: "2024-06-10T19:00:00Z",
            type: "Point",
            coordinates: [-57.96180469872408, -19.98358757004916],
          },
        ],
      },
      {
        id: "EONET_6673",
        title: "Wildfire in The Democratic Republic of Congo 1019831",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6673",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019831",
          },
        ],
        geometries: [
          {
            date: "2024-06-10T19:00:00Z",
            type: "Point",
            coordinates: [25.048072842072497, -8.4491588395270387],
          },
        ],
      },
      {
        id: "EONET_6679",
        title: "Wildfire in Australia 1019837",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6679",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019837",
          },
        ],
        geometries: [
          {
            date: "2024-06-10T19:00:00Z",
            type: "Point",
            coordinates: [128.756296444836, -17.064177309559632],
          },
        ],
      },
      {
        id: "EONET_6685",
        title: "Wildfire in Australia 1019844",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6685",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019844",
          },
        ],
        geometries: [
          {
            date: "2024-06-10T19:00:00Z",
            type: "Point",
            coordinates: [130.11084389489514, -14.453578007520827],
          },
        ],
      },
      {
        id: "EONET_6686",
        title: "Wildfire in Russian Federation 1019843",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6686",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019843",
          },
        ],
        geometries: [
          {
            date: "2024-06-10T19:00:00Z",
            type: "Point",
            coordinates: [128.92521909629454, 53.328215689594266],
          },
        ],
      },
      {
        id: "EONET_6693",
        title: "Wildfire in Australia 1019851",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6693",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019851",
          },
        ],
        geometries: [
          {
            date: "2024-06-10T19:00:00Z",
            type: "Point",
            coordinates: [130.1599674966007, -14.388250095459364],
          },
        ],
      },
      {
        id: "EONET_6663",
        title: "Wildfire in The Democratic Republic of Congo 1019820",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6663",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019820",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [19.524549447533417, -6.3210177730097117],
          },
        ],
      },
      {
        id: "EONET_6667",
        title: "Wildfire in Australia 1019829",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6667",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019829",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [145.97078668581128, -19.151149710433955],
          },
        ],
      },
      {
        id: "EONET_6668",
        title: "Wildfire in Australia 1019830",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6668",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019830",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [144.90579302774964, -16.609373940490848],
          },
        ],
      },
      {
        id: "EONET_6669",
        title: "Wildfire in Angola 1019823",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6669",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019823",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [21.72731383847351, -8.6273107167308734],
          },
        ],
      },
      {
        id: "EONET_6670",
        title: "Wildfire in The Democratic Republic of Congo 1019824",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6670",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019824",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [27.011648410930551, -8.7441411715551887],
          },
        ],
      },
      {
        id: "EONET_6680",
        title: "Wildfire in Paraguay, Brazil 1019838",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6680",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019838",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [-57.831458587996352, -20.9432944839143],
          },
        ],
      },
      {
        id: "EONET_6694",
        title: "Wildfire in Australia 1019852",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6694",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019852",
          },
        ],
        geometries: [
          {
            date: "2024-06-09T19:00:00Z",
            type: "Point",
            coordinates: [126.96293200047403, -14.447093138560433],
          },
        ],
      },
      {
        id: "EONET_6674",
        title: "Wildfire in Russian Federation 1019832",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6674",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019832",
          },
        ],
        geometries: [
          {
            date: "2024-06-08T19:00:00Z",
            type: "Point",
            coordinates: [136.05409473202397, 62.791731990398731],
          },
        ],
      },
      {
        id: "EONET_6654",
        title: "Wildfire in Russian Federation 1019811",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6654",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019811",
          },
        ],
        geometries: [
          {
            date: "2024-06-07T19:00:00Z",
            type: "Point",
            coordinates: [136.20582288974563, 62.908731076160961],
          },
        ],
      },
      {
        id: "EONET_6671",
        title: "Wildfire in The Democratic Republic of Congo 1019825",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6671",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019825",
          },
        ],
        geometries: [
          {
            date: "2024-06-07T19:00:00Z",
            type: "Point",
            coordinates: [18.224385704741032, -6.8346667127990983],
          },
        ],
      },
      {
        id: "EONET_6675",
        title: "Wildfire in The Democratic Republic of Congo 1019833",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6675",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019833",
          },
        ],
        geometries: [
          {
            date: "2024-06-07T19:00:00Z",
            type: "Point",
            coordinates: [22.804279480971644, -7.6146587900393792],
          },
        ],
      },
      {
        id: "EONET_6642",
        title: "Wildfire in Australia 1019803",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6642",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019803",
          },
        ],
        geometries: [
          {
            date: "2024-06-06T19:00:00Z",
            type: "Point",
            coordinates: [134.10774812831934, -12.083547147354954],
          },
        ],
      },
      {
        id: "EONET_6643",
        title: "Wildfire in Australia 1019804",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6643",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019804",
          },
        ],
        geometries: [
          {
            date: "2024-06-05T19:00:00Z",
            type: "Point",
            coordinates: [133.73476387483976, -13.848150833672523],
          },
        ],
      },
      {
        id: "EONET_6644",
        title: "Wildfire in Australia 1019805",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6644",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019805",
          },
        ],
        geometries: [
          {
            date: "2024-06-05T19:00:00Z",
            type: "Point",
            coordinates: [134.12150373926113, -11.96769577790554],
          },
        ],
      },
      {
        id: "EONET_6655",
        title: "Wildfire in Australia 1019812",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6655",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019812",
          },
        ],
        geometries: [
          {
            date: "2024-06-05T19:00:00Z",
            type: "Point",
            coordinates: [150.26053553971445, -22.498592687759551],
          },
        ],
      },
      {
        id: "EONET_6645",
        title: "Wildfire in Brazil 1019799",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6645",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019799",
          },
        ],
        geometries: [
          {
            date: "2024-06-04T19:00:00Z",
            type: "Point",
            coordinates: [-57.372976208760669, -18.814369531110685],
          },
        ],
      },
      {
        id: "EONET_6664",
        title: "Wildfire in Australia 1019821",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6664",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019821",
          },
        ],
        geometries: [
          {
            date: "2024-06-04T19:00:00Z",
            type: "Point",
            coordinates: [143.61116708616163, -16.068311385575822],
          },
        ],
      },
      {
        id: "EONET_6676",
        title: "Wildfire in Brazil 1019834",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6676",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019834",
          },
        ],
        geometries: [
          {
            date: "2024-06-04T19:00:00Z",
            type: "Point",
            coordinates: [-57.841139943579563, -19.892361764432856],
          },
        ],
      },
      {
        id: "EONET_6641",
        title: "Wildfire in Brazil, Bolivia 1019798",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6641",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019798",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [-57.75358205652401, -18.898720010358094],
          },
        ],
      },
      {
        id: "EONET_6646",
        title: "Wildfire in Australia 1019806",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6646",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019806",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [144.66574527660509, -16.901414069771668],
          },
        ],
      },
      {
        id: "EONET_6647",
        title: "Wildfire in Australia 1019800",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6647",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019800",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [136.27170574062526, -16.555345257617798],
          },
        ],
      },
      {
        id: "EONET_6648",
        title: "Wildfire in Russian Federation 1019807",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6648",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019807",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [127.44798146132302, 53.676452208880654],
          },
        ],
      },
      {
        id: "EONET_6656",
        title: "Wildfire in Russian Federation 1019815",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6656",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019815",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [120.95407164417949, 55.2918153966244],
          },
        ],
      },
      {
        id: "EONET_6657",
        title: "Wildfire in Australia 1019813",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6657",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019813",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [144.70858120285877, -17.218098619466126],
          },
        ],
      },
      {
        id: "EONET_6658",
        title: "Wildfire in Brazil 1019814",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6658",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019814",
          },
        ],
        geometries: [
          {
            date: "2024-06-03T19:00:00Z",
            type: "Point",
            coordinates: [-57.520921015929147, -18.49604907313514],
          },
        ],
      },
      {
        id: "EONET_6649",
        title: "Wildfire in Russian Federation 1019801",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6649",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019801",
          },
        ],
        geometries: [
          {
            date: "2024-06-02T19:00:00Z",
            type: "Point",
            coordinates: [121.99204725299639, 55.401798533886925],
          },
        ],
      },
      {
        id: "EONET_6659",
        title: "Wildfire in Brazil 1019816",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6659",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019816",
          },
        ],
        geometries: [
          {
            date: "2024-06-02T19:00:00Z",
            type: "Point",
            coordinates: [-57.470657691113153, -18.683203631475283],
          },
        ],
      },
      {
        id: "EONET_6660",
        title: "Wildfire in Russian Federation 1019817",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6660",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019817",
          },
        ],
        geometries: [
          {
            date: "2024-06-02T19:00:00Z",
            type: "Point",
            coordinates: [119.37803475618749, 54.687573317528681],
          },
        ],
      },
      {
        id: "EONET_6672",
        title: "Wildfire in Russian Federation 1019826",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6672",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019826",
          },
        ],
        geometries: [
          {
            date: "2024-06-02T19:00:00Z",
            type: "Point",
            coordinates: [125.55888752268412, 54.345654241742892],
          },
        ],
      },
      {
        id: "EONET_6677",
        title: "Wildfire in Russian Federation 1019835",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6677",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019835",
          },
        ],
        geometries: [
          {
            date: "2024-06-02T19:00:00Z",
            type: "Point",
            coordinates: [124.71790450412369, 54.045407262215491],
          },
        ],
      },
      {
        id: "EONET_6650",
        title: "Wildfire in Russian Federation 1019802",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6650",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019802",
          },
        ],
        geometries: [
          {
            date: "2024-06-01T19:00:00Z",
            type: "Point",
            coordinates: [126.75925037528762, 56.448723974311015],
          },
        ],
      },
      {
        id: "EONET_6661",
        title: "Wildfire in Russian Federation 1019818",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6661",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019818",
          },
        ],
        geometries: [
          {
            date: "2024-06-01T19:00:00Z",
            type: "Point",
            coordinates: [131.02497789067206, 59.067460401361878],
          },
        ],
      },
      {
        id: "EONET_6651",
        title: "Wildfire in Mexico 1019808",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6651",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019808",
          },
        ],
        geometries: [
          {
            date: "2024-05-30T19:00:00Z",
            type: "Point",
            coordinates: [-108.82495967429617, 28.233787554897102],
          },
        ],
      },
      {
        id: "EONET_6662",
        title: "Wildfire in Russian Federation 1019819",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6662",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019819",
          },
        ],
        geometries: [
          {
            date: "2024-05-30T19:00:00Z",
            type: "Point",
            coordinates: [124.10128911457811, 55.012492798818961],
          },
        ],
      },
      {
        id: "EONET_6665",
        title: "Wildfire in Brazil 1019822",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6665",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019822",
          },
        ],
        geometries: [
          {
            date: "2024-05-30T19:00:00Z",
            type: "Point",
            coordinates: [-57.184378455839877, -17.287761767717011],
          },
        ],
      },
      {
        id: "EONET_6652",
        title: "Wildfire in Russian Federation 1019809",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6652",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019809",
          },
        ],
        geometries: [
          {
            date: "2024-05-28T19:00:00Z",
            type: "Point",
            coordinates: [120.6966930486266, 55.661517248377486],
          },
        ],
      },
      {
        id: "EONET_6640",
        title: "Kerinci Volcano, Indonesia",
        description: "A volcano!!!!!!",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6640",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=261170",
          },
        ],
        geometries: [
          {
            date: "2024-05-28T00:00:00Z",
            type: "Point",
            coordinates: [101.264, -1.697],
          },
        ],
      },
      {
        id: "EONET_6653",
        title: "Wildfire in Bolivia 1019810",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6653",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019810",
          },
        ],
        geometries: [
          {
            date: "2024-05-27T19:00:00Z",
            type: "Point",
            coordinates: [-60.61688015436355, -15.837595514842604],
          },
        ],
      },
      {
        id: "EONET_6638",
        title: "Dempo Volcano, Indonesia",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6638",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=261230",
          },
        ],
        geometries: [
          {
            date: "2024-05-27T00:00:00Z",
            type: "Point",
            coordinates: [103.121, -4.016],
          },
        ],
      },
      {
        id: "EONET_6523",
        title: "Iceberg A83",
        description: "ICE BERG HEADING FOR TITANIC",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6523",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "EO",
            url: "https://earthobservatory.nasa.gov/images/152848/antarctic-ice-shelf-spawns-iceberg-a-83",
          },
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-05-24T00:00:00Z",
            type: "Point",
            coordinates: [-25.55, -75.37],
          },
        ],
      },
      {
        id: "EONET_6639",
        title: "Whakaari/White Island Volcano, New Zealand",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6639",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=241040",
          },
        ],
        geometries: [
          {
            date: "2024-05-24T00:00:00Z",
            type: "Point",
            coordinates: [177.18, -37.52],
          },
        ],
      },
      {
        id: "EONET_6636",
        title: "Wildfire in Russian Federation 1019796",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6636",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019796",
          },
        ],
        geometries: [
          {
            date: "2024-05-22T19:00:00Z",
            type: "Point",
            coordinates: [115.24246554767954, 56.289806089132178],
          },
        ],
      },
      {
        id: "EONET_6637",
        title: "Wildfire in Russian Federation 1019797",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6637",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "GDACS",
            url: "https://www.gdacs.org/report.aspx?eventtype=WF&amp;eventid=1019797",
          },
        ],
        geometries: [
          {
            date: "2024-05-21T19:00:00Z",
            type: "Point",
            coordinates: [116.22810877594469, 54.447956071927983],
          },
        ],
      },
      {
        id: "EONET_6525",
        title: "Villarrica Volcano, Chile",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6525",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=357120",
          },
        ],
        geometries: [
          {
            date: "2024-05-18T00:00:00Z",
            type: "Point",
            coordinates: [-71.93, -39.42],
          },
        ],
      },
      {
        id: "EONET_6520",
        title: "Iceberg A76N",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6520",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-05-17T00:00:00Z",
            type: "Point",
            coordinates: [-54.04, -63.76],
          },
        ],
      },
      {
        id: "EONET_6524",
        title: "Concepción Volcano, Nicaragua",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6524",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=344120",
          },
        ],
        geometries: [
          {
            date: "2024-05-16T00:00:00Z",
            type: "Point",
            coordinates: [-85.622, 11.538],
          },
        ],
      },
      {
        id: "EONET_6516",
        title: "Ubinas Volcano, Peru",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6516",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=354020",
          },
        ],
        geometries: [
          {
            date: "2024-05-06T00:00:00Z",
            type: "Point",
            coordinates: [-70.8972, -16.345],
          },
        ],
      },
      {
        id: "EONET_6514",
        title: "Tofua Volcano, Tonga",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6514",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=243060",
          },
        ],
        geometries: [
          {
            date: "2024-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-175.07, -19.75],
          },
        ],
      },
      {
        id: "EONET_6515",
        title: "Sheveluch Volcano, Russia",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6515",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=300270",
          },
        ],
        geometries: [
          {
            date: "2024-04-28T00:00:00Z",
            type: "Point",
            coordinates: [161.36, 56.653],
          },
        ],
      },
      {
        id: "EONET_6517",
        title: "Yasur Volcano, Vanuatu",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6517",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=257100",
          },
        ],
        geometries: [
          {
            date: "2024-04-25T00:00:00Z",
            type: "Point",
            coordinates: [169.447, -19.532],
          },
        ],
      },
      {
        id: "EONET_6511",
        title: "Bagana Volcano, Papua New Guinea",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6511",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "http://volcano.si.edu/volcano.cfm?vn=255020",
          },
        ],
        geometries: [
          {
            date: "2024-04-22T00:00:00Z",
            type: "Point",
            coordinates: [155.196, -6.137],
          },
        ],
      },
      {
        id: "EONET_6510",
        title: "Iceberg D33C",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6510",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-04-19T00:00:00Z",
            type: "Point",
            coordinates: [-20.02, -75.52],
          },
        ],
      },
      {
        id: "EONET_6509",
        title: "Ruang Volcano, Indonesia",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6509",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "EO",
            url: "https://earthobservatory.nasa.gov/images/152716/a-blanket-of-ash-from-ruang",
          },
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=267010",
          },
        ],
        geometries: [
          {
            date: "2024-04-16T00:00:00Z",
            type: "Point",
            coordinates: [125.37, 2.3],
          },
        ],
      },
      {
        id: "EONET_4431",
        title: "Iceberg B47",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4431",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-09-20T00:00:00Z",
            type: "Point",
            coordinates: [-130.28, -74.27],
          },
          {
            date: "2019-12-13T00:00:00Z",
            type: "Point",
            coordinates: [-131.63, -73.89],
          },
          {
            date: "2020-01-03T00:00:00Z",
            type: "Point",
            coordinates: [-133.21, -73.74],
          },
          {
            date: "2022-05-20T00:00:00Z",
            type: "Point",
            coordinates: [-134.89, -74.24],
          },
          {
            date: "2023-07-07T00:00:00Z",
            type: "Point",
            coordinates: [-133.89, -73.87],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-129.72, -74.08],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-133.97, -73.88],
          },
          {
            date: "2023-11-09T00:00:00Z",
            type: "Point",
            coordinates: [-132.26, -73.74],
          },
          {
            date: "2023-11-24T00:00:00Z",
            type: "Point",
            coordinates: [-124.87, -72.87],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-129.99, -73.51],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-134.12, -73.9],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-131.99, -73.5],
          },
          {
            date: "2024-01-11T00:00:00Z",
            type: "Point",
            coordinates: [-134.05, -73.87],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-140.16, -74.63],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-137.37, -74.46],
          },
        ],
      },
      {
        id: "EONET_6507",
        title: "Poas Volcano, Costa Rica",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6507",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=345040",
          },
        ],
        geometries: [
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-84.233, 10.2],
          },
        ],
      },
      {
        id: "EONET_6302",
        title: "Iceberg A80A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6302",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-60.27, -71.77],
          },
          {
            date: "2023-02-17T00:00:00Z",
            type: "Point",
            coordinates: [-59.29, -72.11],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [-59.69, -71.46],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [-59.7, -70.94],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-59.8, -70.36],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-59.83, -69.17],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-59.6, -68.53],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-59.5, -68.04],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-59.63, -68.86],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-59.3, -67.4],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-59.63, -68.86],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-59.03, -66.61],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-57.72, -66.43],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-58.26, -66.02],
          },
          {
            date: "2023-11-09T00:00:00Z",
            type: "Point",
            coordinates: [-57.48, -65.66],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-58.11, -65.28],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-56.8, -65.08],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-56.14, -64.55],
          },
        ],
      },
      {
        id: "EONET_6320",
        title: "Iceberg A81",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6320",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2023-01-27T00:00:00Z",
            type: "Point",
            coordinates: [-27.16, -75.66],
          },
          {
            date: "2023-02-24T00:00:00Z",
            type: "Point",
            coordinates: [-28.83, -76.01],
          },
          {
            date: "2023-03-10T00:00:00Z",
            type: "Point",
            coordinates: [-30.79, -76.37],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [-33.68, -76.8],
          },
          {
            date: "2023-04-07T00:00:00Z",
            type: "Point",
            coordinates: [-34.92, -77.18],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-36.06, -77.59],
          },
          {
            date: "2023-05-26T00:00:00Z",
            type: "Point",
            coordinates: [-38.53, -77.69],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-40.51, -77.54],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-42.95, -77.38],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-39.22, -77.69],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-44.49, -77.08],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-45.63, -76.69],
          },
          {
            date: "2023-10-26T00:00:00Z",
            type: "Point",
            coordinates: [-48.51, -76.47],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-47.68, -75.98],
          },
        ],
      },
      {
        id: "EONET_6615",
        title: "Boggsvillle Wildfire, Bent, Colorado",
        description: "2 Miles South of Las Animas",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6615",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-03-02T13:53:00Z",
            type: "Point",
            coordinates: [-103.266348, 37.815952],
          },
        ],
      },
      {
        id: "EONET_6500",
        title: "Fernandina Volcano, Ecuador",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6500",
        categories: [
          {
            id: 12,
            title: "Volcanoes",
          },
        ],
        sources: [
          {
            id: "EO",
            url: "https://earthobservatory.nasa.gov/images/152538/an-eruption-for-galapagos-iguanas",
          },
          {
            id: "SIVolcano",
            url: "https://volcano.si.edu/volcano.cfm?vn=353010",
          },
        ],
        geometries: [
          {
            date: "2024-03-02T00:00:00Z",
            type: "Point",
            coordinates: [-91.55, -0.37],
          },
        ],
      },
      {
        id: "EONET_6612",
        title: "Happy Jack Wildfire, Laramie, Wyoming",
        description: "7 NM West of Cheyenne, WY in the Middle Crow Creek area",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6612",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-03-01T14:41:00Z",
            type: "Point",
            coordinates: [-105.098648, 41.192187],
          },
        ],
      },
      {
        id: "EONET_2879",
        title: "Iceberg D20A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_2879",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "BYU_ICE",
            url: "http://www.scp.byu.edu/data/iceberg/ascat/d20a.ascat",
          },
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2011-08-30T00:00:00Z",
            type: "Point",
            coordinates: [36.9008, -69.2625],
          },
          {
            date: "2017-12-01T00:00:00Z",
            type: "Point",
            coordinates: [36.37, -68.94],
          },
          {
            date: "2021-04-23T00:00:00Z",
            type: "Point",
            coordinates: [36.27, -68.46],
          },
          {
            date: "2021-10-01T00:00:00Z",
            type: "Point",
            coordinates: [34.11, -68.16],
          },
          {
            date: "2021-10-15T00:00:00Z",
            type: "Point",
            coordinates: [32.4, -68.3],
          },
          {
            date: "2021-10-29T00:00:00Z",
            type: "Point",
            coordinates: [31.48, -68.93],
          },
          {
            date: "2021-11-12T00:00:00Z",
            type: "Point",
            coordinates: [28.28, -69.26],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [23.55, -69.6],
          },
          {
            date: "2022-04-08T00:00:00Z",
            type: "Point",
            coordinates: [21.89, -69.48],
          },
          {
            date: "2022-04-15T00:00:00Z",
            type: "Point",
            coordinates: [20.51, -69.63],
          },
          {
            date: "2022-04-22T00:00:00Z",
            type: "Point",
            coordinates: [16.2, -69.35],
          },
          {
            date: "2022-04-29T00:00:00Z",
            type: "Point",
            coordinates: [12.16, -69.41],
          },
          {
            date: "2022-05-06T00:00:00Z",
            type: "Point",
            coordinates: [7.22, -69.87],
          },
          {
            date: "2022-05-20T00:00:00Z",
            type: "Point",
            coordinates: [-0.92, -69.47],
          },
          {
            date: "2022-05-27T00:00:00Z",
            type: "Point",
            coordinates: [-6.33, -70.26],
          },
          {
            date: "2022-06-03T00:00:00Z",
            type: "Point",
            coordinates: [-9.26, -70.52],
          },
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [-9.71, -70.06],
          },
          {
            date: "2022-06-17T00:00:00Z",
            type: "Point",
            coordinates: [-11.03, -70.84],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [-15.47, -71.77],
          },
          {
            date: "2022-07-01T00:00:00Z",
            type: "Point",
            coordinates: [-17.35, -72.38],
          },
          {
            date: "2022-07-08T00:00:00Z",
            type: "Point",
            coordinates: [-21.48, -73.14],
          },
          {
            date: "2022-07-22T00:00:00Z",
            type: "Point",
            coordinates: [-25.0, -73.39],
          },
          {
            date: "2022-07-29T00:00:00Z",
            type: "Point",
            coordinates: [-26.66, -74.29],
          },
          {
            date: "2022-08-26T00:00:00Z",
            type: "Point",
            coordinates: [-28.58, -74.52],
          },
          {
            date: "2022-09-16T00:00:00Z",
            type: "Point",
            coordinates: [-30.27, -74.52],
          },
          {
            date: "2022-10-14T00:00:00Z",
            type: "Point",
            coordinates: [-31.92, -74.86],
          },
          {
            date: "2022-10-21T00:00:00Z",
            type: "Point",
            coordinates: [-33.37, -74.52],
          },
          {
            date: "2022-10-28T00:00:00Z",
            type: "Point",
            coordinates: [-35.77, -74.37],
          },
          {
            date: "2022-11-18T00:00:00Z",
            type: "Point",
            coordinates: [-37.26, -73.92],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-38.91, -73.99],
          },
          {
            date: "2022-12-16T00:00:00Z",
            type: "Point",
            coordinates: [-41.26, -73.6],
          },
          {
            date: "2023-01-06T00:00:00Z",
            type: "Point",
            coordinates: [-41.95, -73.07],
          },
          {
            date: "2023-02-10T00:00:00Z",
            type: "Point",
            coordinates: [-43.51, -72.8],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [-45.39, -72.5],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [-47.21, -72.32],
          },
          {
            date: "2023-05-05T00:00:00Z",
            type: "Point",
            coordinates: [-49.49, -72.11],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-50.78, -71.71],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-52.39, -71.22],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-53.1, -70.28],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-51.65, -71.52],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-53.4, -68.79],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-52.99, -68.13],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-51.65, -71.52],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-53.24, -66.79],
          },
          {
            date: "2023-08-18T00:00:00Z",
            type: "Point",
            coordinates: [-52.15, -66.38],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-50.44, -66.38],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-50.66, -65.54],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-51.37, -65.06],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-49.99, -64.49],
          },
          {
            date: "2023-10-13T00:00:00Z",
            type: "Point",
            coordinates: [-49.71, -63.94],
          },
          {
            date: "2023-10-20T00:00:00Z",
            type: "Point",
            coordinates: [-49.37, -63.47],
          },
          {
            date: "2023-11-03T00:00:00Z",
            type: "Point",
            coordinates: [-49.81, -62.95],
          },
          {
            date: "2023-11-17T00:00:00Z",
            type: "Point",
            coordinates: [-50.37, -62.46],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-49.07, -62.06],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-48.0, -62.24],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-46.34, -62.47],
          },
          {
            date: "2024-01-11T00:00:00Z",
            type: "Point",
            coordinates: [-45.48, -62.74],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-44.91, -62.33],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-43.92, -62.13],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-44.91, -62.33],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-42.64, -61.9],
          },
        ],
      },
      {
        id: "EONET_6608",
        title: "Range 50B Wildfire, Perry, Mississippi",
        description: "10 Miles NE of Brooklyn, MS",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6608",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-02-28T21:34:00Z",
            type: "Point",
            coordinates: [-89.0933, 31.143333],
          },
        ],
      },
      {
        id: "EONET_6493",
        title: "Magenta Fire, Texas,US",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6493",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "InciWeb",
            url: "https://inciweb.nwcg.gov/incident-information/txtxs-magenta-fire",
          },
        ],
        geometries: [
          {
            date: "2024-02-27T00:00:00Z",
            type: "Point",
            coordinates: [-102.252503, 35.503164],
          },
        ],
      },
      {
        id: "EONET_6598",
        title: "MA North Stinnett Wildfire, Hutchinson, Texas",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6598",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-02-26T17:05:00Z",
            type: "Point",
            coordinates: [-101.484489, 35.825155],
          },
        ],
      },
      {
        id: "EONET_6597",
        title: "Betty&#039;s Way Wildfire, Lincoln, Nebraska",
        description: "11 miles NE of North Platte",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6597",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-02-26T16:38:00Z",
            type: "Point",
            coordinates: [-100.57133, 41.48738],
          },
        ],
      },
      {
        id: "EONET_6594",
        title: "MA North CIG Wildfire, Moore, Texas",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6594",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-02-26T13:32:00Z",
            type: "Point",
            coordinates: [-101.729965, 35.632396],
          },
        ],
      },
      {
        id: "EONET_6490",
        title: "Smokehouse Creek Fire, Texas, US",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6490",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "InciWeb",
            url: "https://inciweb.nwcg.gov/incident-information/txtxs-smokehouse-creek-fire",
          },
        ],
        geometries: [
          {
            date: "2024-02-26T00:00:00Z",
            type: "Point",
            coordinates: [-101.432647, 35.84875],
          },
        ],
      },
      {
        id: "EONET_6491",
        title: "Grape Vine Creek Fire, Texas, US",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6491",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "InciWeb",
            url: "https://inciweb.nwcg.gov/incident-information/txtxs-grape-vine-creek-fire",
          },
        ],
        geometries: [
          {
            date: "2024-02-26T00:00:00Z",
            type: "Point",
            coordinates: [-100.824622, 35.459831],
          },
        ],
      },
      {
        id: "EONET_6492",
        title: "Windy Deuce Fire, Texas, US",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6492",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "InciWeb",
            url: "https://inciweb.nwcg.gov/incident-information/txtxs-windy-deuce-fire",
          },
        ],
        geometries: [
          {
            date: "2024-02-26T00:00:00Z",
            type: "Point",
            coordinates: [-101.851, 35.631],
          },
        ],
      },
      {
        id: "EONET_6585",
        title: "Chewalla Creek Wildfire, Marshall, Mississippi",
        description: "7 Miles NE of Holly Springs, MS",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6585",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-02-20T01:02:00Z",
            type: "Point",
            coordinates: [-89.31971, 34.78923],
          },
        ],
      },
      {
        id: "EONET_2734",
        title: "Iceberg A23A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_2734",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "BYU_ICE",
            url: "http://www.scp.byu.edu/data/iceberg/ascat/a23a.ascat",
          },
          {
            id: "Earthdata",
            url: "https://www.earthdata.nasa.gov/worldview/worldview-image-archive/iceberg-A32a-antarctica-27-feb-2024",
          },
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2011-08-30T00:00:00Z",
            type: "Point",
            coordinates: [-41.4727, -75.8853],
          },
          {
            date: "2021-03-26T00:00:00Z",
            type: "Point",
            coordinates: [-39.74, -75.7],
          },
          {
            date: "2022-03-11T00:00:00Z",
            type: "Point",
            coordinates: [-37.63, -75.55],
          },
          {
            date: "2022-04-08T00:00:00Z",
            type: "Point",
            coordinates: [-37.38, -75.08],
          },
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [-38.83, -74.79],
          },
          {
            date: "2022-08-05T00:00:00Z",
            type: "Point",
            coordinates: [-39.92, -74.31],
          },
          {
            date: "2022-09-09T00:00:00Z",
            type: "Point",
            coordinates: [-40.86, -73.89],
          },
          {
            date: "2022-10-21T00:00:00Z",
            type: "Point",
            coordinates: [-42.91, -73.66],
          },
          {
            date: "2022-11-04T00:00:00Z",
            type: "Point",
            coordinates: [-43.85, -73.26],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-44.88, -72.85],
          },
          {
            date: "2022-12-23T00:00:00Z",
            type: "Point",
            coordinates: [-45.99, -72.52],
          },
          {
            date: "2023-01-13T00:00:00Z",
            type: "Point",
            coordinates: [-46.97, -72.15],
          },
          {
            date: "2023-02-24T00:00:00Z",
            type: "Point",
            coordinates: [-48.51, -71.97],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [-50.08, -71.88],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [-51.9, -71.68],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-54.13, -71.02],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [-55.05, -70.5],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-56.07, -69.44],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-55.05, -70.5],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-55.95, -68.33],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-55.55, -67.81],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-55.05, -70.5],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-55.05, -66.57],
          },
          {
            date: "2023-08-18T00:00:00Z",
            type: "Point",
            coordinates: [-54.0, -66.0],
          },
          {
            date: "2023-09-08T00:00:00Z",
            type: "Point",
            coordinates: [-53.63, -65.46],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-53.96, -64.64],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-53.11, -64.07],
          },
          {
            date: "2023-10-20T00:00:00Z",
            type: "Point",
            coordinates: [-52.03, -63.78],
          },
          {
            date: "2023-11-03T00:00:00Z",
            type: "Point",
            coordinates: [-51.68, -63.34],
          },
          {
            date: "2023-11-24T00:00:00Z",
            type: "Point",
            coordinates: [-52.44, -62.82],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-53.05, -62.39],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-52.23, -62.02],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-50.86, -61.42],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-50.27, -61.05],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-51.64, -60.8],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-50.28, -60.29],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-49.43, -60.05],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-51.22, -60.56],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-45.37, -59.65],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-44.79, -58.89],
          },
        ],
      },
      {
        id: "EONET_2736",
        title: "Iceberg B22A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_2736",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "BYU_ICE",
            url: "http://www.scp.byu.edu/data/iceberg/ascat/b22a.ascat",
          },
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2011-08-30T00:00:00Z",
            type: "Point",
            coordinates: [-108.5265, -74.2006],
          },
          {
            date: "2022-02-18T00:00:00Z",
            type: "Point",
            coordinates: [-109.44, -73.82],
          },
          {
            date: "2023-01-27T00:00:00Z",
            type: "Point",
            coordinates: [-108.78, -73.39],
          },
          {
            date: "2023-02-17T00:00:00Z",
            type: "Point",
            coordinates: [-108.24, -72.76],
          },
          {
            date: "2023-03-10T00:00:00Z",
            type: "Point",
            coordinates: [-108.85, -72.33],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [-111.09, -72.2],
          },
          {
            date: "2023-05-19T00:00:00Z",
            type: "Point",
            coordinates: [-113.27, -72.1],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-115.09, -72.02],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-113.47, -72.13],
          },
          {
            date: "2023-08-18T00:00:00Z",
            type: "Point",
            coordinates: [-112.4, -71.72],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-114.38, -71.47],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-116.41, -71.5],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-117.78, -71.81],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-119.18, -72.15],
          },
        ],
      },
      {
        id: "EONET_4125",
        title: "Iceberg B15AB",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4125",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-03-12T00:00:00Z",
            type: "Point",
            coordinates: [51.31, -65.98],
          },
          {
            date: "2023-02-24T00:00:00Z",
            type: "Point",
            coordinates: [49.16, -66.13],
          },
          {
            date: "2023-03-10T00:00:00Z",
            type: "Point",
            coordinates: [45.05, -66.98],
          },
          {
            date: "2023-03-24T00:00:00Z",
            type: "Point",
            coordinates: [45.27, -66.36],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [44.44, -67.03],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [42.52, -67.54],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [36.62, -68.33],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [34.09, -68.02],
          },
          {
            date: "2023-05-05T00:00:00Z",
            type: "Point",
            coordinates: [31.9, -68.53],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [28.01, -69.43],
          },
          {
            date: "2023-05-19T00:00:00Z",
            type: "Point",
            coordinates: [21.09, -69.78],
          },
          {
            date: "2023-05-26T00:00:00Z",
            type: "Point",
            coordinates: [16.36, -69.28],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [13.05, -69.44],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [10.96, -69.68],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [7.57, -69.81],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [13.05, -69.44],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-2.42, -69.94],
          },
          {
            date: "2023-07-07T00:00:00Z",
            type: "Point",
            coordinates: [-7.07, -70.15],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-10.71, -70.71],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [13.05, -69.44],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-12.59, -71.49],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-15.57, -72.01],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-17.51, -72.03],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-18.08, -72.48],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-19.45, -72.04],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-18.08, -72.48],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-28.0, -74.3],
          },
        ],
      },
      {
        id: "EONET_5358",
        title: "Iceberg A76B",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_5358",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/Products/AntarcIcebergs",
          },
        ],
        geometries: [
          {
            date: "2021-05-28T00:00:00Z",
            type: "Point",
            coordinates: [-57.49, -75.09],
          },
          {
            date: "2021-06-25T00:00:00Z",
            type: "Point",
            coordinates: [-58.2, -74.61],
          },
          {
            date: "2021-07-16T00:00:00Z",
            type: "Point",
            coordinates: [-59.2, -74.13],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [-58.94, -72.89],
          },
          {
            date: "2022-03-18T00:00:00Z",
            type: "Point",
            coordinates: [-58.88, -72.28],
          },
          {
            date: "2022-04-01T00:00:00Z",
            type: "Point",
            coordinates: [-59.04, -71.71],
          },
          {
            date: "2022-04-08T00:00:00Z",
            type: "Point",
            coordinates: [-59.67, -71.27],
          },
          {
            date: "2022-04-29T00:00:00Z",
            type: "Point",
            coordinates: [-59.79, -70.66],
          },
          {
            date: "2022-05-20T00:00:00Z",
            type: "Point",
            coordinates: [-59.81, -70.21],
          },
          {
            date: "2022-06-03T00:00:00Z",
            type: "Point",
            coordinates: [-59.86, -69.71],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [-59.98, -69.07],
          },
          {
            date: "2022-07-22T00:00:00Z",
            type: "Point",
            coordinates: [-59.45, -68.56],
          },
          {
            date: "2022-08-26T00:00:00Z",
            type: "Point",
            coordinates: [-59.61, -68.11],
          },
          {
            date: "2022-09-23T00:00:00Z",
            type: "Point",
            coordinates: [-59.53, -67.66],
          },
          {
            date: "2022-11-11T00:00:00Z",
            type: "Point",
            coordinates: [-59.8, -67.2],
          },
          {
            date: "2022-12-30T00:00:00Z",
            type: "Point",
            coordinates: [-59.11, -66.81],
          },
          {
            date: "2023-03-24T00:00:00Z",
            type: "Point",
            coordinates: [-59.82, -66.42],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [-59.92, -65.9],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-58.72, -65.38],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-56.98, -65.12],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-55.89, -65.05],
          },
        ],
      },
      {
        id: "EONET_6080",
        title: "Iceberg A74A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6080",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [-45.89, -76.9],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-47.89, -76.75],
          },
          {
            date: "2023-01-20T00:00:00Z",
            type: "Point",
            coordinates: [-46.05, -76.58],
          },
          {
            date: "2023-03-03T00:00:00Z",
            type: "Point",
            coordinates: [-44.4, -76.1],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-46.92, -76.13],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-48.74, -75.91],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-50.66, -75.8],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-53.34, -75.25],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-54.22, -74.8],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-50.28, -75.93],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-55.32, -73.8],
          },
          {
            date: "2023-09-08T00:00:00Z",
            type: "Point",
            coordinates: [-56.06, -73.28],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-55.8, -72.83],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-55.63, -72.27],
          },
          {
            date: "2023-10-26T00:00:00Z",
            type: "Point",
            coordinates: [-55.69, -71.58],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-54.32, -72.11],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-53.2, -72.41],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-54.79, -72.38],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-55.79, -70.95],
          },
        ],
      },
      {
        id: "EONET_6081",
        title: "Iceberg A74B",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6081",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [-44.91, -76.75],
          },
          {
            date: "2022-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-46.59, -76.41],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-48.64, -76.52],
          },
          {
            date: "2023-01-06T00:00:00Z",
            type: "Point",
            coordinates: [-47.26, -76.18],
          },
          {
            date: "2023-03-03T00:00:00Z",
            type: "Point",
            coordinates: [-45.16, -76.03],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [-47.05, -75.8],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-48.94, -75.78],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-51.23, -75.36],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [-52.88, -75.19],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-53.7, -74.57],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-52.88, -75.19],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-54.3, -73.0],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-53.73, -72.5],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-52.88, -75.19],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-54.73, -71.02],
          },
          {
            date: "2023-08-18T00:00:00Z",
            type: "Point",
            coordinates: [-55.14, -70.59],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-56.2, -69.94],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-56.47, -69.38],
          },
          {
            date: "2023-10-20T00:00:00Z",
            type: "Point",
            coordinates: [-56.4, -68.93],
          },
          {
            date: "2023-11-09T00:00:00Z",
            type: "Point",
            coordinates: [-54.75, -68.55],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-55.36, -67.94],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-55.22, -67.49],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-54.83, -66.86],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-54.76, -66.21],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-54.49, -65.63],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-54.36, -65.13],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-53.36, -64.83],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-53.41, -63.83],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-53.52, -63.35],
          },
        ],
      },
      {
        id: "EONET_6330",
        title: "Iceberg A80D",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6330",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2023-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-59.34, -72.19],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [-59.65, -71.62],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [-59.75, -71.11],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-59.64, -70.53],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-59.71, -69.34],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-59.43, -68.69],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-59.32, -68.2],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-59.44, -69.02],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-59.09, -67.56],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-59.44, -69.02],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-58.84, -66.76],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-57.34, -66.6],
          },
          {
            date: "2023-09-08T00:00:00Z",
            type: "Point",
            coordinates: [-57.84, -66.19],
          },
          {
            date: "2023-10-13T00:00:00Z",
            type: "Point",
            coordinates: [-57.82, -65.69],
          },
          {
            date: "2023-11-24T00:00:00Z",
            type: "Point",
            coordinates: [-56.73, -65.59],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-56.13, -65.09],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-56.85, -65.46],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-56.07, -64.85],
          },
        ],
      },
      {
        id: "EONET_6513",
        title: "Iceberg D28A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6513",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-33.27, -51.88],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-32.82, -51.09],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-30.95, -51.21],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-27.71, -50.88],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-32.82, -51.09],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-27.33, -52.45],
          },
          {
            date: "2024-04-19T00:00:00Z",
            type: "Point",
            coordinates: [-25.79, -52.41],
          },
          {
            date: "2024-04-26T00:00:00Z",
            type: "Point",
            coordinates: [-25.18, -51.86],
          },
          {
            date: "2024-05-02T00:00:00Z",
            type: "Point",
            coordinates: [-22.85, -52.56],
          },
        ],
      },
      {
        id: "EONET_5906",
        title: "Iceberg A77",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_5906",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2021-08-20T00:00:00Z",
            type: "Point",
            coordinates: [-12.05, -71.01],
          },
          {
            date: "2021-08-27T00:00:00Z",
            type: "Point",
            coordinates: [-14.03, -70.99],
          },
          {
            date: "2021-11-12T00:00:00Z",
            type: "Point",
            coordinates: [-27.05, -74.28],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [-27.79, -74.77],
          },
          {
            date: "2022-04-01T00:00:00Z",
            type: "Point",
            coordinates: [-29.44, -75.02],
          },
          {
            date: "2022-04-15T00:00:00Z",
            type: "Point",
            coordinates: [-29.79, -75.53],
          },
          {
            date: "2022-05-13T00:00:00Z",
            type: "Point",
            coordinates: [-31.39, -76.05],
          },
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [-32.61, -76.84],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [-34.66, -77.13],
          },
          {
            date: "2022-07-15T00:00:00Z",
            type: "Point",
            coordinates: [-35.56, -76.72],
          },
          {
            date: "2022-07-29T00:00:00Z",
            type: "Point",
            coordinates: [-35.85, -77.51],
          },
          {
            date: "2022-09-09T00:00:00Z",
            type: "Point",
            coordinates: [-36.46, -76.93],
          },
          {
            date: "2022-09-23T00:00:00Z",
            type: "Point",
            coordinates: [-35.6, -77.44],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-36.77, -77.82],
          },
          {
            date: "2023-01-13T00:00:00Z",
            type: "Point",
            coordinates: [-39.49, -77.72],
          },
          {
            date: "2023-01-27T00:00:00Z",
            type: "Point",
            coordinates: [-42.09, -77.6],
          },
          {
            date: "2023-03-03T00:00:00Z",
            type: "Point",
            coordinates: [-43.49, -77.2],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-46.35, -76.9],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-48.08, -76.64],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-50.47, -76.39],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-52.0, -76.04],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-51.77, -75.47],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-49.27, -76.57],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-53.74, -74.89],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-56.04, -74.94],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-55.57, -73.97],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-55.55, -73.39],
          },
          {
            date: "2023-10-26T00:00:00Z",
            type: "Point",
            coordinates: [-55.67, -72.62],
          },
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [-55.42, -72.14],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-55.83, -71.66],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-56.82, -70.6],
          },
        ],
      },
      {
        id: "EONET_6037",
        title: "Iceberg C38B",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6037",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2022-03-25T00:00:00Z",
            type: "Point",
            coordinates: [101.72, -65.06],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [99.93, -65.65],
          },
          {
            date: "2023-07-07T00:00:00Z",
            type: "Point",
            coordinates: [99.11, -65.33],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [99.93, -65.65],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [99.0, -65.23],
          },
          {
            date: "2023-12-28T00:00:00Z",
            type: "Point",
            coordinates: [98.67, -64.71],
          },
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [97.78, -64.43],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [92.22, -66.12],
          },
        ],
      },
      {
        id: "EONET_6424",
        title: "Iceberg D33B",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6424",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2023-09-08T00:00:00Z",
            type: "Point",
            coordinates: [18.3, -69.64],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [16.6, -69.45],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [13.66, -69.3],
          },
          {
            date: "2023-10-26T00:00:00Z",
            type: "Point",
            coordinates: [12.22, -69.47],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [9.8, -69.61],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [8.01, -69.68],
          },
          {
            date: "2023-12-28T00:00:00Z",
            type: "Point",
            coordinates: [4.38, -69.94],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [1.94, -69.84],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-2.03, -69.22],
          },
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [-3.15, -69.6],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-4.61, -70.16],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-7.49, -70.29],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-9.33, -70.4],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-7.49, -70.29],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-12.77, -71.07],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-15.11, -71.47],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-16.64, -72.06],
          },
        ],
      },
      {
        id: "EONET_6482",
        title: "Iceberg D36",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6482",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [86.63, -66.31],
          },
        ],
      },
      {
        id: "EONET_4130",
        title: "Iceberg B39",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4130",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-03-13T00:00:00Z",
            type: "Point",
            coordinates: [117.66, -65.55],
          },
          {
            date: "2019-03-15T00:00:00Z",
            type: "Point",
            coordinates: [115.64, -65.04],
          },
          {
            date: "2019-04-05T00:00:00Z",
            type: "Point",
            coordinates: [113.1, -65.12],
          },
          {
            date: "2019-04-12T00:00:00Z",
            type: "Point",
            coordinates: [110.07, -65.39],
          },
          {
            date: "2019-04-19T00:00:00Z",
            type: "Point",
            coordinates: [109.15, -65.87],
          },
          {
            date: "2019-05-03T00:00:00Z",
            type: "Point",
            coordinates: [107.72, -66.2],
          },
          {
            date: "2019-05-10T00:00:00Z",
            type: "Point",
            coordinates: [106.44, -65.66],
          },
          {
            date: "2019-06-07T00:00:00Z",
            type: "Point",
            coordinates: [105.32, -65.04],
          },
          {
            date: "2019-06-14T00:00:00Z",
            type: "Point",
            coordinates: [104.29, -64.9],
          },
          {
            date: "2019-06-21T00:00:00Z",
            type: "Point",
            coordinates: [101.78, -64.72],
          },
          {
            date: "2019-07-05T00:00:00Z",
            type: "Point",
            coordinates: [98.85, -64.44],
          },
          {
            date: "2019-07-12T00:00:00Z",
            type: "Point",
            coordinates: [96.64, -64.21],
          },
          {
            date: "2019-07-19T00:00:00Z",
            type: "Point",
            coordinates: [95.17, -64.31],
          },
          {
            date: "2019-08-02T00:00:00Z",
            type: "Point",
            coordinates: [93.66, -64.45],
          },
          {
            date: "2019-08-09T00:00:00Z",
            type: "Point",
            coordinates: [92.15, -64.92],
          },
          {
            date: "2019-08-23T00:00:00Z",
            type: "Point",
            coordinates: [88.74, -65.54],
          },
          {
            date: "2019-08-30T00:00:00Z",
            type: "Point",
            coordinates: [87.17, -65.5],
          },
          {
            date: "2019-09-06T00:00:00Z",
            type: "Point",
            coordinates: [85.4, -65.75],
          },
          {
            date: "2019-09-13T00:00:00Z",
            type: "Point",
            coordinates: [83.32, -65.66],
          },
          {
            date: "2019-09-27T00:00:00Z",
            type: "Point",
            coordinates: [81.21, -65.72],
          },
          {
            date: "2019-10-25T00:00:00Z",
            type: "Point",
            coordinates: [80.21, -65.94],
          },
          {
            date: "2019-11-08T00:00:00Z",
            type: "Point",
            coordinates: [78.83, -66.55],
          },
          {
            date: "2019-11-29T00:00:00Z",
            type: "Point",
            coordinates: [78.75, -67.02],
          },
          {
            date: "2019-12-20T00:00:00Z",
            type: "Point",
            coordinates: [79.86, -66.89],
          },
          {
            date: "2020-01-17T00:00:00Z",
            type: "Point",
            coordinates: [81.13, -67.06],
          },
          {
            date: "2020-01-24T00:00:00Z",
            type: "Point",
            coordinates: [79.91, -67.33],
          },
          {
            date: "2020-02-07T00:00:00Z",
            type: "Point",
            coordinates: [77.63, -68.29],
          },
          {
            date: "2020-03-06T00:00:00Z",
            type: "Point",
            coordinates: [76.28, -68.54],
          },
          {
            date: "2020-03-27T00:00:00Z",
            type: "Point",
            coordinates: [75.22, -68.07],
          },
          {
            date: "2020-04-17T00:00:00Z",
            type: "Point",
            coordinates: [75.33, -67.57],
          },
          {
            date: "2020-05-22T00:00:00Z",
            type: "Point",
            coordinates: [74.04, -67.83],
          },
          {
            date: "2020-05-29T00:00:00Z",
            type: "Point",
            coordinates: [73.07, -67.23],
          },
          {
            date: "2020-06-19T00:00:00Z",
            type: "Point",
            coordinates: [72.1, -66.38],
          },
          {
            date: "2020-06-26T00:00:00Z",
            type: "Point",
            coordinates: [70.36, -66.6],
          },
          {
            date: "2020-07-03T00:00:00Z",
            type: "Point",
            coordinates: [66.95, -66.8],
          },
          {
            date: "2020-07-10T00:00:00Z",
            type: "Point",
            coordinates: [65.78, -66.86],
          },
          {
            date: "2020-07-17T00:00:00Z",
            type: "Point",
            coordinates: [63.93, -66.64],
          },
          {
            date: "2020-07-31T00:00:00Z",
            type: "Point",
            coordinates: [61.09, -66.78],
          },
          {
            date: "2020-09-04T00:00:00Z",
            type: "Point",
            coordinates: [59.93, -66.63],
          },
          {
            date: "2020-10-09T00:00:00Z",
            type: "Point",
            coordinates: [58.1, -66.19],
          },
          {
            date: "2020-10-30T00:00:00Z",
            type: "Point",
            coordinates: [56.94, -65.81],
          },
          {
            date: "2020-11-27T00:00:00Z",
            type: "Point",
            coordinates: [55.56, -65.66],
          },
          {
            date: "2021-02-19T00:00:00Z",
            type: "Point",
            coordinates: [47.37, -66.6],
          },
          {
            date: "2021-03-05T00:00:00Z",
            type: "Point",
            coordinates: [45.49, -66.94],
          },
          {
            date: "2021-03-19T00:00:00Z",
            type: "Point",
            coordinates: [41.92, -67.12],
          },
          {
            date: "2021-04-02T00:00:00Z",
            type: "Point",
            coordinates: [40.96, -67.86],
          },
          {
            date: "2021-04-16T00:00:00Z",
            type: "Point",
            coordinates: [39.75, -67.96],
          },
          {
            date: "2021-04-23T00:00:00Z",
            type: "Point",
            coordinates: [35.72, -68.26],
          },
          {
            date: "2021-04-30T00:00:00Z",
            type: "Point",
            coordinates: [34.08, -68.46],
          },
          {
            date: "2021-05-14T00:00:00Z",
            type: "Point",
            coordinates: [31.96, -68.55],
          },
          {
            date: "2021-05-21T00:00:00Z",
            type: "Point",
            coordinates: [28.31, -69.38],
          },
          {
            date: "2021-05-28T00:00:00Z",
            type: "Point",
            coordinates: [26.27, -69.87],
          },
          {
            date: "2021-06-04T00:00:00Z",
            type: "Point",
            coordinates: [23.35, -70.08],
          },
          {
            date: "2021-06-11T00:00:00Z",
            type: "Point",
            coordinates: [17.69, -69.56],
          },
          {
            date: "2021-06-18T00:00:00Z",
            type: "Point",
            coordinates: [16.41, -69.43],
          },
          {
            date: "2021-06-25T00:00:00Z",
            type: "Point",
            coordinates: [14.29, -69.03],
          },
          {
            date: "2021-07-02T00:00:00Z",
            type: "Point",
            coordinates: [12.48, -68.8],
          },
          {
            date: "2021-07-09T00:00:00Z",
            type: "Point",
            coordinates: [11.15, -69.0],
          },
          {
            date: "2021-07-16T00:00:00Z",
            type: "Point",
            coordinates: [9.54, -69.2],
          },
          {
            date: "2021-07-23T00:00:00Z",
            type: "Point",
            coordinates: [7.51, -69.34],
          },
          {
            date: "2021-07-30T00:00:00Z",
            type: "Point",
            coordinates: [3.23, -69.65],
          },
          {
            date: "2021-08-06T00:00:00Z",
            type: "Point",
            coordinates: [-1.8, -69.67],
          },
          {
            date: "2021-08-13T00:00:00Z",
            type: "Point",
            coordinates: [-6.29, -70.33],
          },
          {
            date: "2021-08-20T00:00:00Z",
            type: "Point",
            coordinates: [-7.94, -70.49],
          },
          {
            date: "2021-09-03T00:00:00Z",
            type: "Point",
            coordinates: [-10.7, -70.6],
          },
          {
            date: "2021-09-10T00:00:00Z",
            type: "Point",
            coordinates: [-13.61, -71.1],
          },
          {
            date: "2021-09-17T00:00:00Z",
            type: "Point",
            coordinates: [-14.99, -71.73],
          },
          {
            date: "2021-09-24T00:00:00Z",
            type: "Point",
            coordinates: [-17.43, -72.28],
          },
          {
            date: "2021-10-01T00:00:00Z",
            type: "Point",
            coordinates: [-19.46, -72.67],
          },
          {
            date: "2021-10-08T00:00:00Z",
            type: "Point",
            coordinates: [-21.07, -72.96],
          },
          {
            date: "2021-10-22T00:00:00Z",
            type: "Point",
            coordinates: [-23.31, -73.46],
          },
          {
            date: "2021-11-12T00:00:00Z",
            type: "Point",
            coordinates: [-26.47, -74.05],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [-27.8, -75.17],
          },
          {
            date: "2022-04-01T00:00:00Z",
            type: "Point",
            coordinates: [-28.8, -75.67],
          },
          {
            date: "2022-04-08T00:00:00Z",
            type: "Point",
            coordinates: [-30.49, -76.19],
          },
          {
            date: "2022-04-22T00:00:00Z",
            type: "Point",
            coordinates: [-32.99, -76.75],
          },
          {
            date: "2022-05-13T00:00:00Z",
            type: "Point",
            coordinates: [-34.46, -77.12],
          },
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [-36.13, -77.78],
          },
          {
            date: "2022-07-08T00:00:00Z",
            type: "Point",
            coordinates: [-35.84, -77.07],
          },
          {
            date: "2022-07-29T00:00:00Z",
            type: "Point",
            coordinates: [-37.12, -77.78],
          },
          {
            date: "2022-08-19T00:00:00Z",
            type: "Point",
            coordinates: [-37.49, -77.26],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-40.39, -77.29],
          },
          {
            date: "2023-01-06T00:00:00Z",
            type: "Point",
            coordinates: [-42.16, -77.01],
          },
          {
            date: "2023-02-03T00:00:00Z",
            type: "Point",
            coordinates: [-43.79, -76.61],
          },
          {
            date: "2023-03-10T00:00:00Z",
            type: "Point",
            coordinates: [-43.16, -76.11],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-45.98, -76.09],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-47.81, -75.87],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-49.71, -75.77],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-52.72, -75.06],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-49.32, -75.94],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-54.22, -73.77],
          },
          {
            date: "2023-09-08T00:00:00Z",
            type: "Point",
            coordinates: [-55.13, -73.33],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-54.8, -72.38],
          },
          {
            date: "2023-10-20T00:00:00Z",
            type: "Point",
            coordinates: [-54.98, -71.91],
          },
          {
            date: "2023-11-03T00:00:00Z",
            type: "Point",
            coordinates: [-55.02, -71.2],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-56.16, -70.94],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-56.37, -70.48],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-57.37, -69.48],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-56.28, -69.2],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-56.86, -68.25],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-56.83, -67.7],
          },
        ],
      },
      {
        id: "EONET_4132",
        title: "Iceberg B45",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4132",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-03-13T00:00:00Z",
            type: "Point",
            coordinates: [-109.37, -74.7],
          },
          {
            date: "2023-02-10T00:00:00Z",
            type: "Point",
            coordinates: [-109.52, -74.18],
          },
          {
            date: "2023-02-17T00:00:00Z",
            type: "Point",
            coordinates: [-108.63, -73.71],
          },
          {
            date: "2023-03-03T00:00:00Z",
            type: "Point",
            coordinates: [-109.3, -73.21],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [-110.77, -72.98],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-111.44, -72.49],
          },
          {
            date: "2023-11-09T00:00:00Z",
            type: "Point",
            coordinates: [-113.12, -72.49],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-114.33, -72.17],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-115.83, -72.15],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-117.3, -72.16],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-118.81, -71.86],
          },
        ],
      },
      {
        id: "EONET_4133",
        title: "Iceberg C18B",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4133",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-03-13T00:00:00Z",
            type: "Point",
            coordinates: [113.9, -65.47],
          },
          {
            date: "2020-07-03T00:00:00Z",
            type: "Point",
            coordinates: [109.47, -65.3],
          },
          {
            date: "2020-07-10T00:00:00Z",
            type: "Point",
            coordinates: [108.25, -64.93],
          },
          {
            date: "2020-07-17T00:00:00Z",
            type: "Point",
            coordinates: [105.93, -64.95],
          },
          {
            date: "2020-07-31T00:00:00Z",
            type: "Point",
            coordinates: [102.16, -64.65],
          },
          {
            date: "2020-08-14T00:00:00Z",
            type: "Point",
            coordinates: [100.94, -64.95],
          },
          {
            date: "2020-12-04T00:00:00Z",
            type: "Point",
            coordinates: [99.79, -64.74],
          },
          {
            date: "2021-02-19T00:00:00Z",
            type: "Point",
            coordinates: [98.0, -64.33],
          },
          {
            date: "2021-02-26T00:00:00Z",
            type: "Point",
            coordinates: [96.02, -64.38],
          },
          {
            date: "2021-03-05T00:00:00Z",
            type: "Point",
            coordinates: [94.09, -64.77],
          },
          {
            date: "2021-03-19T00:00:00Z",
            type: "Point",
            coordinates: [94.61, -65.3],
          },
          {
            date: "2021-04-02T00:00:00Z",
            type: "Point",
            coordinates: [93.5, -65.96],
          },
          {
            date: "2021-04-09T00:00:00Z",
            type: "Point",
            coordinates: [90.98, -66.25],
          },
          {
            date: "2021-04-16T00:00:00Z",
            type: "Point",
            coordinates: [89.54, -66.6],
          },
          {
            date: "2023-03-24T00:00:00Z",
            type: "Point",
            coordinates: [88.26, -66.37],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [85.85, -65.85],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [84.3, -66.12],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [82.7, -65.91],
          },
          {
            date: "2023-10-20T00:00:00Z",
            type: "Point",
            coordinates: [81.64, -65.77],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [80.29, -66.01],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [78.96, -66.48],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [77.42, -66.88],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [78.96, -66.48],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [77.68, -67.23],
          },
        ],
      },
      {
        id: "EONET_4139",
        title: "Iceberg C33",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4139",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-03-13T00:00:00Z",
            type: "Point",
            coordinates: [153.54, -68.1],
          },
          {
            date: "2019-03-22T00:00:00Z",
            type: "Point",
            coordinates: [150.87, -68.1],
          },
          {
            date: "2019-04-05T00:00:00Z",
            type: "Point",
            coordinates: [148.41, -67.99],
          },
          {
            date: "2019-04-12T00:00:00Z",
            type: "Point",
            coordinates: [146.51, -67.48],
          },
          {
            date: "2019-04-19T00:00:00Z",
            type: "Point",
            coordinates: [144.61, -66.77],
          },
          {
            date: "2020-01-31T00:00:00Z",
            type: "Point",
            coordinates: [143.97, -66.38],
          },
          {
            date: "2020-02-28T00:00:00Z",
            type: "Point",
            coordinates: [141.92, -65.82],
          },
          {
            date: "2020-03-13T00:00:00Z",
            type: "Point",
            coordinates: [140.32, -65.69],
          },
          {
            date: "2020-03-20T00:00:00Z",
            type: "Point",
            coordinates: [138.78, -65.64],
          },
          {
            date: "2020-05-01T00:00:00Z",
            type: "Point",
            coordinates: [136.36, -65.06],
          },
          {
            date: "2020-05-08T00:00:00Z",
            type: "Point",
            coordinates: [134.24, -64.75],
          },
          {
            date: "2020-05-15T00:00:00Z",
            type: "Point",
            coordinates: [133.28, -65.21],
          },
          {
            date: "2020-05-22T00:00:00Z",
            type: "Point",
            coordinates: [132.42, -65.58],
          },
          {
            date: "2020-06-26T00:00:00Z",
            type: "Point",
            coordinates: [130.55, -65.56],
          },
          {
            date: "2021-02-19T00:00:00Z",
            type: "Point",
            coordinates: [126.78, -65.46],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [125.27, -65.32],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [124.3, -65.55],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [122.85, -65.49],
          },
          {
            date: "2024-01-11T00:00:00Z",
            type: "Point",
            coordinates: [121.13, -65.57],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [120.5, -66.15],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [118.24, -66.51],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [120.19, -66.55],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [116.32, -65.92],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [116.34, -65.46],
          },
        ],
      },
      {
        id: "EONET_4145",
        title: "Iceberg D27",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_4145",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2019-03-13T00:00:00Z",
            type: "Point",
            coordinates: [81.86, -67.27],
          },
          {
            date: "2020-06-19T00:00:00Z",
            type: "Point",
            coordinates: [80.2, -67.26],
          },
          {
            date: "2020-11-06T00:00:00Z",
            type: "Point",
            coordinates: [79.26, -67.64],
          },
          {
            date: "2021-02-26T00:00:00Z",
            type: "Point",
            coordinates: [77.42, -68.21],
          },
          {
            date: "2021-03-05T00:00:00Z",
            type: "Point",
            coordinates: [76.03, -68.33],
          },
          {
            date: "2021-04-02T00:00:00Z",
            type: "Point",
            coordinates: [74.67, -67.96],
          },
          {
            date: "2021-04-09T00:00:00Z",
            type: "Point",
            coordinates: [73.34, -67.95],
          },
          {
            date: "2021-04-16T00:00:00Z",
            type: "Point",
            coordinates: [71.83, -67.34],
          },
          {
            date: "2021-04-23T00:00:00Z",
            type: "Point",
            coordinates: [69.08, -66.9],
          },
          {
            date: "2021-04-30T00:00:00Z",
            type: "Point",
            coordinates: [67.0, -66.91],
          },
          {
            date: "2021-05-07T00:00:00Z",
            type: "Point",
            coordinates: [64.01, -66.61],
          },
          {
            date: "2021-05-14T00:00:00Z",
            type: "Point",
            coordinates: [61.31, -66.73],
          },
          {
            date: "2021-05-21T00:00:00Z",
            type: "Point",
            coordinates: [59.49, -66.64],
          },
          {
            date: "2021-05-28T00:00:00Z",
            type: "Point",
            coordinates: [58.53, -66.37],
          },
          {
            date: "2021-06-04T00:00:00Z",
            type: "Point",
            coordinates: [57.41, -65.94],
          },
          {
            date: "2021-06-11T00:00:00Z",
            type: "Point",
            coordinates: [55.62, -65.61],
          },
          {
            date: "2021-06-18T00:00:00Z",
            type: "Point",
            coordinates: [52.69, -65.54],
          },
          {
            date: "2021-06-25T00:00:00Z",
            type: "Point",
            coordinates: [51.0, -65.83],
          },
          {
            date: "2021-07-09T00:00:00Z",
            type: "Point",
            coordinates: [49.13, -66.15],
          },
          {
            date: "2021-07-23T00:00:00Z",
            type: "Point",
            coordinates: [48.07, -66.48],
          },
          {
            date: "2021-08-06T00:00:00Z",
            type: "Point",
            coordinates: [46.91, -66.69],
          },
          {
            date: "2021-08-13T00:00:00Z",
            type: "Point",
            coordinates: [45.6, -66.78],
          },
          {
            date: "2021-08-20T00:00:00Z",
            type: "Point",
            coordinates: [44.49, -67.14],
          },
          {
            date: "2021-09-17T00:00:00Z",
            type: "Point",
            coordinates: [43.08, -67.43],
          },
          {
            date: "2021-10-01T00:00:00Z",
            type: "Point",
            coordinates: [40.96, -67.89],
          },
          {
            date: "2021-10-15T00:00:00Z",
            type: "Point",
            coordinates: [38.24, -68.15],
          },
          {
            date: "2021-10-22T00:00:00Z",
            type: "Point",
            coordinates: [36.65, -68.29],
          },
          {
            date: "2021-11-12T00:00:00Z",
            type: "Point",
            coordinates: [31.89, -68.55],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [23.14, -69.22],
          },
          {
            date: "2022-03-04T00:00:00Z",
            type: "Point",
            coordinates: [24.17, -69.73],
          },
          {
            date: "2022-03-18T00:00:00Z",
            type: "Point",
            coordinates: [19.89, -69.84],
          },
          {
            date: "2022-03-25T00:00:00Z",
            type: "Point",
            coordinates: [15.43, -69.2],
          },
          {
            date: "2022-04-01T00:00:00Z",
            type: "Point",
            coordinates: [12.6, -68.92],
          },
          {
            date: "2022-04-15T00:00:00Z",
            type: "Point",
            coordinates: [12.87, -68.22],
          },
          {
            date: "2022-04-29T00:00:00Z",
            type: "Point",
            coordinates: [12.78, -67.47],
          },
          {
            date: "2022-05-27T00:00:00Z",
            type: "Point",
            coordinates: [11.2, -67.3],
          },
          {
            date: "2022-06-10T00:00:00Z",
            type: "Point",
            coordinates: [11.53, -66.78],
          },
          {
            date: "2022-06-17T00:00:00Z",
            type: "Point",
            coordinates: [10.36, -66.76],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [9.46, -67.5],
          },
          {
            date: "2022-07-29T00:00:00Z",
            type: "Point",
            coordinates: [8.13, -67.8],
          },
          {
            date: "2022-08-05T00:00:00Z",
            type: "Point",
            coordinates: [7.21, -68.26],
          },
          {
            date: "2022-08-19T00:00:00Z",
            type: "Point",
            coordinates: [3.96, -68.7],
          },
          {
            date: "2022-08-26T00:00:00Z",
            type: "Point",
            coordinates: [2.17, -68.88],
          },
          {
            date: "2022-09-02T00:00:00Z",
            type: "Point",
            coordinates: [-0.6, -68.9],
          },
          {
            date: "2022-09-09T00:00:00Z",
            type: "Point",
            coordinates: [-2.17, -69.09],
          },
          {
            date: "2022-09-16T00:00:00Z",
            type: "Point",
            coordinates: [-3.25, -69.38],
          },
          {
            date: "2022-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-6.07, -69.45],
          },
          {
            date: "2022-10-14T00:00:00Z",
            type: "Point",
            coordinates: [-8.1, -70.17],
          },
          {
            date: "2022-10-21T00:00:00Z",
            type: "Point",
            coordinates: [-10.97, -70.79],
          },
          {
            date: "2022-10-28T00:00:00Z",
            type: "Point",
            coordinates: [-14.94, -71.55],
          },
          {
            date: "2022-11-04T00:00:00Z",
            type: "Point",
            coordinates: [-16.8, -72.24],
          },
          {
            date: "2022-11-11T00:00:00Z",
            type: "Point",
            coordinates: [-18.24, -72.5],
          },
          {
            date: "2022-11-18T00:00:00Z",
            type: "Point",
            coordinates: [-20.76, -73.2],
          },
          {
            date: "2022-12-02T00:00:00Z",
            type: "Point",
            coordinates: [-22.85, -73.68],
          },
          {
            date: "2022-12-23T00:00:00Z",
            type: "Point",
            coordinates: [-25.03, -73.74],
          },
          {
            date: "2023-01-06T00:00:00Z",
            type: "Point",
            coordinates: [-27.2, -73.36],
          },
          {
            date: "2023-01-20T00:00:00Z",
            type: "Point",
            coordinates: [-28.38, -73.68],
          },
          {
            date: "2023-01-27T00:00:00Z",
            type: "Point",
            coordinates: [-26.77, -73.99],
          },
          {
            date: "2023-02-10T00:00:00Z",
            type: "Point",
            coordinates: [-26.72, -74.51],
          },
          {
            date: "2023-03-03T00:00:00Z",
            type: "Point",
            coordinates: [-28.36, -74.65],
          },
          {
            date: "2023-03-24T00:00:00Z",
            type: "Point",
            coordinates: [-28.6, -73.76],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-29.57, -74.27],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-30.6, -74.65],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-30.51, -74.17],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-32.41, -74.5],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-30.2, -74.4],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-36.92, -74.19],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-37.11, -73.66],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-30.2, -74.4],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-38.38, -73.32],
          },
          {
            date: "2023-08-11T00:00:00Z",
            type: "Point",
            coordinates: [-41.13, -73.55],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-42.62, -73.13],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-43.16, -72.56],
          },
          {
            date: "2023-10-13T00:00:00Z",
            type: "Point",
            coordinates: [-45.88, -72.14],
          },
          {
            date: "2023-10-26T00:00:00Z",
            type: "Point",
            coordinates: [-46.42, -71.45],
          },
          {
            date: "2023-11-03T00:00:00Z",
            type: "Point",
            coordinates: [-46.29, -70.81],
          },
          {
            date: "2023-11-17T00:00:00Z",
            type: "Point",
            coordinates: [-44.83, -71.27],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-47.2, -71.57],
          },
          {
            date: "2023-12-28T00:00:00Z",
            type: "Point",
            coordinates: [-48.74, -71.51],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-49.74, -71.16],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-52.28, -71.11],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-53.55, -70.89],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-54.13, -70.47],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-53.43, -70.03],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-54.11, -68.71],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-54.83, -67.97],
          },
        ],
      },
      {
        id: "EONET_6288",
        title: "Iceberg D32",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6288",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2022-10-21T00:00:00Z",
            type: "Point",
            coordinates: [70.68, -68.36],
          },
          {
            date: "2022-11-11T00:00:00Z",
            type: "Point",
            coordinates: [70.97, -67.87],
          },
          {
            date: "2022-12-16T00:00:00Z",
            type: "Point",
            coordinates: [71.07, -67.25],
          },
          {
            date: "2023-01-06T00:00:00Z",
            type: "Point",
            coordinates: [70.03, -66.78],
          },
          {
            date: "2023-01-20T00:00:00Z",
            type: "Point",
            coordinates: [68.02, -67.02],
          },
          {
            date: "2023-02-03T00:00:00Z",
            type: "Point",
            coordinates: [66.44, -66.69],
          },
          {
            date: "2023-03-10T00:00:00Z",
            type: "Point",
            coordinates: [64.91, -66.73],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [61.47, -66.79],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [59.41, -66.63],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [57.37, -65.95],
          },
          {
            date: "2023-05-05T00:00:00Z",
            type: "Point",
            coordinates: [55.56, -65.65],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [53.8, -65.41],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [52.63, -65.21],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [51.95, -64.71],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [50.88, -64.61],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [50.49, -65.03],
          },
        ],
      },
      {
        id: "EONET_6423",
        title: "Iceberg D33A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6423",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2023-09-08T00:00:00Z",
            type: "Point",
            coordinates: [17.14, -69.38],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [14.37, -69.23],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [13.16, -69.37],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [11.84, -69.58],
          },
          {
            date: "2023-10-26T00:00:00Z",
            type: "Point",
            coordinates: [10.18, -69.71],
          },
          {
            date: "2023-11-09T00:00:00Z",
            type: "Point",
            coordinates: [7.25, -69.67],
          },
          {
            date: "2023-11-24T00:00:00Z",
            type: "Point",
            coordinates: [5.51, -69.66],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [1.4, -69.58],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-0.74, -69.4],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-1.94, -69.6],
          },
          {
            date: "2023-12-28T00:00:00Z",
            type: "Point",
            coordinates: [-3.64, -69.85],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-5.14, -70.07],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-8.04, -70.06],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-10.27, -70.56],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-12.94, -71.06],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-14.77, -71.49],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-17.62, -72.18],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-19.7, -72.57],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-21.86, -73.22],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-17.62, -72.18],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-26.96, -74.24],
          },
        ],
      },
      {
        id: "EONET_6474",
        title: "Iceberg D35",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6474",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-01-11T00:00:00Z",
            type: "Point",
            coordinates: [21.01, -69.83],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [18.24, -69.29],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [16.63, -69.53],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [12.63, -69.36],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [11.39, -69.55],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [6.81, -69.77],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [12.63, -69.36],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [2.31, -69.95],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-1.79, -69.69],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-5.22, -70.01],
          },
        ],
      },
      {
        id: "EONET_6478",
        title: "Iceberg D30C",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6478",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-35.5, -54.07],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-31.88, -54.47],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-30.77, -55.17],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-31.88, -54.47],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-32.76, -54.18],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-27.17, -54.05],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-25.92, -52.91],
          },
        ],
      },
      {
        id: "EONET_5387",
        title: "Iceberg D29A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_5387",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2021-06-11T00:00:00Z",
            type: "Point",
            coordinates: [21.67, -69.77],
          },
          {
            date: "2021-06-18T00:00:00Z",
            type: "Point",
            coordinates: [19.13, -69.68],
          },
          {
            date: "2021-06-25T00:00:00Z",
            type: "Point",
            coordinates: [17.86, -69.58],
          },
          {
            date: "2021-07-09T00:00:00Z",
            type: "Point",
            coordinates: [16.31, -69.37],
          },
          {
            date: "2021-07-23T00:00:00Z",
            type: "Point",
            coordinates: [13.54, -69.2],
          },
          {
            date: "2021-07-30T00:00:00Z",
            type: "Point",
            coordinates: [11.1, -69.62],
          },
          {
            date: "2021-08-06T00:00:00Z",
            type: "Point",
            coordinates: [8.2, -69.73],
          },
          {
            date: "2021-08-13T00:00:00Z",
            type: "Point",
            coordinates: [6.89, -69.91],
          },
          {
            date: "2021-08-20T00:00:00Z",
            type: "Point",
            coordinates: [2.35, -69.85],
          },
          {
            date: "2021-08-27T00:00:00Z",
            type: "Point",
            coordinates: [0.23, -69.42],
          },
          {
            date: "2021-09-03T00:00:00Z",
            type: "Point",
            coordinates: [-2.52, -69.71],
          },
          {
            date: "2021-09-10T00:00:00Z",
            type: "Point",
            coordinates: [-4.94, -69.83],
          },
          {
            date: "2021-09-17T00:00:00Z",
            type: "Point",
            coordinates: [-6.62, -69.9],
          },
          {
            date: "2021-09-24T00:00:00Z",
            type: "Point",
            coordinates: [-9.56, -70.12],
          },
          {
            date: "2021-10-01T00:00:00Z",
            type: "Point",
            coordinates: [-11.77, -70.47],
          },
          {
            date: "2021-10-08T00:00:00Z",
            type: "Point",
            coordinates: [-13.55, -70.9],
          },
          {
            date: "2021-10-22T00:00:00Z",
            type: "Point",
            coordinates: [-15.98, -71.82],
          },
          {
            date: "2021-11-12T00:00:00Z",
            type: "Point",
            coordinates: [-20.54, -72.82],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [-25.53, -73.41],
          },
          {
            date: "2022-02-11T00:00:00Z",
            type: "Point",
            coordinates: [-26.82, -72.71],
          },
          {
            date: "2022-02-18T00:00:00Z",
            type: "Point",
            coordinates: [-28.16, -73.1],
          },
          {
            date: "2022-02-25T00:00:00Z",
            type: "Point",
            coordinates: [-30.27, -73.54],
          },
          {
            date: "2022-03-11T00:00:00Z",
            type: "Point",
            coordinates: [-31.58, -73.14],
          },
          {
            date: "2022-03-25T00:00:00Z",
            type: "Point",
            coordinates: [-33.74, -72.75],
          },
          {
            date: "2022-04-15T00:00:00Z",
            type: "Point",
            coordinates: [-35.86, -72.26],
          },
          {
            date: "2022-05-06T00:00:00Z",
            type: "Point",
            coordinates: [-37.13, -71.76],
          },
          {
            date: "2022-05-13T00:00:00Z",
            type: "Point",
            coordinates: [-37.87, -71.06],
          },
          {
            date: "2022-06-17T00:00:00Z",
            type: "Point",
            coordinates: [-39.5, -71.75],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [-40.34, -71.18],
          },
          {
            date: "2022-07-08T00:00:00Z",
            type: "Point",
            coordinates: [-41.73, -70.63],
          },
          {
            date: "2022-07-15T00:00:00Z",
            type: "Point",
            coordinates: [-41.52, -70.13],
          },
          {
            date: "2022-08-19T00:00:00Z",
            type: "Point",
            coordinates: [-42.55, -69.68],
          },
          {
            date: "2022-09-09T00:00:00Z",
            type: "Point",
            coordinates: [-43.34, -69.25],
          },
          {
            date: "2022-09-23T00:00:00Z",
            type: "Point",
            coordinates: [-42.61, -68.61],
          },
          {
            date: "2022-10-07T00:00:00Z",
            type: "Point",
            coordinates: [-42.64, -68.04],
          },
          {
            date: "2022-10-21T00:00:00Z",
            type: "Point",
            coordinates: [-43.2, -67.22],
          },
          {
            date: "2022-11-04T00:00:00Z",
            type: "Point",
            coordinates: [-44.78, -66.92],
          },
          {
            date: "2022-11-11T00:00:00Z",
            type: "Point",
            coordinates: [-45.62, -66.48],
          },
          {
            date: "2022-11-25T00:00:00Z",
            type: "Point",
            coordinates: [-46.01, -65.87],
          },
          {
            date: "2022-12-16T00:00:00Z",
            type: "Point",
            coordinates: [-46.17, -65.28],
          },
          {
            date: "2023-01-06T00:00:00Z",
            type: "Point",
            coordinates: [-46.5, -64.76],
          },
          {
            date: "2023-01-20T00:00:00Z",
            type: "Point",
            coordinates: [-46.29, -64.21],
          },
          {
            date: "2023-01-27T00:00:00Z",
            type: "Point",
            coordinates: [-44.87, -63.89],
          },
          {
            date: "2023-02-03T00:00:00Z",
            type: "Point",
            coordinates: [-43.78, -63.77],
          },
          {
            date: "2023-02-17T00:00:00Z",
            type: "Point",
            coordinates: [-42.18, -63.59],
          },
          {
            date: "2023-03-03T00:00:00Z",
            type: "Point",
            coordinates: [-40.6, -63.37],
          },
          {
            date: "2023-03-17T00:00:00Z",
            type: "Point",
            coordinates: [-39.09, -63.24],
          },
          {
            date: "2023-03-31T00:00:00Z",
            type: "Point",
            coordinates: [-38.11, -63.12],
          },
          {
            date: "2023-04-21T00:00:00Z",
            type: "Point",
            coordinates: [-37.12, -63.24],
          },
          {
            date: "2023-05-19T00:00:00Z",
            type: "Point",
            coordinates: [-35.69, -63.6],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-34.61, -63.01],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-32.93, -62.97],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-35.33, -63.45],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-30.57, -62.23],
          },
          {
            date: "2023-08-11T00:00:00Z",
            type: "Point",
            coordinates: [-30.65, -61.55],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-29.01, -61.34],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-27.78, -60.34],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-26.64, -59.69],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-25.84, -59.08],
          },
          {
            date: "2023-11-17T00:00:00Z",
            type: "Point",
            coordinates: [-25.77, -58.61],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-26.22, -56.95],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-23.43, -60.81],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-20.42, -60.4],
          },
          {
            date: "2023-12-28T00:00:00Z",
            type: "Point",
            coordinates: [-18.36, -60.26],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-16.92, -60.27],
          },
          {
            date: "2024-01-11T00:00:00Z",
            type: "Point",
            coordinates: [-16.79, -59.09],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-14.96, -59.37],
          },
          {
            date: "2024-01-25T00:00:00Z",
            type: "Point",
            coordinates: [-13.15, -58.93],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-10.52, -58.33],
          },
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [-9.23, -58.5],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-15.04, -58.47],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-15.71, -56.1],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-4.04, -57.68],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-3.99, -56.87],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-15.71, -56.1],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-13.99, -56.26],
          },
        ],
      },
      {
        id: "EONET_5390",
        title: "Iceberg D30A",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_5390",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2021-06-11T00:00:00Z",
            type: "Point",
            coordinates: [18.59, -69.46],
          },
          {
            date: "2021-06-18T00:00:00Z",
            type: "Point",
            coordinates: [15.82, -69.19],
          },
          {
            date: "2021-06-25T00:00:00Z",
            type: "Point",
            coordinates: [13.07, -69.11],
          },
          {
            date: "2021-07-02T00:00:00Z",
            type: "Point",
            coordinates: [11.52, -69.07],
          },
          {
            date: "2021-07-09T00:00:00Z",
            type: "Point",
            coordinates: [10.08, -69.48],
          },
          {
            date: "2021-07-16T00:00:00Z",
            type: "Point",
            coordinates: [8.5, -69.57],
          },
          {
            date: "2021-07-23T00:00:00Z",
            type: "Point",
            coordinates: [6.26, -69.74],
          },
          {
            date: "2021-07-30T00:00:00Z",
            type: "Point",
            coordinates: [3.58, -69.89],
          },
          {
            date: "2021-08-06T00:00:00Z",
            type: "Point",
            coordinates: [-0.36, -69.4],
          },
          {
            date: "2021-08-13T00:00:00Z",
            type: "Point",
            coordinates: [-3.9, -70.01],
          },
          {
            date: "2021-08-20T00:00:00Z",
            type: "Point",
            coordinates: [-7.66, -70.35],
          },
          {
            date: "2021-08-27T00:00:00Z",
            type: "Point",
            coordinates: [-9.48, -70.34],
          },
          {
            date: "2021-09-03T00:00:00Z",
            type: "Point",
            coordinates: [-11.34, -70.83],
          },
          {
            date: "2021-09-10T00:00:00Z",
            type: "Point",
            coordinates: [-13.21, -70.97],
          },
          {
            date: "2021-09-17T00:00:00Z",
            type: "Point",
            coordinates: [-14.88, -71.49],
          },
          {
            date: "2021-09-24T00:00:00Z",
            type: "Point",
            coordinates: [-16.89, -71.84],
          },
          {
            date: "2021-10-01T00:00:00Z",
            type: "Point",
            coordinates: [-18.24, -72.34],
          },
          {
            date: "2021-10-08T00:00:00Z",
            type: "Point",
            coordinates: [-19.85, -72.51],
          },
          {
            date: "2021-10-22T00:00:00Z",
            type: "Point",
            coordinates: [-22.26, -73.19],
          },
          {
            date: "2021-11-12T00:00:00Z",
            type: "Point",
            coordinates: [-26.38, -73.69],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [-31.04, -74.44],
          },
          {
            date: "2022-04-01T00:00:00Z",
            type: "Point",
            coordinates: [-32.92, -74.29],
          },
          {
            date: "2022-04-15T00:00:00Z",
            type: "Point",
            coordinates: [-35.91, -74.45],
          },
          {
            date: "2022-04-22T00:00:00Z",
            type: "Point",
            coordinates: [-37.69, -74.31],
          },
          {
            date: "2022-05-06T00:00:00Z",
            type: "Point",
            coordinates: [-39.2, -73.97],
          },
          {
            date: "2022-05-20T00:00:00Z",
            type: "Point",
            coordinates: [-41.34, -73.52],
          },
          {
            date: "2022-06-03T00:00:00Z",
            type: "Point",
            coordinates: [-42.84, -73.21],
          },
          {
            date: "2022-06-17T00:00:00Z",
            type: "Point",
            coordinates: [-43.33, -73.93],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [-43.86, -73.45],
          },
          {
            date: "2022-07-08T00:00:00Z",
            type: "Point",
            coordinates: [-44.96, -73.12],
          },
          {
            date: "2022-07-22T00:00:00Z",
            type: "Point",
            coordinates: [-45.87, -72.59],
          },
          {
            date: "2022-08-05T00:00:00Z",
            type: "Point",
            coordinates: [-47.37, -72.39],
          },
          {
            date: "2022-09-02T00:00:00Z",
            type: "Point",
            coordinates: [-49.04, -72.13],
          },
          {
            date: "2022-09-16T00:00:00Z",
            type: "Point",
            coordinates: [-51.13, -71.79],
          },
          {
            date: "2022-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-51.99, -71.3],
          },
          {
            date: "2022-10-14T00:00:00Z",
            type: "Point",
            coordinates: [-53.0, -70.7],
          },
          {
            date: "2022-11-04T00:00:00Z",
            type: "Point",
            coordinates: [-54.78, -70.3],
          },
          {
            date: "2022-11-25T00:00:00Z",
            type: "Point",
            coordinates: [-54.67, -69.65],
          },
          {
            date: "2022-12-09T00:00:00Z",
            type: "Point",
            coordinates: [-54.94, -69.09],
          },
          {
            date: "2022-12-23T00:00:00Z",
            type: "Point",
            coordinates: [-55.11, -68.54],
          },
          {
            date: "2023-01-13T00:00:00Z",
            type: "Point",
            coordinates: [-55.05, -67.92],
          },
          {
            date: "2023-02-03T00:00:00Z",
            type: "Point",
            coordinates: [-54.92, -67.26],
          },
          {
            date: "2023-02-24T00:00:00Z",
            type: "Point",
            coordinates: [-54.73, -66.72],
          },
          {
            date: "2023-03-10T00:00:00Z",
            type: "Point",
            coordinates: [-54.36, -66.15],
          },
          {
            date: "2023-03-24T00:00:00Z",
            type: "Point",
            coordinates: [-54.11, -65.67],
          },
          {
            date: "2023-04-14T00:00:00Z",
            type: "Point",
            coordinates: [-54.22, -65.08],
          },
          {
            date: "2023-04-28T00:00:00Z",
            type: "Point",
            coordinates: [-53.85, -64.15],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-52.3, -63.6],
          },
          {
            date: "2023-06-02T00:00:00Z",
            type: "Point",
            coordinates: [-52.87, -62.95],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-54.07, -62.48],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-55.16, -62.23],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-52.87, -62.95],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-56.67, -62.28],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-52.87, -62.95],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-55.6, -62.0],
          },
          {
            date: "2023-08-18T00:00:00Z",
            type: "Point",
            coordinates: [-54.56, -61.94],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-53.66, -61.59],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-54.25, -60.88],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-54.24, -60.29],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-54.0, -59.09],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-52.04, -57.85],
          },
          {
            date: "2023-10-13T00:00:00Z",
            type: "Point",
            coordinates: [-48.33, -58.23],
          },
          {
            date: "2023-10-20T00:00:00Z",
            type: "Point",
            coordinates: [-47.08, -57.66],
          },
          {
            date: "2023-11-17T00:00:00Z",
            type: "Point",
            coordinates: [-46.19, -57.84],
          },
          {
            date: "2023-11-24T00:00:00Z",
            type: "Point",
            coordinates: [-44.15, -56.82],
          },
          {
            date: "2023-12-08T00:00:00Z",
            type: "Point",
            coordinates: [-42.85, -56.2],
          },
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-41.41, -56.45],
          },
          {
            date: "2023-12-21T00:00:00Z",
            type: "Point",
            coordinates: [-40.95, -55.85],
          },
          {
            date: "2023-12-28T00:00:00Z",
            type: "Point",
            coordinates: [-37.93, -55.29],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-36.31, -55.64],
          },
          {
            date: "2024-01-11T00:00:00Z",
            type: "Point",
            coordinates: [-35.12, -56.02],
          },
          {
            date: "2024-01-18T00:00:00Z",
            type: "Point",
            coordinates: [-34.19, -55.07],
          },
          {
            date: "2024-01-25T00:00:00Z",
            type: "Point",
            coordinates: [-35.49, -54.01],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-36.07, -53.27],
          },
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [-37.47, -52.22],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-37.11, -53.19],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-37.32, -52.14],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-38.45, -52.48],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-37.32, -52.14],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-38.37, -52.67],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-30.45, -55.42],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-31.58, -55.0],
          },
        ],
      },
      {
        id: "EONET_5907",
        title: "Iceberg A78",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_5907",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2021-08-27T00:00:00Z",
            type: "Point",
            coordinates: [-4.03, -70.35],
          },
          {
            date: "2022-02-04T00:00:00Z",
            type: "Point",
            coordinates: [-18.09, -72.16],
          },
          {
            date: "2022-02-11T00:00:00Z",
            type: "Point",
            coordinates: [-20.55, -72.54],
          },
          {
            date: "2022-02-18T00:00:00Z",
            type: "Point",
            coordinates: [-21.63, -73.29],
          },
          {
            date: "2022-02-25T00:00:00Z",
            type: "Point",
            coordinates: [-23.65, -73.47],
          },
          {
            date: "2022-03-04T00:00:00Z",
            type: "Point",
            coordinates: [-26.19, -73.51],
          },
          {
            date: "2022-03-25T00:00:00Z",
            type: "Point",
            coordinates: [-28.75, -72.98],
          },
          {
            date: "2022-04-08T00:00:00Z",
            type: "Point",
            coordinates: [-30.44, -73.19],
          },
          {
            date: "2022-04-22T00:00:00Z",
            type: "Point",
            coordinates: [-32.59, -73.11],
          },
          {
            date: "2022-05-13T00:00:00Z",
            type: "Point",
            coordinates: [-34.6, -72.6],
          },
          {
            date: "2022-05-27T00:00:00Z",
            type: "Point",
            coordinates: [-35.54, -72.23],
          },
          {
            date: "2022-06-03T00:00:00Z",
            type: "Point",
            coordinates: [-36.98, -72.12],
          },
          {
            date: "2022-06-17T00:00:00Z",
            type: "Point",
            coordinates: [-39.49, -73.12],
          },
          {
            date: "2022-06-24T00:00:00Z",
            type: "Point",
            coordinates: [-40.31, -72.65],
          },
          {
            date: "2022-07-08T00:00:00Z",
            type: "Point",
            coordinates: [-41.66, -72.09],
          },
          {
            date: "2022-07-15T00:00:00Z",
            type: "Point",
            coordinates: [-41.46, -71.45],
          },
          {
            date: "2022-08-05T00:00:00Z",
            type: "Point",
            coordinates: [-43.34, -71.44],
          },
          {
            date: "2022-09-02T00:00:00Z",
            type: "Point",
            coordinates: [-44.58, -71.11],
          },
          {
            date: "2022-09-09T00:00:00Z",
            type: "Point",
            coordinates: [-45.68, -70.78],
          },
          {
            date: "2022-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-45.55, -70.32],
          },
          {
            date: "2022-10-21T00:00:00Z",
            type: "Point",
            coordinates: [-45.81, -69.74],
          },
          {
            date: "2022-11-04T00:00:00Z",
            type: "Point",
            coordinates: [-47.57, -69.47],
          },
          {
            date: "2022-11-25T00:00:00Z",
            type: "Point",
            coordinates: [-46.57, -68.84],
          },
          {
            date: "2022-12-30T00:00:00Z",
            type: "Point",
            coordinates: [-46.32, -68.28],
          },
          {
            date: "2023-03-17T00:00:00Z",
            type: "Point",
            coordinates: [-47.63, -68.29],
          },
          {
            date: "2023-05-12T00:00:00Z",
            type: "Point",
            coordinates: [-47.23, -67.85],
          },
          {
            date: "2023-06-09T00:00:00Z",
            type: "Point",
            coordinates: [-45.77, -67.67],
          },
          {
            date: "2023-06-15T00:00:00Z",
            type: "Point",
            coordinates: [-47.36, -66.78],
          },
          {
            date: "2023-06-23T00:00:00Z",
            type: "Point",
            coordinates: [-46.3, -67.58],
          },
          {
            date: "2023-06-30T00:00:00Z",
            type: "Point",
            coordinates: [-47.04, -65.33],
          },
          {
            date: "2023-07-14T00:00:00Z",
            type: "Point",
            coordinates: [-46.14, -64.48],
          },
          {
            date: "2023-07-28T00:00:00Z",
            type: "Point",
            coordinates: [-46.3, -67.58],
          },
          {
            date: "2023-08-04T00:00:00Z",
            type: "Point",
            coordinates: [-41.46, -63.81],
          },
          {
            date: "2023-08-11T00:00:00Z",
            type: "Point",
            coordinates: [-40.31, -63.58],
          },
          {
            date: "2023-08-18T00:00:00Z",
            type: "Point",
            coordinates: [-39.05, -63.35],
          },
          {
            date: "2023-09-01T00:00:00Z",
            type: "Point",
            coordinates: [-37.95, -63.79],
          },
          {
            date: "2023-09-15T00:00:00Z",
            type: "Point",
            coordinates: [-38.44, -63.03],
          },
          {
            date: "2023-09-22T00:00:00Z",
            type: "Point",
            coordinates: [-37.25, -62.97],
          },
          {
            date: "2023-09-30T00:00:00Z",
            type: "Point",
            coordinates: [-36.94, -62.5],
          },
          {
            date: "2023-10-06T00:00:00Z",
            type: "Point",
            coordinates: [-34.99, -62.03],
          },
          {
            date: "2023-10-13T00:00:00Z",
            type: "Point",
            coordinates: [-34.03, -61.79],
          },
          {
            date: "2023-11-09T00:00:00Z",
            type: "Point",
            coordinates: [-32.94, -60.95],
          },
          {
            date: "2023-11-24T00:00:00Z",
            type: "Point",
            coordinates: [-31.36, -60.88],
          },
          {
            date: "2024-01-04T00:00:00Z",
            type: "Point",
            coordinates: [-31.56, -60.37],
          },
          {
            date: "2024-01-25T00:00:00Z",
            type: "Point",
            coordinates: [-31.09, -59.72],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-30.4, -59.35],
          },
          {
            date: "2024-03-07T00:00:00Z",
            type: "Point",
            coordinates: [-29.23, -59.11],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-28.29, -59.02],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-29.73, -59.48],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-27.87, -59.0],
          },
          {
            date: "2024-04-05T00:00:00Z",
            type: "Point",
            coordinates: [-28.31, -59.53],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-26.86, -58.58],
          },
        ],
      },
      {
        id: "EONET_6465",
        title: "Iceberg A82",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6465",
        categories: [
          {
            id: 15,
            title: "Sea and Lake Ice",
          },
        ],
        sources: [
          {
            id: "NATICE",
            url: "https://usicecenter.gov/pub/Iceberg_Tabular.csv",
          },
        ],
        geometries: [
          {
            date: "2023-12-15T00:00:00Z",
            type: "Point",
            coordinates: [-72.42, -72.85],
          },
          {
            date: "2024-01-25T00:00:00Z",
            type: "Point",
            coordinates: [-80.49, -72.73],
          },
          {
            date: "2024-02-02T00:00:00Z",
            type: "Point",
            coordinates: [-82.76, -73.37],
          },
          {
            date: "2024-02-08T00:00:00Z",
            type: "Point",
            coordinates: [-85.62, -72.77],
          },
          {
            date: "2024-02-16T00:00:00Z",
            type: "Point",
            coordinates: [-87.87, -72.67],
          },
          {
            date: "2024-02-23T00:00:00Z",
            type: "Point",
            coordinates: [-89.05, -72.37],
          },
          {
            date: "2024-03-01T00:00:00Z",
            type: "Point",
            coordinates: [-90.34, -71.7],
          },
          {
            date: "2024-03-15T00:00:00Z",
            type: "Point",
            coordinates: [-91.87, -71.94],
          },
          {
            date: "2024-03-22T00:00:00Z",
            type: "Point",
            coordinates: [-90.34, -71.7],
          },
          {
            date: "2024-03-29T00:00:00Z",
            type: "Point",
            coordinates: [-93.2, -71.9],
          },
          {
            date: "2024-04-12T00:00:00Z",
            type: "Point",
            coordinates: [-94.08, -71.27],
          },
        ],
      },
      {
        id: "EONET_6583",
        title: "Dry Prong Wildfire, Perry, Mississippi",
        description: "",
        link: "https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6583",
        categories: [
          {
            id: 8,
            title: "Wildfires",
          },
        ],
        sources: [
          {
            id: "IRWIN",
            url: "https://irwin.doi.gov/observer/",
          },
        ],
        geometries: [
          {
            date: "2024-01-21T18:43:00Z",
            type: "Point",
            coordinates: [-89.131167, 31.158833],
          },
        ],
      },
    ],
  };

  let eventsData: Event[] = data["events"].map((eve: Event) => ({
    ...eve,
    geometries: eve.geometries.map((geometry: Geometry) => {
      const reversedCoordinates: Location = [
        geometry.coordinates[1],
        geometry.coordinates[0],
      ];
      return {
        ...geometry,
        coordinates: reversedCoordinates,
      };
    }),
  }));

  return eventsData.slice(1, 50);
};
