import {
  AppState,
  AppDispatch,
  AuthState,
  UserInfo,
  UserLogin,
} from "../../types";
import * as com from "../../com";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const setToken = createAction<string>("auth/SET_TOKEN");
export const setUserInfo = createAction<UserInfo>("auth/SET_USER_INFO");

export const login = (user: UserLogin) => async (dispatch: AppDispatch) => {
  return com.loginUser(user).then((res) => {
    dispatch(setToken(res.access_token));
    dispatch(setUserInfo(res.userInfo));
  });
};

export const updateUser =
  (user: UserInfo) =>
  async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token || "";
    return com
      .updateUser(user, token)
      .then((res) => dispatch(setUserInfo(res)));
  };

const INITIAL_STATE: AuthState = {
  token: null,
  userInfo: { name: "", email: "", supervisor: false },
};

const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(setToken, (state, action) => {
    state.token = action.payload;
  });
  builder.addCase(setUserInfo, (state, action) => {
    state.userInfo = action.payload;
  });
});

export default authReducer;
