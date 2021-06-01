import {
  AppState,
  AppDispatch,
  AuthState,
  UserInfo,
  UserLogin,
} from "../../types";
import * as com from "../../com";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: AuthState = {
  token: null,
  userInfo: { name: "", email: "", supervisor: false },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
    },
    logoutUser(state) {
      state.token = null;
    },
  },
});

export const { setToken, setUserInfo, logoutUser } = authSlice.actions;

export default authSlice.reducer;
