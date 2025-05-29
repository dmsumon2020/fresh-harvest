import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      transformResponse: (response) => response.data.slice(0, 8), // Limit to 8
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
