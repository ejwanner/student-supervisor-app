import { AppState, Thesis } from "../../types";

export const getAllThesis = (state: AppState): Thesis[] =>
  state.thesis.allThesis;

export const getSelectedThesis = (state: AppState): Thesis | null =>
  state.thesis.selectedThesis;

export const getMyThesis = (state: AppState) =>
  state.thesis.allThesis.filter(
    (thesis) =>
      thesis.supervisorId === state.auth.userInfo._id ||
      thesis.supervisorId === state.auth.userInfo._id ||
      thesis.createdBy === state.auth.userInfo._id
  );

export const isSupervisorOfThesis = (state: AppState): boolean => {
  return state.thesis.selectedThesis?.supervisorId === state.auth.userInfo._id;
};
