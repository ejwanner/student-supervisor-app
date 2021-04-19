import { ICategory, IThesis, IThesisStatus } from "./types";

export const THESIS_STATI: IThesisStatus[] = [
  { id: 1, name: "None" },
  { id: 2, name: "Discussed" },
  { id: 3, name: "Enrolled" },
  { id: 4, name: "Submitted" },
  { id: 5, name: "Presented" },
  { id: 6, name: "Paid" },
];

export const ALL_CATEGORIES: ICategory[] = [
  { id: 1, name: "Software Development" },
];

export const ALL_THESIS: IThesis[] = [
  {
    id: 1,
    title: "My thesis",
    description: "lorem ipsum",
    status: 1,
    category: 1,
  },
  {
    id: 1,
    title: "Second thesis",
    description:
      "Hallo ich bin eine sehr sehr lange Beschreibung um zu testen wann ich abgeschnitten werden",
    status: 1,
    category: 1,
  },
];