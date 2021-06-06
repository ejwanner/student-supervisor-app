import { AppState } from "../../types";

export const getMyConversations = (state: AppState) =>
  state.chat.myConversations;

export const getActiveConversation = (state: AppState) =>
  state.chat.activeConversation;

export const getMessagesByConversation = (state: AppState) => {
  const activeConvId = state.chat.activeConversation?._id;

  if (activeConvId) {
    return state.chat.myMessages.filter(
      (message) => message.conversation._id === activeConvId
    );
  }
  return [];
};
