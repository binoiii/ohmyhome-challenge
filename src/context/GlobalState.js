import { createContext, useReducer } from "react";

import appReducer from "./AppReducer";
import {
  FETCH_PROPERTIES,
  FETCH_SUCCESS,
  UPDATE_MAXIMUM,
  UPDATE_MINIMUM,
  UPDATE_BED_TYPE,
  APPLY_FILTER,
  CLEAR_FILTER,
  HANDLE_MODAL,
  INCREMENT_OFFSET,
  RESET_OFFSET,
} from "./actionTypes";

export const GlobalContext = createContext();

const initialState = {
  totalProperties: 0,
  limit: 4,
  offset: 0,
  properties: [],
  type: "",
  min: "",
  max: "",
  loading: true,
  isFilterShow: false,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchProperties = async () => {
    try {
      dispatch({
        type: FETCH_PROPERTIES,
      });

      const properties = await fetch(
        `https://m9ojazlunf.execute-api.ap-southeast-1.amazonaws.com/test?limit=${state.limit}&offset=${state.offset}&min=${state.min}&max=${state.max}&type=${state.type}`
      ).then((res) => res.json());

      dispatch({
        type: FETCH_SUCCESS,
        payload: properties,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateMin = (min) => {
    dispatch({
      type: UPDATE_MINIMUM,
      payload: min,
    });
  };

  const updateMax = (max) =>
    dispatch({
      type: UPDATE_MAXIMUM,
      payload: max,
    });

  const updateBedType = (type) =>
    dispatch({ type: UPDATE_BED_TYPE, payload: type });

  const applyFilters = async () => {
    try {
      dispatch({
        type: HANDLE_MODAL,
        payload: !state.isFilterShow,
      });

      dispatch({
        type: FETCH_PROPERTIES,
      });

      const properties = await fetch(
        `https://m9ojazlunf.execute-api.ap-southeast-1.amazonaws.com/test?limit=${state.limit}&min=${state.min}&max=${state.max}&type=${state.type}`
      ).then((res) => res.json());

      dispatch({
        type: APPLY_FILTER,
        payload: properties,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  const handleFilterModal = () =>
    dispatch({
      type: HANDLE_MODAL,
      payload: !state.isFilterShow,
    });

  const incrementOffset = () => dispatch({ type: INCREMENT_OFFSET });

  const resetOffset = () => dispatch({ type: RESET_OFFSET });

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        fetchProperties,
        updateMin,
        updateMax,
        updateBedType,
        clearFilter,
        applyFilters,
        handleFilterModal,
        incrementOffset,
        resetOffset,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
