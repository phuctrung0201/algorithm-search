import { createSlice } from "@reduxjs/toolkit";
import {
  document1,
  document2,
  document3,
  document4,
  document5,
  document6,
  document7,
} from "../data/documents";

const initialState = {
  data: [
    document1,
    document2,
    document3,
    document4,
    document5,
    document6,
    document7,
  ],
};

const documentSlice = createSlice({
  name: "document",
  initialState,
});

export default documentSlice.reducer;
