"use client"; // Add this directive at the top of your component file

import React, { useEffect, useState } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service'; // Adjust the import path if necessary

const ShoppingList = ({ user }) => {
  const [items, setItems] = useState([]); // State to hold the shopping list items
  const [newItemName, setNewItemName] = useState(''); // State for new item input

  // Function to load items from Firestore
  const loadItems = async () => {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  // useEffect to load items when the component mounts
  useEffect(() => {
    loadItems(); // Call loadItems when the component mounts
  }, [user.uid]); // Dependency array includes user.uid

  // Function to handle adding a new item
  const handleAddItem = async () => {
    if (!newItemName) return; // Prevent adding empty items
    try {
      const newItem = { name: newItemName }; // Create new item object
      const newItemId = await addItem(user.uid, newItem); // Call addItem
      setItems([...items, { id: newItemId, ...newItem }]); // Update state with new item
      setNewItemName(''); // Clear input field
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default ShoppingList;
