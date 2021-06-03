import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface Thesis {
  id: number;
  title: string;
  description: string;
  status: ThesisStatus;
  category: number;

  // will be added later
  student?: null;
  supervisor?: null;
  second_supervisor?: null;
  created_by?: null;
}

export enum ThesisStatus {
  Draft = "Draft",
  Writing = "Writing",
  Submitted = "Submitted",
  Billed = "Billed",
}

export interface IThesisStatus {
  id: number;
  name: string;
}

export interface Category {
  _id: string;
  name: string;
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
  category: CategoryState;
};

export type ThesisState = {
  allThesis: Thesis[];
  myThesis: Thesis[];
};

export type AuthState = {
  token: string | null;
  userInfo: UserInfo;
};

export type CategoryState = {
  allCategories: Category[];
};
