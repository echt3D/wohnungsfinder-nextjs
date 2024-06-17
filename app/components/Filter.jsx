"use client";
import { useContext, useEffect } from "react";
import { AptContext } from "../utils/createContext";
import { Slider } from "@nextui-org/react";

const Filter = ({
  apartments,
  setOpenFilter,
  maxPrice,
  minPrice,
  maxSpace,
  minSpace,
}) => {
  const {
    handleSort,
    sort,
    setSort,
    price,
    setPrice,
    space,
    setSpace,
    checkbox,
    setCheckbox,
    // resetFilter,
    handleCheckbox,
  } = useContext(AptContext);

  const handleDirection = () =>
    isDescendent()
      ? setSort({ ...sort, direction: "ascendent" })
      : setSort({ ...sort, direction: "descendent" });

  const isDescendent = () => sort.direction === "descendent";

  const createCheckboxes = (apartments, keyName) => {
    const checkboxArr = [];

    for (const apartment of apartments) {
      if (apartment.hasOwnProperty(keyName)) {
        const value = apartment[keyName];
        if (!checkboxArr.includes(value)) {
          checkboxArr.push(value);
        }
      }
    }
    return checkboxArr;
  };

  const isChecked = (name, value) => checkbox[name].includes(value);

  const resetFilter = () => {
    setCheckbox({
      floor: [],
      rooms: [],
      status: [],
    });
    setSort({ method: "", direction: "descendent" });
    setPrice([minPrice, maxPrice]);
    setSpace([minSpace, maxSpace]);
  };

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
                value="floor_num"
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
        <section>
          <Slider
            label="Preis"
            step={1000}
            minValue={minPrice}
            maxValue={maxPrice}
            onChange={setPrice}
            value={price}
            formatOptions={{ style: "currency", currency: "CHF" }}
            className="max-w-md"
          />
        </section>
        <section>
          <Slider
            label="Wohnfläche"
            step={5}
            minValue={minSpace}
            maxValue={maxSpace}
            onChange={setSpace}
            value={space}
            className="max-w-md"
          />
        </section>

        <section>
          <ul className="grid grid-cols-2 items-center gap-2 2xl:gap-6">
            {createCheckboxes(apartments, "floor").map((input, i) => (
              <li key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="floor"
                  value={input}
                  onChange={handleCheckbox}
                  checked={isChecked("floor", input)}
                  className="relative appearance-none cursor-pointer w-4 h-4 border border-black  rounded-full bg-white  checked:bg-black checked:border-0"
                />
                <label htmlFor={input}>{input}</label>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <ul className="grid grid-cols-2 items-center gap-2 2xl:gap-6">
            {createCheckboxes(apartments, "rooms").map((input, i) => (
              <li key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rooms"
                  value={input}
                  onChange={handleCheckbox}
                  checked={isChecked("rooms", input)}
                  className="relative appearance-none cursor-pointer w-4 h-4 border border-black  rounded-full bg-white  checked:bg-black checked:border-0"
                />
                <label htmlFor={input}>{input}</label>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <input
            type="checkbox"
            name="status"
            value="frei"
            onChange={handleCheckbox}
            checked={isChecked("status", "frei")}
            className="relative appearance-none cursor-pointer w-4 h-4 border border-black  rounded-full bg-white  checked:bg-black checked:border-0"
          />
          <label htmlFor="frei">Nur verfügbare Wohnungen</label>
        </section>
        <section>
          <input
            type="button"
            value="Filter entfernen"
            className="cursor-pointer"
            onClick={() => resetFilter()}
          />
        </section>
      </div>
    </section>
  );
};

export default Filter;
