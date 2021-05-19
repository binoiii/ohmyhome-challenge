import { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Properties from "./properties";

const ResultCont = () => {
  const {
    fetchProperties,
    state: { properties, totalProperties, loading },
  } = useContext(GlobalContext);

  useEffect(() => fetchProperties(), []);

  const isProperties = properties.length > 0;

  return (
    <div className="p-4">
      <h2 className="mb-9 sm:text-center text-gray-primary text-2xl font-primary font-bold">
        Search Properties
      </h2>
      <p className="mb-3.5 sm:text-center text-gray-secondary text-lg font-primary">
        {(loading && "Loading properties...") ||
          (isProperties && `${totalProperties} properties found`) ||
          `No properties found`}
      </p>
      <Properties properties={properties} isProperties={isProperties} />
    </div>
  );
};

export default ResultCont;
