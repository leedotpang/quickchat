import { REGISTER_ROUTE, LOGIN_ROUTE } from "./constants";
import { post } from "axios";

export const registerRequest = (email) =>
  post(REGISTER_ROUTE, { username: email });

export const loginRequest = (email) => post(LOGIN_ROUTE, { username: email });
