import React from "react";
import { useGetUserPostsQuery } from "../Redux/Slices/UserSlice";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const { userid } = useParams();

  const {
    data: posts,
    error,
    isLoading,
  } = useGetUserPostsQuery(userid, {
    skip: !userid,
  });

  if (!userid) {
    return (
      <div className="flex h-full items-center justify-center p-6 text-gray-500 italic">
        Select a user to view their posts.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center p-6 text-gray-500 italic">
        Loading posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
        Failed to load posts. Please try again later.
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 italic">
        No posts found for this user.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2 text-center">
        Posts
      </h2>
      <ul className="space-y-4">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-cyan-300 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-base font-semibold text-gray-900 mb-1 capitalize">
              {post.title}
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;