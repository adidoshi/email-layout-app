import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../slices/emailSlice";

export default configureStore({
  reducer: {
    email: emailReducer,
  },
});
