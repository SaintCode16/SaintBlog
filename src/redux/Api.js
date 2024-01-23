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
      console.log(headers);
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
    addComment: builder.mutation({
      query: (data, userId = JSON.parse(localStorage.getItem("id"))) => ({
        url: "comments",
        method: "POST",
        body: { ...data, userId },
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }),
    }),
    getUserData: builder.query({
      query: (id = JSON.parse(localStorage.getItem("id"))) => ({
        url: `users/${id}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
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
  useAddCommentMutation,
  useLoginUserMutation,
  useGetPostsQuery,
  useGetUsersQuery,
  useRegisterUserMutation,
  useGetUserDataQuery,
  useAddPostMutation,
} = Api;
