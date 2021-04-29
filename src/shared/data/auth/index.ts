import { AnyAction } from "redux";
import { AuthState, UserInfo } from "../../types";

export const SET_TOKEN = "AUTH/SET_TOKEN";
export const SET_USERINFO = "AUTH/SET_USERINFO";

interface SetToken {
  type: typeof SET_TOKEN;
  payload: string | null;
}

interface SetUserInfo {
  type: typeof SET_USERINFO;
  payload: UserInfo | null;
}

export type AuthActions = SetToken | SetUserInfo;

const INITIAL_STATE: AuthState = {
  token: null,
  userInfo: null,
};

export const setToken = (token: string | null): SetToken => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUserInfo = (userInfo: UserInfo | null): SetUserInfo => ({
  type: SET_USERINFO,
  payload: userInfo,
});

const authReducer = (state = INITIAL_STATE, action: AnyAction): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USERINFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default authReducer;
