import { AppState, Thesis } from "../../types";

export const getAllThesis = (state: AppState): Thesis[] =>
  state.thesis.allThesis;
