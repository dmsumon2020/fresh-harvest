"use client";

import React, { useState } from "react";
import { use } from "react"; // ← use hook to unwrap promises
import {
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
} from "@/store/productsApi";
import { FaCartArrowDown } from "react-icons/fa";
import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";

export default function Product({ params }) {
  const resolvedParams = use(params);
  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useGetProductByIdQuery(resolvedParams.id);

  const categoryId = product?.categoryId;

  const {
    data: category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetCategoryByIdQuery(categoryId, {
    skip: !categoryId,
  });

  const [quantity, setQuantity] = useState(1);

  if (productLoading)
    return <div className="text-center py-10">Loading product...</div>;

  if (productError || !product)
    return (
      <div className="text-center text-red-500 py-10">Product not found.</div>
    );

  if (categoryLoading)
    return <div className="text-center py-4">Loading category...</div>;

  if (categoryError)
    return (
      <div className="text-center text-red-500 py-4">Category not found.</div>
    );

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image, Details, Buttons... */}
      </div>

      <CategoryProducts
        categoryId={product?.categoryId}
        excludeId={product?.id}
      />
    </>
  );
}
