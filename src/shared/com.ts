import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import {
  Conversation,
  Message,
  Thesis,
  Category,
  UserInfo,
  UserLogin,
  UserRegister,
} from "./types";

export const API_URL = "http://localhost:8000/api";

const parseBody = (res: AxiosResponse) => res.data;
const throwError = (err: Error) => {
  console.error(err);
  throw err;
};

const getAuthorizedHeader = (token: string | null): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const registerUser = (newUser: UserRegister): Promise<void> => {
  return Axios.post(`${API_URL}/register`, newUser)
    .then(parseBody)
    .catch(throwError);
};

export const loginUser = async (
  user: UserLogin
): Promise<{ userInfo: UserInfo; access_token: string }> => {
  return Axios.post(`${API_URL}/login`, {
    email: user.email,
    password: user.password,
  })
    .then(parseBody)
    .catch(throwError);
};

export const updateUser = async (
  user: UserInfo,
  token: string
): Promise<UserInfo> => {
  return Axios.put(`${API_URL}/user`, user, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchTheses = async (token: string | null) => {
  return Axios.get(`${API_URL}/theses`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchThesisForUser = async (token: string | null) => {
  return Axios.get(`${API_URL}/thesis/user`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchThesisById = async (token: string | null, id: string) => {
  return Axios.get(`${API_URL}/thesis/${id}`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const createThesis = async (token: string | null, thesis: Thesis) => {
  return Axios.post(`${API_URL}/thesis`, thesis, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const updateThesis = async (thesis: Thesis, token: string | null) => {
  return Axios.put(`${API_URL}/thesis`, thesis, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchCategories = async (token: string | null) => {
  return Axios.get(`${API_URL}/category`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const createCategory = async (
  category: Category,
  token: string | null
) => {
  return Axios.post(`${API_URL}/category`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchStatus = async (token: string | null) => {
  return Axios.get(`${API_URL}/status`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchAllUsers = (token: string): Promise<UserInfo[]> => {
  return Axios.get(`${API_URL}/users`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchAllConversations = (
  token: string
): Promise<Conversation[]> => {
  return Axios.get(`${API_URL}/chat/conversation`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchMessages = (token: string): Promise<Message[]> => {
  return Axios.get(`${API_URL}/chat/message`, getAuthorizedHeader(token))
    .then(parseBody)
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
    .then(parseBody)
    .catch(throwError);
};
