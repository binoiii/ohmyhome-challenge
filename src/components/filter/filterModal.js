import FilterHeadModal from "./filterHeadModal";
import FilterBodyModal from "./filterBodyModal";

const FilterModal = () => {
  return (
    <div className="z-10 h-full width-full fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="w-full h-full md:w-sm md:h-auto bg-white">
        <FilterHeadModal />
        <FilterBodyModal />
      </div>
    </div>
  );
};

export default FilterModal;
