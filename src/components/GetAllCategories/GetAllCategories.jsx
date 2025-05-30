"use client";

import { useGetCategoriesQuery } from "@/store/productsApi";

export default function GetAllCategories() {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  console.log(categories);

  if (isLoading)
    return <p className="text-center py-10">Loading categories...</p>;

  if (error)
    return (
      <p className="text-center py-10 text-red-500">Error loading categories</p>
    );

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 py-6 px-4">
      {/* "All" Button */}
      <button
        className="px-6 py-3 bg-white text-[#4A4A52] font-semibold border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
        onClick={() => {
          console.log("Clicked category: All");
        }}
      >
        All
      </button>

      {/* Dynamic Category Buttons */}
      {categories?.map((category) => (
        <button
          key={category.id}
          className="px-6 py-3 bg-white text-[#a6a6a6] font-normal border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => {
            console.log("Clicked category:", category.categoryName);
          }}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
}
