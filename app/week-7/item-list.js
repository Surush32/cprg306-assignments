"use client"; // Add this line to mark the component as a client component

import React, { useState } from 'react';
import Item from './item';
// import items from './item.json'; // Remove this import

const ItemList = ({ items }) => { // Add items prop
  const [sortBy, setSortBy] = useState('name'); // Initialize sortBy state

  // Sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="p-4 max-w-md text-left">
      <div className="mb-4 flex space-x-2"> {/* Use flex for better alignment */}
        <button 
          onClick={() => setSortBy('name')} 
          className={`px-4 py-2 rounded-lg transition duration-200 
            ${sortBy === 'name' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} 
            hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy('category')} 
          className={`px-4 py-2 rounded-lg transition duration-200 
            ${sortBy === 'category' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} 
            hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-4">
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;