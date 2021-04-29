import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import thesisReducer from "./thesis";

export default configureStore({
  reducer: {
    thesis: thesisReducer,
    auth: authReducer,
  },
  devTools: true,
});
