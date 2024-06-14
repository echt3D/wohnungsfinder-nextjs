"use client";
import { useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";
import { strToNum } from "../utils/format";

const AptProvider = ({ children }) => {
  const [hoveredApt, setHoveredApt] = useState(null);
  const [clickedApt, setClickedApt] = useState(null);
  const [bgImage, setBgImage] = useState(1005);
  const [likedApts, setLikedApts] = useState([]);
  const [sort, setSort] = useState({ method: "", direction: "descendent" });
  const [price, setPrice] = useState([null, null]);
  const [space, setSpace] = useState([null, null]);

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

  const filterByRange = (apartments, category, min, max) =>
    apartments.filter(
      (apartment) =>
        strToNum(apartment[category]) >= min &&
        strToNum(apartment[category]) <= max
    );

  const sortApts = (apartments, category, direction) => {
    const apartmentsCopy = [...apartments];

    console.log("price", price, "space", space);

    const filteredByPrice = filterByRange(
      apartmentsCopy,
      "price",
      price[0],
      price[1]
    );

    console.log("filteredByPrice", filteredByPrice);

    const filteredBySpace = filterByRange(
      filteredByPrice,
      "space",
      space[0],
      space[1]
    );

    console.log("filteredBySpace", filteredBySpace);

    switch (direction) {
      case "descendent":
        filteredBySpace.sort(
          (apartmentA, apartmentB) =>
            Number(apartmentA[category]) - Number(apartmentB[category])
        );
        break;
      case "ascendent":
        filteredBySpace.sort(
          (apartmentA, apartmentB) =>
            Number(apartmentB[category]) - Number(apartmentA[category])
        );
        break;
    }
    return filteredBySpace;
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
    price,
    setPrice,
    space,
    setSpace,
  };

  return <AptContext.Provider value={value}>{children}</AptContext.Provider>;
};

export default AptProvider;
