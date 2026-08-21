import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setEditIndex, updateField, saveContact } from '../Redux/Slices/ContactSlice';

const EditContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams(); //get index from route

    const { formData, items, status, error } = useSelector(
        (state) => state.contact
      );

    useEffect (() => {
      if(id !== undefined) {
        const numericId = parseInt(id, 10);
        dispatch(setEditIndex(numericId));

        if(items[numericId]){
          dispatch(updateField({name: "name", value: items[numericId].name}));
          dispatch(updateField({name: "email", value: items[numericId].email}));
          dispatch(updateField({name: "message", value: items[numericId].message}));
        }
      }
    }, [dispatch, id, items]);

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
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name }
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
          />
        </div>

        <button 
        type="submit" style={{ padding: "10px 20px" }}>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditContact