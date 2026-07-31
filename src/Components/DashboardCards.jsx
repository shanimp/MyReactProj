import React from 'react'
import {useNavigate } from 'react-router-dom';

const DashboardCards = () => {
    const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">
        Dashboard Overview
      </h2>

      {/* Grid: 1 col on mobile, 2 on medium, 3 on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* UserList Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              👥
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              UserList
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Manage system users, view profiles, and handle permissions
              efficiently from a centralized directory.
            </p>
          </div>
          <button
            onClick={() => {
                navigate("/userlist")
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-150 shadow-sm text-sm"
          >
            View Users
          </button>
        </div>

        {/* ProductList Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              📦
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ProductList
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Browse the catalog, monitor stock levels, and review item details
              fetched directly from the store API.
            </p>
          </div>
          <button
             onClick={() => {
                navigate("/productlist")
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-150 shadow-sm text-sm"
          >
            View Products
          </button>
        </div>

        {/* Contact Management Card (New) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              ✉️
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Messages
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Review submitted customer queries, update contact records, or
              create and dispatch new messages seamlessly.
            </p>
          </div>
          <div className="flex gap-2">
            <button
                onClick={() => {
                navigate("/contactlist")
            }}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-3 rounded-xl transition-colors duration-150 shadow-sm text-sm"
            >
              View List
            </button>
            <button
                onClick={() => {
                navigate("/contactform")
            }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-3 rounded-xl transition-colors duration-150 shadow-sm text-sm"
            >
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCards