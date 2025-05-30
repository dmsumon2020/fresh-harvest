"use client";

import { useState } from "react";
import { useGetProductsQuery } from "@/store/productsApi";
import Link from "next/link";
import Button from "@/components/Button/Button";
import GetAllCategories from "@/components/GetAllCategories/GetAllCategories";
import Subheading from "@/components/Subheading/Subheading";
import Heading from "@/components/Heading/Heading";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading)
    return <p className="text-center py-10">Loading products...</p>;

  if (error)
    return (
      <p className="text-center py-10 text-red-500">Error loading products</p>
    );

  // Filter products by selected category or show all if null
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory)
    : products;

  // Limit to max 8 products
  const visibleProducts = filteredProducts.slice(0, 8);

  return (
    <section className="max-w-6xl mx-auto px-4 py-[150px]">
      <Subheading title={"Our Products"} />
      <Heading title={"Our Fresh Products"} align="text-center" />
      <p className="text-center mb-8">
        Discover the freshest products handpicked just
        <br />
        From farm to table, we deliver quality you
      </p>

      <GetAllCategories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
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

            <Link href={`/product/${product.id}`}>
              <button className="rubik-font-class cursor-pointer mt-auto px-4 py-2 w-full block text-[18px] font-medium border border-[#d9d9d9] bg-white rounded-[10px] hover:bg-[#FF6A1A] hover:text-white transition">
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
