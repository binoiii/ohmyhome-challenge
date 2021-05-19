import { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { GlobalContext } from "../../context/GlobalState";
import InfiniteScroll from "react-infinite-scroll-component";

const Properties = ({ properties }) => {
  const {
    fetchProperties,
    incrementOffset,
    state: { offset, totalProperties },
  } = useContext(GlobalContext);

  const hasMore = offset < totalProperties;

  useEffect(() => {
    if (offset > 0) return fetchProperties();
  }, [offset]);

  return (
    <InfiniteScroll
      next={incrementOffset}
      dataLength={properties.length}
      hasMore={hasMore}
      loader={
        <h4 className="text-sm text-center font-medium">
          LOADING MORE PROPERTIES...
        </h4>
      }
    >
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => {
          const { id, title, description, price, imageurl } = property;
          return (
            <div key={id} className="my-4 sm:m-4 max-w-sm">
              <img
                alt={title}
                src={imageurl}
                loading="lazy"
                className="w-96 h-64 rounded-lg"
              />
              <h3 className="my-4 text-xl text-gray-primary font-primary font-extrabold">
                {title}
              </h3>
              <p className="-mt-2.5 mb-.5 text-sm text-gray-secondary">
                {description}
              </p>
              <p className="text-sm text-gray-primary font-medium">
                ${price.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

Properties.propTypes = {
  properties: PropTypes.array,
  isProperties: PropTypes.bool,
};

export default Properties;
