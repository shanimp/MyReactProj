import React from 'react'

const UserList = () => {
  return (
    <div>
        <div class="max-w-4xl mx-auto p-6 font-sans">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
        Users from JSONPlaceholder (RTK Query)
      </h2>

      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
            <div>
              <strong class="text-lg text-gray-900 block mb-1">
                User Name
              </strong>
              <span class="text-sm text-blue-600 block mb-2">
                user@example.com
              </span>
            </div>

            <div class="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 uppercase tracking-wider font-medium">
              Company: 
              <span class="text-gray-700 normal-case font-normal">
                Company Name
              </span>
            </div>
            <button>
              See Post Details
            </button>
          </li>
      </ul>
</div>
    </div>
  )
}

export default UserList