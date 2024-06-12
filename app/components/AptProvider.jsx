"use client";
import { useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";

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
    switch (floor) {
      case "Erdgeschoss":
        return 1;
      case "Obergeschoss":
        return 2;
      case "Attikagechoss":
        return 3;
      case "Gartengeschoss":
        return 0;
    }
  };

  const changeFloorValue = (apartments) => {
    const newArr = [];
    for (const apartment of apartments) {
      const newApartment = {
        ...apartment,
        floor: convertFloorsToNumber(apartment.floor),
      };
      newArr.push(newApartment);
    }

    return newArr;
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
        return apartmentsCopy;
    }
  };

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
    handleSort,
  };

  return <AptContext.Provider value={value}>{children}</AptContext.Provider>;
};

export default AptProvider;
