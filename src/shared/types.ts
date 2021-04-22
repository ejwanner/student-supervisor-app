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
  username: string;
  password: string;
  number: string;
  category: ICategory;
}

export interface UserSignIn {
    username: string;
    password: string;
}

export interface UserRegister {
    username: string;
    password: string;
    confirm_password: string;
    email: string;
    supervisor: boolean;
}


