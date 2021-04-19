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
