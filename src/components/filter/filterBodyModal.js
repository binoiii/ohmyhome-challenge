import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";
import FilterBodayRange from "./filterBodyRange";
import FilterBodyRooms from "./filterBodyRooms";

const FilterBodyModal = () => {
  const { applyFilters, handleFilterModal } = useContext(GlobalContext);

  const handleApplyFilter = () => {
    applyFilters();
    handleFilterModal();
  };

  return (
    <div className="h-full flex flex-col p-4 pt-0">
      <FilterBodayRange />
      <FilterBodyRooms />
      <button
        className="mt-auto md:mt-6 mb-16 md:mb-0 py-3 w-full bg-orange-primary rounded-md text-center focus:outline-none text-white font-primary font-semibold"
        onClick={handleApplyFilter}
      >
        Apply filter
      </button>
    </div>
  );
};

export default FilterBodyModal;
