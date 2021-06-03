import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import thesisReducer from "./thesis";
import categoryReducer from "./category";

export default configureStore({
  reducer: {
    thesis: thesisReducer,
    auth: authReducer,
    category: categoryReducer,
  },
  devTools: true,
});
