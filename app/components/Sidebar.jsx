"use client";
import SidebarCard from "./SidebarCard";
import FilterButton from "./FilterButton";
import Filter from "./Filter";
import Image from "next/image";
import { useState, useContext } from "react";
import { AptContext } from "../utils/createContext";

const Sidebar = ({ apartments, maxPrice, minPrice }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { sortApts, sort } = useContext(AptContext);
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
          {sortApts(apartments, sort.method, sort.direction).map(
            (apartment, i) => (
              <li
                key={i}
                className="w-full border border-black p-2 rounded-2xl"
              >
                <SidebarCard apartment={apartment} />
              </li>
            )
          )}
        </ul>
      </div>
      {openFilter ? (
        <Filter
          setOpenFilter={setOpenFilter}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />
      ) : (
        <FilterButton setOpenFilter={setOpenFilter} />
      )}
    </aside>
  );
};

export default Sidebar;
