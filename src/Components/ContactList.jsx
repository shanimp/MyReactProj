import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteContact, resetForm, setEditIndex } from '../Redux/Slices/ContactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

//Extract items from redux store
const { items } = useSelector((state) => state.contact);

const handleDelete = (index) => {
  dispatch(deleteContact(index));
};

const handleEdit = (index) => {
  dispatch(setEditIndex(index));
  navigate(`/editcontact/${index}`);
};

const handleAddNew = () => {
  dispatch(resetForm());
  navigate(``)
}

  return (
    <div>
        <div className="p-6">
        <table className="w-full border-collapse border border-gray-300">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">ID</th>
              <th className="border border-gray-300 p-2 text-left">Name</th>
              <th className="border border-gray-300 p-2 text-left">Email</th>
              <th className="border border-gray-300 p-2 text-left">Message</th>
              <th className="border border-gray-300 p-2 text-left">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr 
                key={index} 
                className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{item.index}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.email}</td>
              <td className="border border-gray-300 p-2">{item.message}</td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                onClick={() => handleDelete(index)}
                  className="rounded bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-200 transition-colors"
                >
                  Delete
                </button>
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  onClick={() => handleEdit(index)}
                  className="rounded bg-amber-300 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-200 transition-colors"
                >
                  Edit
                </button>
              </td>
            </tr>
              ))            
            ) : (
            <tr>
              <td colspan="5" className="p-6 text-center text-gray-500">
                "No contacts found. click "Add new contact" to create one.
              </td>
            </tr>) 
            }           
          </tbody>
        </table>

        <div className="mt-6 flex justify-center">
          <button
            className="rounded-lg bg-sky-100 px-5 py-2.5 text-sm font-semibold text-sky-700 shadow-sm transition-colors hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactList