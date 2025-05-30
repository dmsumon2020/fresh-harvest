import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      transformResponse: (res) => res.data,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      transformResponse: (res) => res.data,
    }),
    getCategoryById: builder.query({
      query: (id) => `category/${id}`,
      transformResponse: (res) => res.data,
    }),
    getCategories: builder.query({
      query: () => "category",
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
  useGetCategoriesQuery,
} = productsApi;
