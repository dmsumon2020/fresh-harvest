import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      transformResponse: (res) => res.data.slice(0, 8),
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      transformResponse: (res) => res.data,
    }),
    getCategoryById: builder.query({
      query: (id) => `category/${id}`,
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
} = productsApi;
