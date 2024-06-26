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
  sortApts: () => {},
  handleSort: () => {},
  sort: {},
  setSort: () => {},
  filterByRange: () => {},
  price: [],
  setPrice: () => {},
  space: [],
  setSpace: () => {},
  checkbox: {},
  setCheckbox: () => {},
  handleCheckbox: () => {},
});
