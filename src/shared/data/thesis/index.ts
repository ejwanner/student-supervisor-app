import { Thesis, ThesisState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThesisState = {
  allThesis: [],
  myThesis: [],
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
  },
});

export const { setAllThesis } = thesisSlice.actions;
export default thesisSlice.reducer;
