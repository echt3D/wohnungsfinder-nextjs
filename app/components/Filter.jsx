"use client";
import { useContext } from "react";
import { AptContext } from "../utils/createContext";
import { useState } from "react";

const Filter = ({ setOpenFilter }) => {
  const { handleSort, sort, setSort } = useContext(AptContext);
  //   const [isDescendent, setIsDescendent] = useState(true);

  const handleDirection = () => {
    // setIsDescendent(!isDescendent);
    isDescendent()
      ? setSort({ ...sort, direction: "ascendent" })
      : setSort({ ...sort, direction: "descendent" });
  };

  const isDescendent = () => sort.direction === "descendent";

  return (
    <section className="w-full absolute z-100 bottom-0 h-full bg-black bg-opacity-40 flex items-end">
      <div className="my-6 mx-4 w-full h-1/2 bg-white rounded-2xl p-4 flex flex-col place-items-center">
        <div onClick={() => setOpenFilter(false)}>close</div>
        <div
          className={`w-12 h-12 ${isDescendent() ? "rotate-0" : "rotate-180"}`}
        >
          <input
            onClick={() => handleDirection()}
            type="image"
            src="/images/arrow.svg"
            alt="arrow"
          />
        </div>
        <p>Sortieren & Filtern</p>
        <section>
          <div>
            <p>Sortierung</p>
          </div>
          <div>
            <div className="flex gap-2">
              <input
                onChange={handleSort}
                type="radio"
                name="method"
                value="space"
              />
              <label>Wohnfläche</label>
            </div>
            <div className="flex gap-2">
              <input
                onChange={handleSort}
                type="radio"
                name="method"
                value="floor"
              />
              <label>Geschoss</label>
            </div>
            <div className="flex gap-2">
              <input
                onChange={handleSort}
                type="radio"
                name="method"
                value="rooms"
              />
              <label>Zimmer</label>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Filter;
