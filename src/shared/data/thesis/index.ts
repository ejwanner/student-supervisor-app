import { AnyAction } from "redux";
import { IThesis, ThesisState } from "../../types";

export const SET_THESIS = "THESIS/SET_THESIS";

interface SetThesis {
  type: typeof SET_THESIS;
  payload: IThesis[];
}

export type ThesisActions = SetThesis;

const INITIAL_STATE: ThesisState = {
  allThesis: [],
};

export const setThesis = (thesis: IThesis[]): SetThesis => ({
  type: SET_THESIS,
  payload: thesis,
});

const thesisReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): ThesisState => {
  switch (action.type) {
    case SET_THESIS:
      return { ...state, allThesis: action.payload };
    default:
      return state;
  }
};

export default thesisReducer;
