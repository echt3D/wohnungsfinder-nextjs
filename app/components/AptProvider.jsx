"use client";
import { useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";

const test = [
  {
    apt_id: "2",
    number: "1",
    rooms: "4.5",
    status: "reserviert",
    space: "115.2",
    floor: "Erdgeschoss",
    price: "1’851’000",
  },
  {
    apt_id: "1",
    number: "9901",
    rooms: "4.5",
    status: "frei",
    space: "131.6",
    floor: "Gartengeschoss",
    price: "1’801’000",
  },
  {
    apt_id: "3",
    number: "2",
    rooms: "4.5",
    status: "frei",
    space: "114.8",
    floor: "Erdgeschoss",
    price: "1’811’000",
  },
  {
    apt_id: "4",
    number: "101",
    rooms: "4.5",
    status: "frei",
    space: "115.2",
    floor: "Obergeschoss",
    price: "1’921’000",
  },
  {
    apt_id: "6",
    number: "201",
    rooms: "3.5",
    status: "frei",
    space: "85.9",
    floor: "Attikagechoss",
    price: "1’635’000",
  },
  {
    apt_id: "5",
    number: "102",
    rooms: "4.5",
    status: "verkauft",
    space: "114.8",
    floor: "Obergeschoss",
    price: "1’881’000",
  },
  {
    apt_id: "7",
    number: "202",
    rooms: "3.5",
    status: "frei",
    space: "85.4",
    floor: "Attikagechoss",
    price: "1’631’000",
  },
];

const AptProvider = ({ children }) => {
  const [hoveredApt, setHoveredApt] = useState(null);
  const [clickedApt, setClickedApt] = useState(null);
  const [bgImage, setBgImage] = useState(1005);
  const [likedApts, setLikedApts] = useState([]);

  const handleLikedApts = (apartment) => {
    if (likedApts.includes(apartment)) {
      const removedLikedApts = likedApts.filter(
        (likedApt) => likedApt !== apartment
      );
      setLikedApts(removedLikedApts);
      localStorage.setItem("likedApts", JSON.stringify(removedLikedApts));
    } else {
      likedApts.push(apartment);
      setLikedApts(likedApts);
      localStorage.setItem("likedApts", JSON.stringify(likedApts));
    }
  };

  const isLikedApt = (apartment) => likedApts.includes(apartment);

  useEffect(() => {
    const storedLikedApts = localStorage.getItem("likedApts");
    if (storedLikedApts) setLikedApts(JSON.parse(storedLikedApts));
  }, []);

  const convertFloorsToNumber = (floor) => {
    console.log("floor in function", floor);
    switch (floor) {
      case "Erdgeschoss":
        return 1;
      case "Obergeschoss":
        return 2;
      case "Attikageschoss":
        return 3;
      case "Gartengeschoss":
        return 0;
      default:
        console.log("something went wrong in convertFloorsToNumber");
    }
  };

  const changeFloorValue = (apartments) => {
    for (const apartment of apartments) {
      
      const newApartment = {
        ...apartment,
        floor: convertFloorsToNumber(apartment.floor),
      };
      console.log("new apartment", newApartment);
    }
    return apartments;
  };

  const handleSort = (apartments, method, direction) => {
    const apartmentsCopy = changeFloorValue([...apartments]);

    switch (direction) {
      case "descendent":
        apartmentsCopy.sort(
          (apartmentA, apartmentB) =>
            Number(apartmentA[method]) - Number(apartmentB[method])
        );
      case "ascendent":
        apartmentsCopy.sort(
          (apartmentA, apartmentB) =>
            Number(apartmentB[method]) - Number(apartmentA[method])
        );
      default:
        console.log("something went wrong in handleSort");
    }
    return apartmentsCopy;
  };

  console.log("handleSOrt", handleSort(test, "floor", "deschendent"));

  const value = {
    hoveredApt,
    setHoveredApt,
    clickedApt,
    setClickedApt,
    bgImage,
    setBgImage,
    likedApts,
    setLikedApts,
    handleLikedApts,
    isLikedApt,
  };

  return <AptContext.Provider value={value}>{children}</AptContext.Provider>;
};

export default AptProvider;
