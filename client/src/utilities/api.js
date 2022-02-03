import { REGISTER_ROUTE, LOGIN_ROUTE, MESSAGE_ROUTE } from "./constants";
import { post, get } from "axios";

export const registerRequest = (email) =>
  post(REGISTER_ROUTE, { username: email });

export const loginRequest = (email) => post(LOGIN_ROUTE, { username: email });

export const sendMessageRequest = (text, username, roomId) =>
  post(MESSAGE_ROUTE, { text, username, roomId });

export const getMessagesRequest = (roomId) => get(`${MESSAGE_ROUTE}/${roomId}`);
