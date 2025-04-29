import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinCart = () => {
    const [name, setName] = useState('');
    const [cartId, setCartId] = useState('');
    const navigate = useNavigate();

    const handleJoin = () => {
        localStorage.setItem('username', name);
        navigate(`/cart/${cartId}`);
    };

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-4">Join a Cart</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 w-full max-w-md border border-gray-300 rounded mb-4"
        value={name}         
        onChange={(e) => setName(e.target.value)} />
        <input
        type="text"
        placeholder="Cart Code"
        className="p-3 w-full max-w-md border border-gray-300 rounded mb-4"
        value={cartId}
        onChange={(e) => setCartId(e.target.value)}
        />
      <button
        onClick={handleJoin}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Join
      </button>
      </div>
    )
};



export default JoinCart;
