import React from "react";
import { useGetProductsQuery } from "../Redux/Slices/ProductSlice";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>error</p>
      </>
    );
  }
  return (
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Product Catalog
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div class="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center p-4 mb-4 overflow-hidden">
              <img
                src="placeholder.jpg"
                alt="Product Title"
                class="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>

            <div>
              <span class="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                Category
              </span>
              <h3
                class="text-sm font-medium text-gray-900 line-clamp-2 mb-2"
                title="Product Title"
              >
                Product Title Here
              </h3>
            </div>

            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span class="text-lg font-bold text-gray-900">$0.00</span>
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors duration-150 shadow-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
