import { AppState } from "../../types";

export const getAllCategories = (state: AppState) =>
  state.category.allCategories;
