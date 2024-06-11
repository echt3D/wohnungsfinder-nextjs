"use client";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";
const SidebarCard = ({ apartment }) => {
  const { hoveredApt, setHoveredApt, handleLikedApts, isLikedApt } =
    useContext(AptContext);
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
          <div
            onClick={() => handleLikedApts(apartment.apt_id)}
            className={`w-8 h-8 flex place-items-center border-2 ${isLikedApt(apartment.apt_id) ? "border-red-500" : "border-black"} rounded-full  cursor-pointer`}
          >
            <svg viewBox="-2 0 24 24" width="25" height="25">
              <path
                opacity=".2"
                fill={`${isLikedApt(apartment.apt_id) ? "red" : "black"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1 18.2916L12 18.3896L11.9 18.2916C7.14 14.0638 4 11.2681 4 8.43324C4 6.47139 5.5 5 7.5 5C9.04 5 10.54 5.97112 11.07 7.31499H12.94C13.46 5.97112 14.96 5 16.5 5C18.5 5 20 6.47139 20 8.43324C20 11.2681 16.86 14.0638 12.1 18.2916Z"
              ></path>
              <path
                fill={`${isLikedApt(apartment.apt_id) ? "red" : "black"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 5.05014C13.09 3.79455 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 12.1 18.6056 15.1193 13.4627 19.6939L13.45 19.7052L12 21L10.55 19.715L10.5105 19.6798C5.38263 15.1088 2 12.0935 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.79455 12 5.05014ZM12 18.3515L12.1 18.2534C16.86 14.0256 20 11.23 20 8.3951C20 6.43324 18.5 4.96185 16.5 4.96185C14.96 4.96185 13.46 5.93297 12.94 7.27684H11.07C10.54 5.93297 9.04 4.96185 7.5 4.96185C5.5 4.96185 4 6.43324 4 8.3951C4 11.23 7.14 14.0256 11.9 18.2534L12 18.3515Z"
              ></path>
            </svg>
          </div>
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
