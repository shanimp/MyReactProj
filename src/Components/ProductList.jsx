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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Product Catalog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
          <div 
          key={product.id}
          className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center p-4 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>

            <div>
              <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                {product.category}
              </span>
              <h3
                className="text-sm font-medium text-gray-900 line-clamp-2 mb-2"
                title={product.title}
              >
                {product.title}
              </h3>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors duration-150 shadow-sm">
                View Details
              </button>
            </div>
          </div>))}
          
        </div>
      </div>
    </div>
  );
};

export default ProductList;
