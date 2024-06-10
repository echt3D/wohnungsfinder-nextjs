"use client";
import { useState } from "react";
import { AptContext } from "../utils/createContext";

const AptProvider = ({ children }) => {
  const [hoveredApt, setHoveredApt] = useState(null);
  const [clickedApt, setClickedApt] = useState(null);
  const [bgImage, setBgImage] = useState(1005);

  const value = {
    hoveredApt,
    setHoveredApt,
    clickedApt,
    setClickedApt,
    bgImage,
    setBgImage,
  };

  return <AptContext.Provider value={value}>{children}</AptContext.Provider>;
};

export default AptProvider;
