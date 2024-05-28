"use client";
import { useContext } from "react";
import { AptContext } from "../utils/createContext";
import MouseCard from "./MouseCard";

const Wohnungsfinder = ({ apartments }) => {
  const { hoveredApt, setHoveredApt } = useContext(AptContext);
  console.log("hoveredApt", hoveredApt);

  const svgArr = [
    "m1143.27,473.03l-5.54,43.06-89.22-.7-153.23-1.22h0l10.98-15.7-3.27-75.06,30.7-37.29,170.58.19.16,11.48,38.45.05.38,75.19Z",
    "m1499.47,451.01l-4.5,76.19-91.97-.15-171.38-.27-1.61-14.4-4.66-41.73.61-73.35,50.93.06,2.03,7.31,51.94.06h-3.42s.23-7.31.23-7.31l127.4.15,44.42,53.44Z",
    "m1143.27,516.09l-5.05,69.3-2.21,22.8-251-.47-.25-4.6,11.77-22.54-1.24-66.4,242.43,1.93,5.55-42.78h0v42.77Z",
    "m1505.26,617.85l-.33,4.72-272.03-.52-2.08-23.98-6.08-70.45.6-56.97,6.27,56.13,263.36.42-4.08,66.82,14.37,23.84Z",
    "m1143.27,568.89l-4.55,78.65-2.19,25.28-247.52-.52-.28-4.47,12.94-25.06-2.05-35.03,236.38.44h0l7.27-92.1v52.81Z",
    "m1506.36,695.12h0l-273.89-1.75-2.4-31.77-5.91-78.33.58-55.65,6.08,70.45,2.08,23.98,256.08.49-2.35,35.18,19.74,37.4Z",
    "M1583.1,735.4l-79.7-0.9v0.2l3-39.6l-273.9-1.8l-3.6-48.2l-0.7,60.3l3.3,49.7l-210.4-0.2l-6.7,31.9l219.2,1.1l378.2,0.9l0.4-4.7L1583.1,735.4L1583.1,735.4z",
  ];

  return (
    <div
      style={{
        backgroundImage: `url('/images/1005.jpg')`,
        width: "80vw",
        height: "100vh",
      }}
    >
      {hoveredApt && <MouseCard />}
      <svg width="100vw" height="100vh">
        {svgArr.map((svg, i) => (
          <path
            key={i}
            d={`${svg}`}
            className={`transition-all duration-500 fill-transparent hover:fill-${hoveredApt.status} opacity-70 cursor-pointer border-2 border-red-500`}
            name={`wohnung-${i}`}
            onMouseEnter={() => setHoveredApt(apartments[i])}
            onMouseLeave={() => setHoveredApt("")}
          />
        ))}
      </svg>
    </div>
  );
};

export default Wohnungsfinder;
