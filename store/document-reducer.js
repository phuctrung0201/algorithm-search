import { createSlice } from "@reduxjs/toolkit";
import {
  document1,
  document2,
  document3,
  document4,
  document5,
  document6,
  document7,
  document8,  
  document9,
  document10,
  document11,
  document12,
  document13,
  document14, 
  document15,
  document16,
  document17,
  document18,
  document19,
  document20,
  document21,
  document22,
  document23,
} from "../data/documents";

const initialState = {
  data: [    
    document20,
    document21,
    document22, 
    document1,
    document2,
    document3,
    document4,
    document5,
    document6,
    document7,
    document8,  
    document9,
    document10,
    document11,
    document12,
    document13,
    document14, 
    document15,
    document16,
    document17,
    document18,
    document19, 
    document23,
  ],
};

const documentSlice = createSlice({
  name: "document",
  initialState,
});

export default documentSlice.reducer;
