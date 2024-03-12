import { configureStore } from "@reduxjs/toolkit/react";
import logger from "redux-logger";
import favReducer from "./favSlice";
import cartReducer from "./cartSlice";
import apiSlice from "./apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    favorite: favReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(apiSlice.middleware),
  devTools: true,
});
export type IRootState = ReturnType<typeof store.getState>;
export default store;
