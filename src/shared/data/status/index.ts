import * as com from "../../com";
import { AppDispatch, AppState, Status, StatusState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StatusState = {
  allStatus: [],
  filterStatus: null,
};

export const fetchAllStatus =
  () => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;
    return com.fetchStatus(token).then((res) => {
      dispatch(setAllStatus(res));
    });
  };

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setAllStatus(state, action: PayloadAction<Status[]>) {
      state.allStatus = action.payload;
    },
    setFilterStatus(state, action: PayloadAction<Status | null>) {
      state.filterStatus = action.payload;
    },
  },
});

export const { setAllStatus, setFilterStatus } = statusSlice.actions;
export default statusSlice.reducer;
