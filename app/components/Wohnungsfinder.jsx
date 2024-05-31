"use client";
import { useContext, useRef, useState, useEffect } from "react";
import { AptContext } from "../utils/createContext";
import MouseCard from "./MouseCard";
import Image from "next/image";

const Wohnungsfinder = ({ apartments }) => {
  const canvasRef = useRef(null);
  const { hoveredApt, setHoveredApt } = useContext(AptContext);
  const bounds = { width: 2400, height: 1350 };

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   const bounds = { width: 2400, height: 1350 };
  //   const scale = Math.max(
  //     canvas.width / bounds.width,
  //     canvas.height / bounds.height
  //   );
  //   const scaledWidth = bounds.width * scale;
  //   const scaledHeight = bounds.height * scale;
  //   const centerX = canvas.width / 2;
  //   const centerY = canvas.height / 2;
  //   const pathX = centerX - scaledWidth / 2;
  //   const pathY = centerY - scaledHeight / 2;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.save();
  //   ctx.translate(pathX, pathY);
  //   ctx.scale(scale, scale);

  //   ctx.translate(pathX, pathY);
  //   ctx.scale(scale, scale);
  // }, []);

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
    <div>
      <div
        style={{
          backgroundImage: `url('/images/1005.jpg')`,
        }}
        className=" w-[80vw] h-[100vh]"
      >
        {hoveredApt && <MouseCard hoveredApt={hoveredApt} />}
        {/* <div className="w-[80vw] h-[100vh] ">
        <Image src="/images/1005.jpg" fill alt="hi" />
      </div> */}
        <svg width="100%" height="100%" className={`border-2 border-red-500 `}>
          {svgArr.map((svg, i) => (
            <path
              key={i}
              d={`${svg}`}
              stroke={"red"}
              strokeWidth={"5px"}
              className={`transition-all duration-200 fill-transparent hover:fill-${hoveredApt && hoveredApt.status} opacity-70 cursor-pointer `}
              name={`wohnung-${i}`}
              onMouseEnter={() => setHoveredApt(apartments[i])}
              onMouseLeave={() => setHoveredApt(null)}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Wohnungsfinder;
