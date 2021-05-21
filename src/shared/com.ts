import Axios, { AxiosResponse } from 'axios'
import {UserLogin, UserRegister} from "./types";

const API_URL = 'http://localhost:8000'

const parseJson = (res: AxiosResponse) => res.data;

export const registerUser = (newUser: UserRegister): Promise<void> => {
    return Axios.post(`${API_URL}/register`, newUser).then(parseJson).catch((err) => {
        console.error(err);
        throw err
    })
}

export const loginUser = (user: UserLogin): Promise<{ access_token: string }> => {
    console.log(user)
    return Axios.post(`${API_URL}/login`,{email: user.email, password: user.password}).then(parseJson).catch((err) => {
        console.error(err);
        throw err
    })
}