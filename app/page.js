import { createClient } from "@/prismicio";
import Wohnungsfinder from "./components/Wohnungsfinder";
import AptProvider from "./components/AptProvider";
import Sidebar from "./components/Sidebar";

const Home = async () => {
  const client = createClient();
  const apartments = await client.getSingle("wohnung");

  return (
    <AptProvider>
      <main className="flex">
        <Wohnungsfinder apartments={apartments.data.wohnung} />
        <Sidebar apartments={apartments.data.wohnung} />
      </main>
    </AptProvider>
  );
};

export default Home;
