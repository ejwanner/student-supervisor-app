import { createSelector } from "@reduxjs/toolkit";
import { AppState, UserInfo } from "../../types";

export const getUserInfo = createSelector(
  (state: AppState) => state.auth.userInfo,
  (userInfo: UserInfo | null) => userInfo
);

export const getToken = createSelector(
  (state: AppState) => state.auth.token,
  (token: string | null) => token
);
