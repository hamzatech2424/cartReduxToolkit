import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload
    },
    setStatusOfProductToAdded: (state, action) => {
      const findIndexOfProduct = state.allProducts.findIndex((item)=>item.id == action.payload.item.id)
      if(findIndexOfProduct >= 0){
        state.allProducts[findIndexOfProduct].addedToCart = action.payload.status
      }
      else{
        console.log("Product not found")
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAllProducts,setStatusOfProductToAdded } = productSlice.actions

export default productSlice.reducer