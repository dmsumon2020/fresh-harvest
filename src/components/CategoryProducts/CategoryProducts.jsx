"use client";

import React from "react";
import { useGetProductsQuery } from "@/store/productsApi";
import { FaCartArrowDown } from "react-icons/fa";

const CategoryProducts = ({ categoryId }) => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products.</div>;

  // Filter products by categoryId and limit to 4
  const filteredProducts = products
    ?.filter((product) => product.categoryId === categoryId)
    .slice(0, 4);

  if (!filteredProducts?.length)
    return <div>No products found for this category.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-sm flex flex-col items-center"
        >
          <img
            src={product.images?.[0]}
            alt={product.productName}
            className="w-full h-40 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
          <p className="text-orange-600 font-semibold text-xl mb-2">
            ${product.price}/kg
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#FF6A1A] text-white rounded hover:bg-[#e55a10]">
            <FaCartArrowDown /> Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
