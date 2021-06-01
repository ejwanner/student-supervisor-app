import { AppState, IThesis } from "../../types";

export const getAllThesis = (state: AppState): IThesis[] =>
  state.thesis.allThesis;
