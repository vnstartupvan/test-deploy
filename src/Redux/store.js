import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterReducer'
import shopReducer from './shopReducer'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        shop: shopReducer,
    },
})