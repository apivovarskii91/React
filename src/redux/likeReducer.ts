import { AnyAction, createSlice } from '@reduxjs/toolkit'

type ProductsLike = {
  [id: number]: boolean
}

const initialState: ProductsLike={
  1:true,
  2:true,
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    addLike:(state, action)=>({
      ...state,
      [action.payload]: true,
    }),
    removeLike:(state, action)=>({
      ...state,
      [action.payload]: false,
    })
  },
})

export const {addLike, removeLike}= likeSlice.actions

export default likeSlice.reducer

// const likeReducer = (state= initialState, action:AnyAction)=>{
//   switch(action.type){
//     case 'ADD_LIKE':
//       return {
//         ...state,
//         [action.id]: true,
//       }
//       case 'REMOVE_LIKE':
//         return {
//           ...state,
//           [action.id]: false,
//         }
//       default:
//         return state
//   }
// }

// export default likeReducer