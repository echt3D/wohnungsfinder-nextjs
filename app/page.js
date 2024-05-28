import { createClient } from "@/prismicio";
import Wohnungsfinder from "./components/Wohnungsfinder";

const Home = async () => {
  const client = createClient();

  try {
    const apartments = await client.getSingle("wohnung");
    console.log(apartments);
  } catch (error) {
    console.error("what's wrong?: ", error);
  }

  return (
    <main className="">
      <Wohnungsfinder />
    </main>
  );
};

export default Home;
