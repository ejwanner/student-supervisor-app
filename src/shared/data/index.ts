import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import thesisReducer from "./thesis";
import chatReducer from "./chat";
import categoryReducer from "./category";
import statusReducer from "./status";

export default configureStore({
  reducer: {
    thesis: thesisReducer,
    auth: authReducer,
    chat: chatReducer,
    category: categoryReducer,
    status: statusReducer,
  },
  devTools: true,
});
