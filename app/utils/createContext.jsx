import { createContext } from "react";

export const AptContext = createContext({
  hoveredApt: {},
  setHoveredApt: () => {},
  clickedApt: {},
  setClickedApt: () => {},
  isHovered: () => {},
  bgImage: "",
  setBgImage: () => {},
  likedApts: [],
  setLikedApts: () => {},
  handleLikedApts: () => {},
  isLikedApt: () => {},
});
