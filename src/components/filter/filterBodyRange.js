import { useContext } from "react";
import PropTypes from "prop-types";

import { GlobalContext } from "../../context/GlobalState";

const FilterBodyRange = () => {
  const {
    state: { min, max },
    updateMin,
    updateMax,
  } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "min") return updateMin(value);
    updateMax(value);
  };

  return (
    <div>
      <h3 className="my-5 text-lg text-primary font-semibold">Price Range</h3>
      <div className="flex justify-between items-center">
        <input
          type="text"
          name="min"
          placeholder="Minimum"
          value={min}
          onChange={handleChange}
          className="px-4 py-2.5 w-40 w-full border border-gray-sixth outline-none active:outline-none rounded-md text-sm text-gray-primary font-primary placeholder-gray-secondary"
        />
        <div className="mx-2 h-0.5 w-3 sm:w-3 bg-black"></div>
        <input
          type="text"
          name="max"
          placeholder="Maximum"
          value={max}
          onChange={handleChange}
          className="px-4 py-2.5 w-40 w-full border border-gray-sixth outline-none active:outline-none rounded-md text-sm text-gray-primary font-primary placeholder-gray-secondary"
        />
      </div>
    </div>
  );
};

FilterBodyRange.propTypes = {
  handleChange: PropTypes.func,
};

export default FilterBodyRange;
