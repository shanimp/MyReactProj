import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl : "https://jsonplaceholder.typicode.com"}),

    endpoints: (builder) => ({            //builder handle async, promises function
        getUsers: builder.query({
            query: () => "users",
        }),
        getUserPosts:builder.query({
            query: (userId) => `posts?userId=${userId}`,
        })
    }),
});

//Export the auto-generated hook for the getUsers query
const {useGetUsersQuery, useGetUserPostsQuery} = usersApi;
export {useGetUsersQuery, useGetUserPostsQuery};