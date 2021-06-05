import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import {
  Conversation,
  Message,
  UserInfo,
  UserLogin,
  UserRegister,
} from "./types";

export const API_URL = "http://localhost:8000/api";

const parseJson = (res: AxiosResponse) => res.data;
const throwError = (err: Error) => {
  console.error(err);
  throw err;
};

const getAuthorizedHeader = (token: string): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const registerUser = (newUser: UserRegister): Promise<void> => {
  return Axios.post(`${API_URL}/register`, newUser)
    .then(parseJson)
    .catch(throwError);
};

export const loginUser = (
  user: UserLogin
): Promise<{ userInfo: UserInfo; access_token: string }> => {
  return Axios.post(`${API_URL}/login`, {
    email: user.email,
    password: user.password,
  })
    .then(parseJson)
    .catch(throwError);
};

export const updateUser = (
  user: UserInfo,
  token: string
): Promise<UserInfo> => {
  return Axios.put(`${API_URL}/user`, user, getAuthorizedHeader(token))
    .then(parseJson)
    .catch(throwError);
};

export const fetchAllUsers = (token: string): Promise<UserInfo[]> => {
  return Axios.get(`${API_URL}/users`, getAuthorizedHeader(token))
    .then(parseJson)
    .catch(throwError);
};

export const fetchAllConversations = (
  token: string
): Promise<Conversation[]> => {
  return Axios.get(`${API_URL}/chat/conversation`, getAuthorizedHeader(token))
    .then(parseJson)
    .catch(throwError);
};

export const fetchMessages = (token: string): Promise<Message[]> => {
  return Axios.get(`${API_URL}/chat/message`, getAuthorizedHeader(token))
    .then(parseJson)
    .catch(throwError);
};

export const createConversation = (
  newConversation: Conversation,
  token: string
): Promise<Conversation> => {
  return Axios.post(
    `${API_URL}/chat/conversation/create`,
    newConversation,
    getAuthorizedHeader(token)
  )
    .then(parseJson)
    .catch(throwError);
};
