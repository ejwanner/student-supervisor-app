import * as com from "../../com";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AppDispatch,
  AppState,
  ChatState,
  Conversation,
  Message,
} from "../../types";

const initialState: ChatState = {
  myConversations: [],
  myMessages: [],
  activeConversation: null,
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

export const fetchMessages =
  () => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token || "";
    return com.fetchMessages(token).then((res) => {
      dispatch(setMyMessages(res));
    });
  };

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMyConversations(state, action: PayloadAction<Conversation[]>) {
      state.myConversations = action.payload;
    },
    setMyMessages(state, action: PayloadAction<Message[]>) {
      state.myMessages = action.payload;
    },
    receiveMessage(state, action: PayloadAction<Message>) {
      state.myMessages = [...state.myMessages, action.payload];
    },
    setActiveConversation(state, action: PayloadAction<Conversation>) {
      state.activeConversation = action.payload;
    },
  },
});

export const {
  setMyConversations,
  setMyMessages,
  receiveMessage,
  setActiveConversation,
} = chatSlice.actions;

export default chatSlice.reducer;
