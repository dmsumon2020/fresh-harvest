"use client";

import React, { useState } from "react";
import {
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
} from "@/store/productsApi"; // adjust the import path as needed
import { FaCartArrowDown } from "react-icons/fa";

export default function Product({ params }) {
  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useGetProductByIdQuery(params.id);

  // Grab categoryId from product if available
  const categoryId = product?.categoryId;

  const {
    data: category,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetCategoryByIdQuery(categoryId, {
    skip: !categoryId, // skip fetching if no categoryId yet
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
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Image Section */}
      <div className="bg-white p-4 rounded-lg border border-[#e5e5e5] shadow-sm flex justify-center items-center">
        <img
          src={product.images?.[0]}
          alt={product.productName}
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-start gap-4">
        {/* Category */}
        <span className="inline-block text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full w-fit">
          {category?.categoryName || "Category"}
        </span>

        {/* Name */}
        <h1 className="rubik-font-class text-[48px] font-[500] leading-[100%] tracking-[-0.02em] text-gray-900">
          {product.productName}
        </h1>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm font-medium gap-1">
          {"★".repeat(5)}
          <span className="text-gray-700 ml-2">
            5.0 <span className="text-sm text-gray-500">(1 review)</span>
          </span>
        </div>

        {/* Price */}
        <div className="rubik-font-class text-[#FF6A1A] font-[600] text-[32px] leading-[100%] tracking-[-2%]">
          ${product.price}/kg
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mt-4">
          <span className="font-semibold">Quantity</span>
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-lg font-bold"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 text-lg font-bold"
            >
              +
            </button>
          </div>
          <span className="text-gray-500">/kg</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 px-12 py-3  text-[18px] font-semibold text-[#4A4A52] rounded-lg bg-[#f4f6f6] hover:bg-[#FF6A1A] hover:text-white">
            Save as favorite
          </button>
          <button className="flex items-center gap-2 px-12 py-3 bg-[#FF6A1A] text-[18px] font-semibold text-white rounded-lg hover:bg-[#f4f6f6] hover:text-[#4A4A52]">
            <FaCartArrowDown />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
