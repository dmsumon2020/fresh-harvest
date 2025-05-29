"use client";

import React from "react";
import { useGetProductsQuery } from "@/store/productsApi";
import Heading from "../Heading/Heading";
import Subheading from "../Subheading/Subheading";
import Link from "next/link";

const CategoryProducts = ({ categoryId, excludeId }) => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products.</div>;

  // Filter by categoryId and exclude the current product
  const filteredProducts = products
    ?.filter(
      (product) => product.categoryId === categoryId && product.id !== excludeId
    )
    .slice(0, 4);

  if (!filteredProducts?.length)
    return <div>No related products found for this category.</div>;

  return (
    <section className="max-w-6xl mx-auto p-4">
      <Subheading title="Our Products" />
      <Heading title="Related Products" align="text-center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[60px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.productName}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            </Link>
            <h3 className="text-lg font-semibold text-center">
              {product.productName}
            </h3>
            <p className="text-green-600 font-bold text-center mb-3">
              ${product.price.toFixed(2)}
            </p>
            <button className="rubik-font-class mt-auto px-4 py-2 w-full block text-[18px] font-medium border border-[#d9d9d9] bg-white rounded-[10px] hover:bg-[#FF6A1A] hover:text-white transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
