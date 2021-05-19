import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";
import { CloseIcon } from "../icons";

const FilterHeadModal = () => {
  const { clearFilter, handleFilterModal } = useContext(GlobalContext);

  const handleClear = () => clearFilter();

  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-tertiary">
      <button className="focus:outline-none" onClick={handleFilterModal}>
        <CloseIcon />
      </button>
      <h4 className="text-gray-primary font-primary font-medium">Filter</h4>
      <button
        className="focus:outline-none text-xs text-gray-primary font-primary font-medium"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterHeadModal;
