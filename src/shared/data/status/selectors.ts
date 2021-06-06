import { AppState } from "../../types";

export const getAllStatus = (state: AppState) => state.status.allStatus;

export const getFilterStatus = (state: AppState) => state.status.filterStatus;
