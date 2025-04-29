import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCart = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleCreate = () => {
        const cartId = Math.random().toString(36).substring(2, 6);
        localStorage.setItem('username', name);
        navigate(`/cart/${cartId}`);
      };

      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
          <h2 className="text-3xl font-semibold mb-4">Create a New Cart</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 w-full max-w-md border border-gray-300 rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      );
    };



export default CreateCart;
