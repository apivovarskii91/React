import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product } from 'utils/productsArray'

const initialState: Product[] = []

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/8ef75a04-ca6b-460c-9bff-d6d0af894b29'
        )

        return response.data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchProducts.fulfilled,
            (state, action) => action.payload
        )
    },
})

export default productsSlice.reducer
