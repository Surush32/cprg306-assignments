import React from 'react';
import Item from './items';

const items = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 2,
    category: "pantry",
  },
];

const ItemsList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping List</h1>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;