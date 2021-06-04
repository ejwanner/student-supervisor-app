import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import thesisReducer from "./thesis";
import chatReducer from "./chat";

export default configureStore({
  reducer: {
    thesis: thesisReducer,
    auth: authReducer,
    chat: chatReducer,
  },
  devTools: true,
});
