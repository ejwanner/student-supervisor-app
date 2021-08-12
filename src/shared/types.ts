import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface Thesis {
  _id?: string;
  title: string;
  description: string;
  status: ThesisStatus;
  category: string;
  supervisorId?: string;
  secondSupervisorId?: string;
  studentId?: string;
  createdBy?: string;
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

export interface Status {
  _id: string;
  name: string;
}

export interface UserRegister {
  email: string;
  name: string;
  password: string;
  category: string;
  supervisor: boolean;
  preferredCategory: string;
}

export type UserLogin = Omit<UserRegister, "supervisor" | "name">;

export interface UserInfo {
  _id?: string;
  name: string;
  email: string;
  supervisor: boolean;
}

export interface Conversation {
  _id?: string;
  owner: UserInfo;
  participant: UserInfo;
}

export interface Message {
  _id?: string;
  conversation: Conversation;
  message: string;
  timestamp?: Date;
  createdBy: UserInfo;
}

// redux types
export type AppDispatch = ThunkDispatch<AppState, unknown, AnyAction>;

export type AppState = {
  thesis: ThesisState;
  auth: AuthState;
  chat: ChatState;
  category: CategoryState;
  status: StatusState;
};

export type ThesisState = {
  allThesis: Thesis[];
  myThesis: Thesis[];
  selectedThesis: Thesis | null;
  thesisFilter: ThesisFilter | null;
};

export type AuthState = {
  token: string | null;
  userInfo: UserInfo;
  allUsers: UserInfo[];
};

export type ChatState = {
  myConversations: Conversation[];
  activeConversation: Conversation | null;
  myMessages: Message[];
};

export type CategoryState = {
  allCategories: Category[];
  filterCategory: Category | null;
};

export type StatusState = {
  allStatus: Status[];
  filterStatus: Status | null;
};

export enum AddSupervisorType {
  Supervisor,
  SecondSupervisor,
  Student,
}

export type ThesisFilter = {
  status: string | null
  category: string | null
}