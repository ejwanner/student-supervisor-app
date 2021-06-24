import { AppState, Thesis } from "../../types";

export const getAllThesis = (state: AppState): Thesis[] =>
  state.thesis.allThesis;

export const getSelectedThesis = (state: AppState): Thesis | null =>
  state.thesis.selectedThesis;
