import Toast from "react-native-toast-message";
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
    extendThesis(state, action: PayloadAction<Thesis>) {
      state.allThesis = [...state.allThesis, action.payload];
    },
  },
});

export const { setAllThesis, setSelectedThesis, extendThesis } =
  thesisSlice.actions;
export default thesisSlice.reducer;
