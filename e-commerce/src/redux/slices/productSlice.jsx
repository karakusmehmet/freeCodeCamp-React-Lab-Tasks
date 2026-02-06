import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE_URL = "https://fakestoreapi.com"

export const getAllProduct = createAsyncThunk("getAllProducts", async () => {
    const response =  await axios.get(BASE_URL + "/products");
    return response.data;
})

const productSlice = createSlice({
    name: "product",
    initialState : {
        products : [],
        selectedProduct: {},
        loading: false,
    },
    reducers: {
        setSelectedProduct : (state,action) => {
            state.selectedProduct = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(getAllProduct.fulfilled, (state,action) => {
            state.loading = false;
            state.products = action.payload;
        });
    }

})
export const {setSelectedProduct} = productSlice.actions;
export default productSlice.reducer