import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

const FilterBodyRooms = () => {
  const {
    state: { type },
    updateBedType,
  } = useContext(GlobalContext);

  return (
    <div>
      <h3 className="my-5 text-lg text-primary font-semibold">Bedrooms</h3>
      <div className="flex space-x-1 sm:space-x-4 md:space-x-0 justify-between items-center">
        <button
          className={`${
            type === "" && "active"
          } px-3 py-2 w-min sm:w-full md:w-20 border border-gray-seventh focus:outline-none rounded-md text-xs text-gray-primary font-primary font-semibold`}
          onClick={() => updateBedType("")}
        >
          Any
        </button>
        <button
          className={`${
            type === 0 && "active"
          } px-1 sm:px-4 py-2 w-min sm:w-full md:w-20 border border-gray-seventh focus:outline-none rounded-md text-xs text-gray-primary font-primary font-semibold`}
          onClick={() => updateBedType(0)}
        >
          Studio
        </button>
        <button
          className={`${
            type === 1 && "active"
          } px-4 py-2 w-12 sm:w-full md:w-16 border border-gray-seventh focus:outline-none rounded-md text-xs text-gray-primary font-primary font-semibold`}
          onClick={() => updateBedType(1)}
        >
          1
        </button>
        <button
          className={`${
            type === 2 && "active"
          } px-4 py-2 w-12 sm:w-full md:w-16 border border-gray-seventh focus:outline-none rounded-md text-xs text-gray-primary font-primary font-semibold`}
          onClick={() => updateBedType(2)}
        >
          2
        </button>
        <button
          className={`${
            type === 3 && "active"
          } px-4 py-2 w-12 sm:w-full md:w-16 border border-gray-seventh focus:outline-none rounded-md text-xs text-gray-primary font-primary font-semibold`}
          onClick={() => updateBedType(3)}
        >
          3
        </button>
        <button
          className={`${
            type === 4 && "active"
          } px-4 py-2 w-12 sm:w-full md:w-16 border border-gray-seventh focus:outline-none rounded-md text-xs text-gray-primary font-primary font-semibold`}
          onClick={() => updateBedType(4)}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default FilterBodyRooms;
