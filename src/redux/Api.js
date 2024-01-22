import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    getUsers: builder.query({
      query: () => "users",
    }),
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (newUser) => ({
        url: "login",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const {useLoginUserMutation, useGetPostsQuery, useGetUsersQuery, useRegisterUserMutation } =
  Api;
