import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import updateLocalStorage from "../utills/updateLocalStorage";
import CartType from "../types/Cart";
import { ProductType } from "../types/Product";
import updateCart from "../utills/updateCart";

const initialState: CartType = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : {
      products: [],
      total: 0,
    };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const isExist = state.products.some(
        (prd) => prd._id == action.payload._id
      );
      if (!isExist) state.products.push(action.payload);
      updateCart(state, action.payload);
      updateLocalStorage(state, "cart");
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      state.products = state.products.filter(
        (prd) => prd._id !== action.payload._id
      );
      updateCart(state, action.payload);
      updateLocalStorage(state, "cart");
    },
    emptyCart: (state) => {
      state = initialState;
      updateLocalStorage(state, "cart");
      return state;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
