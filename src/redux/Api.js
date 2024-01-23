import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      console.log(token);
      return headers;
    },
  }),
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
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetPostsQuery,
  useGetUsersQuery,
  useRegisterUserMutation,
  useAddPostMutation,
} = Api;
