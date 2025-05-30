"use client";

import { useGetCategoriesQuery } from "@/store/productsApi";

export default function GetAllCategories({
  selectedCategory,
  onSelectCategory,
}) {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

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
        className={`px-6 py-3 font-semibold border rounded-full transition-colors ${
          selectedCategory === null
            ? "bg-[#749B3F] text-white border-[#749B3F]"
            : "bg-white text-[#4A4A52] border-gray-300 hover:bg-gray-100"
        }`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>

      {/* Dynamic Category Buttons */}
      {categories?.map((category) => {
        const isActive = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            className={`px-6 py-3 font-semibold border rounded-full transition-colors cursor-pointer ${
              isActive
                ? "bg-[#749B3F] text-white border-[#749B3F]"
                : "bg-white text-[#4A4A52] border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.categoryName}
          </button>
        );
      })}
    </div>
  );
}
