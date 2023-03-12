import { AnyAction } from '@reduxjs/toolkit'

type ProductsLike = {
  [id: number]: boolean
}

const initialState: ProductsLike={
  1:true,
  2:true,
}

const likeReducer = (state= initialState, action:AnyAction)=>{
  switch(action.type){
    case 'TOGGLE_LIKE':
      return {
        ...state,
        [action.id]: !state[action.id],
      }
      default:
        return state
  }
}

export default likeReducer