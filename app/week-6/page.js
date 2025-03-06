import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-6 bg-gray-100 text-left">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;