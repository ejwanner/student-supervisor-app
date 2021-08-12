import Toast from "react-native-toast-message";
import * as com from "../../com";
import { AppDispatch, AppState, Thesis, ThesisFilter, ThesisState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setFilterStatus } from "../status";

const initialState: ThesisState = {
  allThesis: [],
  myThesis: [],
  selectedThesis: null,
  thesisFilter: null,
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

export const createNewThesis =
  (newThesis: Thesis) =>
  async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;
    return com
      .createThesis(token, newThesis)
      .then((res) => {
        dispatch(extendThesis(res));
        Toast.show({ type: "success", text1: "New thesis was created" });
      })
      .catch(() => Toast.show({ type: "error", text1: "An error occured" }));
  };

export const updateThesis =
  (thesis: Thesis) =>
  async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;
    return com
      .updateThesis(thesis, token)
      .then((res) => {
        dispatch(refreshThesis(res));
        dispatch(setSelectedThesis(res));
        Toast.show({ type: "success", text1: "Thesis was updated" });
      })
      .catch(() => Toast.show({ type: "error", text1: "An error occured" }));
  };
  
export const setThesisFilterObject = () => async (dispatch: AppDispatch, getState: () => AppState) => {
  const status = getState().status.filterStatus
  const category = getState().category.filterCategory
  
  return dispatch(setThesisFilter({status: status ? status.name : null , category: category ? category.name : null}))
}

export const clearFilter = () => async (dispatch: AppDispatch) => {
  return dispatch(clearThesisFilter())
}

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
    setThesisFilter(state, action: PayloadAction<ThesisFilter | null>) {
      state.thesisFilter = action.payload;
    },
    clearThesisFilter(state) {
      state.thesisFilter = null
    },
    extendThesis(state, action: PayloadAction<Thesis>) {
      state.allThesis = [...state.allThesis, action.payload];
    },
    refreshThesis(state, action: PayloadAction<Thesis>) {
      state.allThesis = [
        ...state.allThesis.filter((t) => t._id !== action.payload._id),
        action.payload,
      ];
    },
  },
});

export const { setAllThesis, setSelectedThesis, setThesisFilter, clearThesisFilter, extendThesis, refreshThesis } =
  thesisSlice.actions;

export default thesisSlice.reducer;
