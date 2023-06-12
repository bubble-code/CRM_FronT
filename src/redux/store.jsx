
import { configureStore } from "@reduxjs/toolkit";
import RouteSlice from "./Slices/RouteSlice";
import { apiOfertaSlice } from "../features/ofertas-api-slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiEmpresa } from "../features/empresa-api-slice";


export const store = configureStore({
    reducer: {
        subRoutePage: RouteSlice,
        [apiOfertaSlice.reducerPath]: apiOfertaSlice.reducer,
        [apiEmpresa.reducerPath]: apiEmpresa.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false }).concat(apiOfertaSlice.middleware).concat(apiEmpresa.middleware)
    }
})

setupListeners(store.dispatch);