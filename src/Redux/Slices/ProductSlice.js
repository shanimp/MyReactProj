import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl : "https://fakestoreapi.com/"}),
    endpoints: (builder) => ({            //builder handle async, promises function
        getProducts: builder.query({
            query: () => "products",
        }),
    }),
});
export const {useGetProductsQuery} = ProductApi;