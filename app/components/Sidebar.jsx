"use client";
import SidebarCard from "./SidebarCard";
import FilterButton from "./FilterButton";
import Filter from "./Filter";
import Image from "next/image";
import { useState } from "react";

const Sidebar = ({ apartments }) => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <aside className="hidden xl:flex w-20vw  flex-col items-center  p-4  gap-4 relative">
      <div>
        <Image
          src="/logos/echt3d-logo.png"
          width={120}
          height={120}
          alt="logo"
        />
      </div>
      <div className="h-[83vh] overflow-y-scroll w-full">
        <ul className="w-full flex flex-col gap-2">
          {apartments.map((apartment, i) => (
            <li key={i} className="w-full border border-black p-2 rounded-2xl">
              <SidebarCard apartment={apartment} />
            </li>
          ))}
        </ul>
      </div>
      {openFilter ? <Filter /> : <FilterButton setOpenFilter={setOpenFilter} />}
    </aside>
  );
};

export default Sidebar;
