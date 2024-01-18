import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./ProductSlice";

const appStore = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default appStore;
