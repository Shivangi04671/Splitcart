import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const sampleProducts = [
    { id: 1, name: 'Apples', price: 50 },
    { id: 2, name: 'Toothpaste', price: 100 },
    { id: 3, name: 'Bread', price: 30 },
  ];

  const CartRoom = () => {
    const { cartId } = useParams();
    const username = localStorage.getItem('username') || 'Guest';
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
        setCart([...cart, { ...product, addedBy: username }]);
      };
      return (
        <div className="min-h-screen p-6 bg-white">
          <h2 className="text-2xl font-bold mb-2">Cart Room: {cartId}</h2>
          <p className="text-gray-700 mb-4">Welcome, {username}</p>
    
          <h3 className="text-xl font-semibold mb-2">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sampleProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow-sm bg-gray-50">
                <p className="font-medium">{product.name}</p>
                <p className="text-gray-600">₹{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Shared Cart</h3>
      <ul className="divide-y">
        {cart.map((item, index) => (
          <li key={index} className="py-2 flex justify-between">
            <span>{item.name} (₹{item.price})</span>
            <span className="text-sm text-blue-500"> added by {item.addedBy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartRoom;
