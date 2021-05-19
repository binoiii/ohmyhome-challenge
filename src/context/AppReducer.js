import {
  FETCH_PROPERTIES,
  FETCH_SUCCESS,
  UPDATE_MINIMUM,
  UPDATE_MAXIMUM,
  UPDATE_BED_TYPE,
  APPLY_FILTER,
  CLEAR_FILTER,
  HANDLE_MODAL,
  INCREMENT_OFFSET,
  RESET_OFFSET,
} from "./actionTypes";

const appReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        totalProperties: action.payload.totalProperties,
        properties: [...state.properties, ...action.payload.list],
        loading: false,
      };

    case UPDATE_MINIMUM:
      return {
        ...state,
        min: action.payload,
      };

    case UPDATE_MAXIMUM:
      return {
        ...state,
        max: action.payload,
      };

    case UPDATE_BED_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    case CLEAR_FILTER: {
      return {
        ...state,
        type: "",
        min: "",
        max: "",
      };
    }

    case APPLY_FILTER:
      return {
        ...state,
        totalProperties: action.payload.totalProperties,
        properties: action.payload.list,
        loading: false,
      };

    case HANDLE_MODAL:
      return {
        ...state,
        isFilterShow: action.payload,
      };

    case INCREMENT_OFFSET:
      return {
        ...state,
        offset: state.offset + 4,
      };

    case RESET_OFFSET:
      return {
        ...state,
        offset: 0,
      };

    default:
      return state;
  }
};

export default appReducer;
