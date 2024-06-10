"use client";
import Image from "next/image";
import { useContext } from "react";
import { AptContext } from "../utils/createContext";
const SidebarCard = ({ apartment }) => {
  const { hoveredApt, setHoveredApt } = useContext(AptContext);
  return (
    <div
      onMouseEnter={() => setHoveredApt(apartment)}
      onMouseLeave={() => setHoveredApt("")}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`px-2 flex items-center gap-2 bg-${apartment.status} rounded-2xl bg-opacity-30`}
          >
            <div
              className={`w-2 h-2 bg-${apartment.status} rounded-full`}
            ></div>
            <p className={`text-sm text-${apartment.status}`}>
              {apartment.status}
            </p>
          </div>
          <div className="text-sm">{`Whg. Nr. ${apartment.number}`}</div>
        </div>
        <Image src="/images/like.svg" width={32} height={32} alt="like" />
      </div>
      <div>
        <div className="text-lg">{`${apartment.rooms}-Zimmer Wohnung`}</div>
      </div>
    </div>
  );
};

export default SidebarCard;
