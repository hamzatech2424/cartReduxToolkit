import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload]
    },
    increaseProductQuantity: (state, action) => {
      const findIndexOfProduct = state.cartItems.findIndex((item) => item.id == action.payload.id)
      if (findIndexOfProduct >= 0) {
        state.cartItems[findIndexOfProduct].quantity = ++state.cartItems[findIndexOfProduct].quantity
      }
      else {
        console.log("Product not found")
      }
    },
    decreaseProductQuantity: (state, action) => {
      const findIndexOfProduct = state.cartItems.findIndex((item) => item.id == action.payload.id)
      if (findIndexOfProduct >= 0) {
        state.cartItems[findIndexOfProduct].quantity = --state.cartItems[findIndexOfProduct].quantity
      }
      else {
        console.log("Product not found")
      }
    },
    productRemoveFromCart: (state, action) => {
      const newProducts = state.cartItems.filter((item)=>item.id != action.payload.id)
      state.cartItems = newProducts
    },
},
})

// Action creators are generated for each case reducer function
export const { addToCart, increaseProductQuantity, decreaseProductQuantity,productRemoveFromCart } = cartSlice.actions

export default cartSlice.reducer