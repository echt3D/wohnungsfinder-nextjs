import { createContext } from "react";

export const AptContext = createContext({
  hoveredApt: {},
  setHoveredApt: () => {},
  clickedApt: {},
  setClickedApt: () => {},
  isHovered: () => {},
});
