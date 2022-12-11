import { configureStore } from '@reduxjs/toolkit'
import dataCitis from '../selector/dataCitySlice'


export const store = configureStore({
    reducer: {
        city: dataCitis,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})