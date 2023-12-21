import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slice/loadingSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    cart: cartReducer,
  },
});
