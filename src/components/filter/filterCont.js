import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";
import FilterModal from "./filterModal";
import { FilterIcon } from "../icons";

const FilterCont = () => {
  const {
    state: { isFilterShow },
    resetOffset,
    handleFilterModal,
  } = useContext(GlobalContext);

  const handleFilter = () => {
    resetOffset();
    handleFilterModal();
  };

  return (
    <>
      <div
        className="-mt-1.5 p-3 flex items-center justify-center border-b border-gray-fourth focus:outline-none cursor-pointer"
        as="button"
        onClick={handleFilter}
      >
        <div>
          <FilterIcon />
        </div>
        <h2 className="ml-3 mt-0.5 text-xs text-gray-fifth font-primary">
          Filter
        </h2>
      </div>
      {isFilterShow && <FilterModal />}
    </>
  );
};

export default FilterCont;
