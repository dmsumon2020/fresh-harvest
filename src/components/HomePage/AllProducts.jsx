"use client";

import { useGetProductsQuery } from "@/store/productsApi";
import React from "react";
import Subheading from "../Subheading/Subheading";
import Heading from "../Heading/Heading";
import Link from "next/link";

const AllProducts = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading)
    return <p className="text-center py-10">Loading products...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-500">Error loading products</p>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 py-[150px]">
      <Subheading title={"Our Products"} />
      <Heading title={"Our Fresh Products"} align="text-center" />
      <p className="text-center mb-8">
        Discover the freshest products handpicked just
        <br />
        From farm to table, we deliver quality you
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-2xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center"
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

export default AllProducts;
