import { createSelector } from "@reduxjs/toolkit";
import { AppState, IThesis } from "../../types";

export const getAllThesis = createSelector(
  (state: AppState) => state.thesis.allThesis,
  (allThesis: IThesis[]) => allThesis
);
