import { FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS } from "../constants/type";

const initialState = {
  data: null,
  error: false,
  success: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        data: action.data
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.data,
        success: true
      };
    default:
      return state;
  }
};
