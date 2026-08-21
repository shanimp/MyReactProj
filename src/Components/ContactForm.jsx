import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { saveContact, updateField } from '../Redux/Slices/ContactSlice';

const ContactForm = () => {
  const dispatch = useDispatch(); //actions execute
  const navigate = useNavigate();

  const { formData, editIndex, status, error } = useSelector(
    (state) => state.contact
  );

  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch(updateField({name, value}));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveContact());
    navigate("/contactlist");
  };

  return (
    <div>
       <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
          {/* Form Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {editIndex !== null ? "Edit Contact" : "Get in Touch"}
            </h2>
            <p className="text-sm text-gray-500">
              {editIndex !== null ? "Update the details below." : "Please fill out the form below to send a message."}
            </p>
          </div>

          {/* Form Body */}
          <form  onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="John Doe"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="john@example.com"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                rows={4}
                placeholder="Write your message here..."
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "Loading"}
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
            >
              {status === "Loading" ? "Saving..." : editIndex !== null ? "Update Contact" : "Submit Message"}
          
            </button>
          </form>
        </div>
      </div>
 
    </div>
  )
}

export default ContactForm