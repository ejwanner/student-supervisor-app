import * as com from "../../com";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppState, ChatState, Conversation } from "../../types";

const initialState: ChatState = {
  myConversations: [],
};

export const createConversation =
  (newConversation: Conversation) =>
  async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token || "";
    return com.createConversation(newConversation, token).then((res) => {
      dispatch(fetchAllConversations());
    });
  };

export const fetchAllConversations =
  () => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token || "";
    return com.fetchAllConversations(token).then((res) => {
      dispatch(setMyConversations(res));
    });
  };

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMyConversations(state, action: PayloadAction<Conversation[]>) {
      state.myConversations = action.payload;
    },
    setNewConversation(state, action: PayloadAction<Conversation>) {
      state.myConversations = [...state.myConversations, action.payload];
    },
  },
});

export const { setMyConversations, setNewConversation } = chatSlice.actions;

export default chatSlice.reducer;
