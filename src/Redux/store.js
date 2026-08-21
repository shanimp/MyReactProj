import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./Slices/ProductSlice";
import { usersApi } from "./Slices/UserSlice";
import ContactSlice from "./Slices/ContactSlice";

export const store = configureStore({
    reducer: {
        [ProductApi.reducerPath]: ProductApi.reducer, 
        [usersApi.reducerPath]: usersApi.reducer,
        contact:ContactSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware).concat(usersApi.middleware),
});