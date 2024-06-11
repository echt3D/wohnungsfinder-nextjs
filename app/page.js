import { createClient } from "@/prismicio";
import Wohnungsfinder from "./components/Wohnungsfinder";
import AptProvider from "./components/AptProvider";
import Navigations from "./components/Navigations";
import Sidebar from "./components/Sidebar";

const Home = async () => {
  const client = createClient();
  const apartments = await client.getSingle("wohnung");

  return (
    <AptProvider>
      <main className="flex">
        <section className="w-screen h-[90vh] xl:w-[80vw] xl:h-screen relative">
          <Wohnungsfinder apartments={apartments.data.wohnung} />
          <Navigations />
        </section>
        <Sidebar apartments={apartments.data.wohnung} />
      </main>
    </AptProvider>
  );
};

export default Home;
