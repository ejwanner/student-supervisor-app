import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thesisReducer from "./thesis";

export default configureStore({
  reducer: {
    thesis: thesisReducer,
  },
  devTools: true,
});
