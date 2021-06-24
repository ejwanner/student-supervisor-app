import * as com from "../../com";
import { AppDispatch, AppState, Thesis, ThesisState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThesisState = {
  allThesis: [],
  myThesis: [],
  selectedThesis: null,
};

export const fetchTheses =
  () => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;
    return com.fetchTheses(token).then((res) => {
      dispatch(setAllThesis(res));
    });
  };

export const fetchThesisById =
  (id: string) => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;
    return com.fetchThesisById(token, id).then((res) => {
      dispatch(setSelectedThesis(res));
    });
  };

const thesisSlice = createSlice({
  name: "thesis",
  initialState,
  reducers: {
    setAllThesis(state, action: PayloadAction<Thesis[]>) {
      state.allThesis = action.payload;
    },
    setMyThesis(state, action: PayloadAction<Thesis[]>) {
      state.myThesis = action.payload;
    },
    setSelectedThesis(state, action: PayloadAction<Thesis>) {
      state.selectedThesis = action.payload;
    },
  },
});

export const { setAllThesis, setSelectedThesis } = thesisSlice.actions;
export default thesisSlice.reducer;
