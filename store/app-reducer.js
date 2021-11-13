import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  algorithmsList: [
    {
      id: 1,
      label: "Sort",
      subs: [{ id: 2, label: "Quick sort" }],
    },
    {
      id: 3,
      label: "Search",
      subs: [{ id: 4, label: "Binary search" }],
    },
  ],
};

const appSlice = createSlice({
  name: "app",
  initialState,
});

export default appSlice.reducer;
