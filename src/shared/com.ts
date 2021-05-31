import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { UserInfo, UserLogin, UserRegister } from "./types";

const API_URL = "http://localhost:8000";

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
