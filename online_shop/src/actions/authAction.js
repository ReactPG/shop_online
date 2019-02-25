import { LOGIN_USER } from "./types";

export const login = (account, keepLoggedIn) => {
  return {
    type: LOGIN_USER,
    account,
    keepLoggedIn
  };
};
