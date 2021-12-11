import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app-reducer";
import documentReducer from "./document-reducer";
import newReducer from "./new-reducer";

export default configureStore({
  reducer: {
    app: appReducer,
    document: documentReducer,
    new: newReducer,
  },
});
