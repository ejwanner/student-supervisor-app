import { AppState } from "../../types";

export const getMyConversations = (state: AppState) =>
  state.chat.myConversations;
