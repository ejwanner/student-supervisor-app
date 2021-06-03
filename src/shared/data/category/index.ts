import { Category, CategoryState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CategoryState = {
  allCategories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setAllThesis(state, action: PayloadAction<Category[]>) {
      state.allCategories = action.payload;
    },
  },
});

export const { setAllThesis } = categorySlice.actions;
export default categorySlice.reducer;
