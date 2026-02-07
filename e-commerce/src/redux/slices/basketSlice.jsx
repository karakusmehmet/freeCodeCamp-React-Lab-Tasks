import {  createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [];

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket",JSON.stringify(basket));
}
 
export const basketSlice = createSlice({
    name:"basket",
    initialState: {
        products: getBasketFromStorage(),
        drawer: false,
        totalAmount: 0,
    },
    reducers: {
        addToBasket: (state,action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if(findProduct) {
                const extractedProducts = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products)
            } else{
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products)
            }
        },
        setDrawer : (state) => {
            state.drawer = !state.drawer
        },
        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price* product.count
            })
        },
        deleteFromBasket : (state,action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        }
    }

})
export const { addToBasket, setDrawer, calculateBasket, deleteFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
