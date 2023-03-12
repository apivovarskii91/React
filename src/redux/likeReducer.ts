import { AnyAction } from '@reduxjs/toolkit'

type ProductsLike = {
  [id: number]: boolean
}

const initialState: ProductsLike={
  1:true,
  2:true,
}


const likeReducer = (state= initialState, action:AnyAction)=>{
  return state
}

export default likeReducer