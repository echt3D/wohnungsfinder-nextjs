"use client";
import SidebarCard from "./SidebarCard";
import FilterButton from "./FilterButton";
import Filter from "./Filter";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { AptContext } from "../utils/createContext";

const Sidebar = ({ apartments, maxPrice, minPrice, maxSpace, minSpace }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { sortApts, sort, setPrice, setSpace } = useContext(AptContext);

  useEffect(() => {
    setPrice([minPrice, maxPrice]);
    setSpace([minSpace, maxSpace]);
  }, []);

  return (
    <aside className="hidden xl:flex w-[375px] flex-col items-center  p-4  gap-4 absolute z-1000 border-blue-500 border-2 bg-white">
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
          apartments={apartments}
          setOpenFilter={setOpenFilter}
          maxPrice={maxPrice}
          minPrice={minPrice}
          maxSpace={maxSpace}
          minSpace={minSpace}
        />
      ) : (
        <FilterButton setOpenFilter={setOpenFilter} />
      )}
    </aside>
  );
};

export default Sidebar;
