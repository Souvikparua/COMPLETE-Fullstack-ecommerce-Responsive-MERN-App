import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [], 
  productList: [], 
  status: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingItemIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex !== -1) {
        state.cartItem[existingItemIndex].qty++;
        state.cartItem[existingItemIndex].total =
          state.cartItem[existingItemIndex].qty *
          state.cartItem[existingItemIndex].price;
      } else {
        state.cartItem.push({ ...action.payload, qty: 1, total: action.payload.price });
      }
    },
    deleteCartItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item._id !== action.payload.id);
    },
    increaseQty: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item._id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty++;
        existingItem.total = existingItem.qty * existingItem.price;
      }
    },
    decreaseQty: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item._id === action.payload.id
      );
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty--;
        existingItem.total = existingItem.qty * existingItem.price;
      }
    },
    setDataProduct: (state, action) => {
      state.productList = action.payload; 
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  setDataProduct,
} = productSlice.actions;

export default productSlice.reducer;
