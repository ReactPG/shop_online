import { FETCH_CATEGORY } from "../constants/type";

export const fetchCategory = () => {
    console.log("FETCH_CATEGORY")
  return {
    type: FETCH_CATEGORY
  };
};
