import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface IThesis {
  id: number;
  title: string;
  description: string;
  status: number;
  category: number;

  // will be added later
  student?: null;
  supervisor?: null;
  second_supervisor?: null;
  created_by?: null;
}

export interface IThesisStatus {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  number: string;
  category: ICategory;
}

export interface UserSignIn {
  username: string;
  password: string;
}

export interface UserRegister {
  email: string;
  name: string;
  password: string;
  supervisor: boolean;
}

export type UserLogin = Omit<UserRegister, "supervisor" | "name">;

export interface UserInfo {
  name: string;
  email: string;
  supervisor: boolean;
}

// redux types
export type AppDispatch = ThunkDispatch<AppState, unknown, AnyAction>;

export type AppState = {
  thesis: ThesisState;
  auth: AuthState;
};

export type ThesisState = {
  allThesis: IThesis[];
};

export type AuthState = {
  token: string | null;
  userInfo: UserInfo | null;
};
