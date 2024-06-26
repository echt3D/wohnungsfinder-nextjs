// import * as prismic from "@prismicio/client";
import Wohnungsfinder from "./components/Wohnungsfinder";
import AptProvider from "./components/AptProvider";
import Navigations from "./components/Navigations";
import Sidebar from "./components/Sidebar";
import { strToNum } from "./utils/format";

const Home = async () => {
  // const client = prismic.createClient();
  // const apartments = await client.getSingle("wohnung");

  // console.log(apartments.data.wohnung);

  const apartments = [
    {
      apt_id: "2",
      number: "1",
      rooms: "4.5",
      status: "reserviert",
      space: "115.2",
      floor: "Erdgeschoss",
      floor_num: 1,
      price: "1’851’000",
    },
    {
      apt_id: "1",
      number: "9901",
      rooms: "4.5",
      status: "frei",
      space: "131.6",
      floor: "Gartengeschoss",
      floor_num: 0,
      price: "1’801’000",
    },
    {
      apt_id: "3",
      number: "2",
      rooms: "4.5",
      status: "frei",
      space: "114.8",
      floor: "Erdgeschoss",
      floor_num: 1,
      price: "1’811’000",
    },
    {
      apt_id: "4",
      number: "101",
      rooms: "4.5",
      status: "frei",
      space: "115.2",
      floor: "Obergeschoss",
      floor_num: 2,
      price: "1’921’000",
    },
    {
      apt_id: "6",
      number: "201",
      rooms: "3.5",
      status: "frei",
      space: "85.9",
      floor: "Attikagechoss",
      floor_num: 3,
      price: "1’635’000",
    },
    {
      apt_id: "5",
      number: "102",
      rooms: "4.5",
      status: "verkauft",
      space: "114.8",
      floor: "Obergeschoss",
      floor_num: 2,
      price: "1’881’000",
    },
    {
      apt_id: "7",
      number: "202",
      rooms: "3.5",
      status: "frei",
      space: "85.4",
      floor: "Attikagechoss",
      floor_num: 3,
      price: "1’631’000",
    },
  ];

  const getMinMax = (apartments, category) => {
    apartments.sort(
      (apartment1, apartment2) =>
        strToNum(apartment1[category]) - strToNum(apartment2[category])
    );

    const min = strToNum(apartments[0][category]);
    const max = strToNum(apartments[apartments.length - 1][category]);

    return {
      min,
      max,
    };
  };

  return (
    <AptProvider>
      <main className="flex relative">
        <section className="">
          <Wohnungsfinder apartments={apartments} />
          <Navigations />
        </section>
        <Sidebar
          apartments={apartments}
          maxPrice={getMinMax(apartments, "price").max}
          minPrice={getMinMax(apartments, "price").min}
          maxSpace={getMinMax(apartments, "space").max}
          minSpace={getMinMax(apartments, "space").min}
        />
      </main>
    </AptProvider>
  );
};

export default Home;
