'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context'; // Update the import path
import { useRouter } from 'next/router'; // Import useRouter for redirection

export default function Page() {
  const router = useRouter(); // Initialize the router
  const { user } = useUserAuth(); // Get the user object from the hook

  // Check if the user is logged in
  if (!user) {
    // Optional: Redirect to the landing page if not logged in
    router.push('/landing-page'); // Adjust the path to your landing page
    return null; // Prevent rendering the page
  }

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (name) => {
    const cleanedName = name.split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-200 min-h-screen p-4">
      <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Shopping List</h1>
        <NewItem onAddItem={(item) => setItems([...items, item])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-center text-green-600">Meal Ideas</h2>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
