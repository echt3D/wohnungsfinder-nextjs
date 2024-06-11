import SidebarCard from "./SidebarCard";
import Image from "next/image";

const Sidebar = ({ apartments }) => {
  return (
    <aside className="hidden xl:flex w-20vw h-screen  overflow-y-scroll p-4 flex-col items-center gap-4">
      <div>
        <Image src="/logos/echt3d-logo.png" width={120} height={120} alt="logo" />
      </div>
      <ul className="w-full flex flex-col gap-2">
        {apartments.map((apartment, i) => (
          <li key={i} className="w-full border border-black p-2 rounded-2xl">
            <SidebarCard apartment={apartment} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
