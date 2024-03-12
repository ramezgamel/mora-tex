import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:4444",
    credentials: "include",
  }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});

export default apiSlice;
