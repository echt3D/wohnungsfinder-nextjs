"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { AptContext } from "../utils/createContext";
import MouseCard from "./MouseCard";
import svgData from "../utils/svgData.json";

const Wohnungsfinder = ({ apartments }) => {
  const { hoveredApt, setHoveredApt, bgImage } = useContext(AptContext);
  const [path, setPath] = useState([null, null]);
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    console.log("canvasContainerRef", canvasContainerRef.current.offsetWidth);
    const canvas = canvasRef.current;
    const bounds = { width: 2400, height: 1350 };
    const scale = Math.max(
      canvas.width.baseVal.value / bounds.width,
      canvas.height.baseVal.value / bounds.height
    );

    const scaledWidth = bounds.width * scale;
    const scaledHeight = bounds.height * scale;
    const centerX = canvas.width.baseVal.value / 2;
    const centerY = canvas.height.baseVal.value / 2;
    const pathX = centerX - scaledWidth / 2;
    const pathY = centerY - scaledHeight / 2;

    console.log("paths", pathX, pathY);
    setPath[(pathX, pathY)];

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.save();
    // ctx.translate(pathX, pathY);
    // ctx.scale(scale, scale);

    // const svgArr = Object.entries(svgData[bgImage]);

    // svgArr.forEach((paths) => {
    //   const p = new Path2D(paths[1]);
    //   ctx.stroke(p);
    //   ctx.lineWidth = 12;
    //   ctx.strokeStyle = "orange";
    // });
  }, []);

  // const handleResize = useCallback(() => {
  //   const canvas = canvasRef.current;
  //   canvas.width = canvasContainerRef.current.offsetWidth;
  //   canvas.height = canvasContainerRef.current.offsetHeight;
  //   canvas.style.width = `${canvasContainerRef.current.offsetWidth}px`;
  //   canvas.style.height = `${canvasContainerRef.current.offsetHeight}px`;

  //   // drawCanvasBG();
  //   // drawCanvasSVGCombined(actualView);
  // });

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (canvasContainerRef.current) {
  //     const observer = new ResizeObserver(() => handleResize());

  //     observer.observe(canvasContainerRef.current);

  //     const errorHandler = (e) => {
  //       if (
  //         e.message.includes(
  //           "ResizeObserver loop completed with undelivered notifications" ||
  //             "ResizeObserver loop limit exceeded"
  //         )
  //       ) {
  //         const resizeObserverErr = document.getElementById(
  //           "webpack-dev-server-client-overlay"
  //         );
  //         if (resizeObserverErr) {
  //           resizeObserverErr.style.display = "none";
  //         }
  //       }
  //     };
  //     window.addEventListener("error", errorHandler);
  //     return () => {
  //       window.removeEventListener("error", errorHandler);
  //       observer.disconnect();
  //     };
  //   }
  // }, [canvasContainerRef]);

  const handleHover = (apartment) =>
    setHoveredApt({ ...apartment, hoveredInMain: true });

  return (
    <div
      style={{
        backgroundImage: `url('/images/${bgImage}.jpg')`,
      }}
      ref={canvasContainerRef}
      className="w-full h-full bg-center "
    >
      {hoveredApt && hoveredApt.hoveredInMain && (
        <MouseCard hoveredApt={hoveredApt} />
      )}

      {/* <canvas
        ref={canvasRef}
        className="w-screen h-full border-red-500  border-2"
      /> */}
      <svg
        ref={canvasRef}
        style={{
          transform: "translate(-175px, -60px)",
        }}
        className={`w-full h-full border-2 border-red-500`}
      >
        {svgData[bgImage].map((svg, i) => (
          <path
            key={i}
            d={`${svg}`}
            className={`transition-all duration-200 hover:fill-${hoveredApt && hoveredApt.status} opacity-70 cursor-pointer ${hoveredApt && hoveredApt.apt_id === apartments[i].apt_id ? `fill-${hoveredApt.status}` : "fill-transparent"}`}
            name={`wohnung-${i}`}
            onMouseEnter={() => handleHover(apartments[i])}
            onMouseLeave={() => setHoveredApt(null)}
          />
        ))}
      </svg>
    </div>
  );
};

export default Wohnungsfinder;
