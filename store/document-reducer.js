import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      label: "Alogrithms",
      subs: [
        { id: 2, label: "Quick sort" },
        { id: 5, label: "Merge sort" },
        { id: 6, label: "Selection sort" },
        { id: 4, label: "Binary search" },
      ],
    },
    {
      id: 3,
      label: "Data Structure",
      subs: [
        { id: 7, label: "Binary tree" },
        { id: 8, label: "Balance tree" },
        { id: 9, label: "Linked list" },
        { id: 10, label: "Stack" },
        { id: 11, label: "Queue" },
      ],
    },
  ],
};

const documentSlice = createSlice({
  name: "document",
  initialState,
});

export default documentSlice.reducer;
