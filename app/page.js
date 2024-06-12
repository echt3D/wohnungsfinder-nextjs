// import * as prismic from "@prismicio/client";
import Wohnungsfinder from "./components/Wohnungsfinder";
import AptProvider from "./components/AptProvider";
import Navigations from "./components/Navigations";
import Sidebar from "./components/Sidebar";

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

  return (
    <AptProvider>
      <main className="flex">
        <section className="w-screen h-[90vh] xl:w-[80vw] xl:h-screen relative">
          <Wohnungsfinder apartments={apartments} />
          <Navigations />
        </section>
        <Sidebar apartments={apartments} />
      </main>
    </AptProvider>
  );
};

export default Home;
