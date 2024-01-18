import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItemIndex >= 0) {
        state.cartItems[cartItemIndex].prodQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, prodQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeProduct: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].prodQuantity > 1) {
        state.cartItems[itemIndex].prodQuantity -= 1;
      } else if (state.cartItems[itemIndex].prodQuantity === 1) {
        const inCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = inCartItems;
      }
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
