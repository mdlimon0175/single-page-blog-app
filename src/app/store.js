/*
// Title: Redux store
// Description: Redux store configuration.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import postsSlice from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    posts: postsSlice,
  },
  middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(apiSlice.middleware)
});

export default store;