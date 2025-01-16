import React from 'react';
import ItemList from './items-list';

/**
 * Page component renders the main shopping list page.
 * Displays a title and the ItemsList component.
 */
const Page = () => {
  return (
    <main className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;