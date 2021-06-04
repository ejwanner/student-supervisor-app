import { AppState } from "../../types";

export const getUserInfo = (state: AppState) => state.auth.userInfo;

export const getToken = (state: AppState) => state.auth.token;

export const getAllUsers = (state: AppState) => state.auth.allUsers;
