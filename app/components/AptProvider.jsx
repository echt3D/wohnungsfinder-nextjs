"use client";
import { useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";

const AptProvider = ({ children }) => {
  const [hoveredApt, setHoveredApt] = useState(null);
  const [clickedApt, setClickedApt] = useState(null);
  const [bgImage, setBgImage] = useState(1005);
  const [likedApts, setLikedApts] = useState([]);
  const [sort, setSort] = useState({ method: "", direction: "descendent" });

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

  const sortApts = (apartments, method, direction) => {
    const apartmentsCopy = [...apartments];

    switch (direction) {
      case "descendent":
        apartmentsCopy.sort(
          (apartmentA, apartmentB) =>
            Number(apartmentA[method]) - Number(apartmentB[method])
        );
        console.log("descendent here");
        break;
      case "ascendent":
        apartmentsCopy.sort(
          (apartmentA, apartmentB) =>
            Number(apartmentB[method]) - Number(apartmentA[method])
        );
        console.log("ascendent here");
        break;
    }
    console.log("apartmentsCopy", apartmentsCopy);
    return apartmentsCopy;
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort({ ...sort, [name]: value });
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
    sortApts,
    handleSort,
    sort,
    setSort,
  };

  return <AptContext.Provider value={value}>{children}</AptContext.Provider>;
};

export default AptProvider;
