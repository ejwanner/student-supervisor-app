import * as com from "../../com";
import { AppDispatch, AppState, Category, CategoryState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CategoryState = {
  allCategories: [],
  filterCategory: null,
};

export const fetchCategories =
  () => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;
    return com.fetchCategories(token).then((res) => {
      dispatch(setAllCategories(res));
    });
  };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setAllCategories(state, action: PayloadAction<Category[]>) {
      state.allCategories = action.payload;
    },
    setFilterCategory(state, action: PayloadAction<Category | null>) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setAllCategories, setFilterCategory } = categorySlice.actions;
export default categorySlice.reducer;
