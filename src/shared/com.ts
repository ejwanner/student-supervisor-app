import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Category, Thesis, UserInfo, UserLogin, UserRegister } from "./types";

const API_URL = "http://localhost:8000/api";

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

export const fetchThesis = async (token: string | null) => {
  return Axios.get(`${API_URL}/thesis`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const fetchThesisForUser = async (token: string | null) => {
  return Axios.get(`${API_URL}/thesis/user`, getAuthorizedHeader(token))
    .then(parseBody)
    .catch(throwError);
};

export const createThesis = async (thesis: Thesis, token: string | null) => {
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
