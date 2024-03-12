import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/Product";
import updateLocalStorage from "../utills/updateLocalStorage";

const initialState: ProductType[] = localStorage.getItem("favorite")
  ? JSON.parse(localStorage.getItem("favorite")!)
  : [];

const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<ProductType>) => {
      state.push(action.payload);
      updateLocalStorage<ProductType[]>(state, "favorite");
    },
    removeFromFav: (state, action: PayloadAction<ProductType>) => {
      const newState = state.filter((prd) => prd._id !== action.payload._id);
      updateLocalStorage<ProductType[]>(newState, "favorite");
      return newState;
    },
    emptyFav: (state) => {
      state = [];
      updateLocalStorage<ProductType[]>(state, "favorite");
      return state;
    },
  },
});

export const { addToFav, removeFromFav, emptyFav } = favSlice.actions;
export default favSlice.reducer;
