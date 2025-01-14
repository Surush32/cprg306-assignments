import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border-b border-gray-200">
      <span className="font-bold">{name}</span> - 
      <span className="text-gray-600"> {quantity}</span> - 
      <span className="text-blue-500">{category}</span>
    </li>
  );
};

export default Item;