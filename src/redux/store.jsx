
import { configureStore } from "@reduxjs/toolkit";
import RouteSlice from "./Slices/RouteSlice";
import { apiOfertaSlice } from "../features/ofertas-api-slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: {
        subRoutePage: RouteSlice,
        [apiOfertaSlice.reducerPath]: apiOfertaSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiOfertaSlice.middleware)
    }
})

setupListeners(store.dispatch);