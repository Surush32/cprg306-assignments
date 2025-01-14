import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold text-neon-green">{name}</p>
        <p className="text-sm text-neon-blue">Quantity: {quantity}</p>
        <p className="text-sm text-neon-blue">Category: {category}</p>
      </div>
      <div className="text-right">
        <button className="bg-neon-pink text-white px-3 py-1 rounded-md hover:bg-neon-pink-dark">Edit</button>
        <button className="bg-neon-orange text-white px-3 py-1 rounded-md ml-2 hover:bg-neon-orange-dark">Delete</button>
      </div>
    </div>
  );
};

export default Item;