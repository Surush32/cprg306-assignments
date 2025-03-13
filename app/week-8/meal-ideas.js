'use client';

import React, { useEffect, useState } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {ingredient ? (
        <>
          <h3 className="text-xl font-semibold">Meal Ideas for {ingredient}:</h3>
          <ul className="mt-2">
            {meals.length > 0 ? (
              meals.map(meal => (
                <li key={meal.idMeal} className="border-b py-2">{meal.strMeal}</li>
              ))
            ) : (
              <li>No meal ideas found.</li>
            )}
          </ul>
        </>
      ) : (
        <p>Select an item to see meal ideas.</p>
      )}
    </div>
  );
};

export default MealIdeas; 