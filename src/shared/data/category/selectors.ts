import { AppState } from "../../types";

export const getAllCategories = (state: AppState) =>
  state.category.allCategories;

export const getFilterCategory = (state: AppState) =>
  state.category.filterCategory;
