import { IThesis, ThesisState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThesisState = {
  allThesis: [],
};

const thesisSlice = createSlice({
  name: "thesis",
  initialState,
  reducers: {
    setAllThesis(state, action: PayloadAction<IThesis[]>) {
      state.allThesis = action.payload;
    },
  },
});

export const { setAllThesis } = thesisSlice.actions;
export default thesisSlice.reducer;
