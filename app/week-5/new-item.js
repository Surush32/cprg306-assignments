'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('produce');

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Item</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item Name"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-4 py-2 bg-red-600 text-white rounded-full shadow-md disabled:opacity-50 hover:bg-red-700 transition duration-200"
            >
              -
            </button>
            <div className="text-2xl font-semibold">{quantity}</div>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-4 py-2 bg-green-600 text-white rounded-full shadow-md disabled:opacity-50 hover:bg-green-700 transition duration-200"
            >
              +
            </button>
          </div>
          <div className="flex flex-col">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-200">
            +
          </button>
        </form>
      </div>
    </div>
  );
}
