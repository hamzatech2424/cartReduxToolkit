import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slices/productsSlice'
import cartSlice from './Slices/cartSlice'

export const store = configureStore({
    reducer: {
        products:productSlice,
        cart:cartSlice
    },
  })