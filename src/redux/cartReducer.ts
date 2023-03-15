import { createSlice } from "@reduxjs/toolkit"


type ProductsInCartType={
  [id: number]: number
}

export const initialState:ProductsInCartType={
  1:2,
  2:3,
}


export const cartSlice = createSlice({
  name: 'productsInCart',
  initialState,
  reducers:{},
})

export default cartSlice.reducer