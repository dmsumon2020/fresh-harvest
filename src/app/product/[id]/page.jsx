"use client";

import React, { useEffect, useState } from "react";

export default function Product({ params }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://code-commando.com/api/v1/products/${params.id}`
        );
        const json = await res.json();
        if (json.success) {
          setProduct(json.data);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to fetch product data.");
      }
    };

    fetchProduct();
  }, [params.id]);

  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div>
          <img
            src={product.images?.[0]}
            alt={product.productName}
            className="w-full h-80 object-contain rounded-xl shadow"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.productName}</h1>
          <p className="text-green-600 font-semibold text-xl">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Save as Favorites
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
