"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { AptContext } from "../utils/createContext";
const SidebarCard = ({ apartment }) => {
  const { hoveredApt, setHoveredApt } = useContext(AptContext);
  const [openDetails, setOpenDetails] = useState(false);

  const formatFloorName = (floor) => {
    switch (floor) {
      case "Gartengeschoss":
        return "GG";
      case "Erdgeschoss":
        return "EG";
      case "Obergeschoss":
        return "OG";
      case "Attikagechoss":
        return "AG";
      default:
        "--";
    }
  };

  return (
    <div
      onMouseEnter={() => setHoveredApt(apartment)}
      onMouseLeave={() => setHoveredApt("")}
      className="flex flex-col gap-6"
    >
      <section>
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
        {openDetails ? (
          <div
            className={`${openDetails ? "max-h-60" : "max-h-0"} transition-[height] duration-700 ease-in-out`}
          >
            <div>
              <p className="text-sm">Geschoss</p>
              <p>{apartment.floor}</p>
            </div>
            <div>
              <p className="text-sm">Fläche</p>
              <p>{apartment.space} m²</p>
            </div>
            <div>
              <p className="text-sm">Terasse</p>
              <p>{apartment.space} m²</p>
            </div>
          </div>
        ) : (
          <div className="flex text-sm w-1/2 gap-8">
            <p>{formatFloorName(apartment.floor)}</p>
            <p>{apartment.space} m²</p>
          </div>
        )}
      </section>
      <section className="flex justify-between items-center">
        <div>
          <p className="text-sm">Preis</p>
          <p>{apartment.price}</p>
        </div>
        {!openDetails && (
          <button
            className="w-1/5 border border-black rounded-2xl text-center hover:bg-verkauft hover:bg-opacity-50 transition-all duration-200"
            onClick={() => setOpenDetails(true)}
          >
            Mehr
          </button>
        )}
      </section>
      {openDetails && (
        <section className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <button className="w-1/2 border border-black rounded-2xl text-center hover:bg-verkauft hover:bg-opacity-50 transition-all duration-200">
              Grundrisse
            </button>
            <button className="w-1/2 border border-black rounded-2xl text-center hover:bg-verkauft hover:bg-opacity-50 transition-all duration-200">
              Ansicht
            </button>
          </div>
          <button className="w-full border border-black rounded-2xl text-center hover:bg-verkauft hover:bg-opacity-50 transition-all duration-200">
            Bewerben
          </button>
          <button
            onClick={() => setOpenDetails(false)}
            className="underline text-xs self-end hover:opacity-50 transition-all duration-300"
          >
            schliessen
          </button>
        </section>
      )}
    </div>
  );
};

export default SidebarCard;
