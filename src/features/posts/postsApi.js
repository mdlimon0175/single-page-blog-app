/*
// Title: postsApi
// Description: posts related all API request handled here.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import apiSlice from "../api/apiSlice";

const postsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => "posts",
      providesTags: ["Posts"]
    }),
    storeOrUpdatePost: builder.mutation({
      query: ({url, data, method}) => ({ url, body: data, method }),
      invalidatesTags: ["Posts"]
    }),
    deletePost: builder.mutation({
      query: id => ({ url: `posts/${id}`, method: "DELETE" }),
      invalidatesTags: ["Posts"]
    })
  })
});

export const { 
  useGetPostsQuery,
  useStoreOrUpdatePostMutation,
  useDeletePostMutation 
} = postsApi;