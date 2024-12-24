import { configureStore } from '@reduxjs/toolkit'
import appReducer from "../redux/clices/appSlice";
import productReducer from "../redux/clices/productSlice"
import basketReducer from "../redux/clices/basketSlice"

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})