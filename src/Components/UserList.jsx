import React from "react";
import { useGetUsersQuery } from "../Redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const { data: users, error, isLoading, isError } = useGetUsersQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  if (isError) {
    return (
      <>
      <div>
        <p>{error?.error || error?.message || "failed to fetch users"}</p>
      </div>
        
      </>
    );
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Users from JSONPlaceholder (RTK Query)
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users?.map((user) => (
            <li
              key={user.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                <strong className="text-lg text-gray-900 block mb-1">
                {user.name}
                </strong>
                <span className="text-sm text-blue-600 block mb-2">
                  {user.email}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 uppercase tracking-wider font-medium">
                Company:{""}
                <span className="text-gray-700 normal-case font-normal">
                  {user.company.name}
                </span>
              </div>
              <button
                onClick={() => {
                  navigate(`/userposts/${user.id}`)
              }}
              >See Post Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
