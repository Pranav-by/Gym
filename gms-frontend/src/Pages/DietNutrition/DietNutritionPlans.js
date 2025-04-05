import React, { useState } from 'react';

const DietNutritionPlans = () => {
  const [plans] = useState([
    {
      id: 1,
      title: 'Weight Loss Plan',
      duration: '4 Weeks',
      calories: '1500 kcal/day',
      meals: ['Oats Breakfast', 'Salad Lunch', 'Protein Shake Dinner'],
    },
    {
      id: 2,
      title: 'Muscle Gain Plan',
      duration: '6 Weeks',
      calories: '2500 kcal/day',
      meals: ['Eggs & Toast', 'Chicken & Rice', 'Beef & Veggies'],
    },
    {
      id: 3,
      title: 'Balanced Nutrition Plan',
      duration: '1 Month',
      calories: '2000 kcal/day',
      meals: ['Smoothie Bowl', 'Grilled Fish', 'Veggie Stir Fry'],
    },
    {
      id: 4,
      title: 'Vegan Plan',
      duration: '4 Weeks',
      calories: '1800 kcal/day',
      meals: ['Tofu Scramble', 'Quinoa Salad', 'Lentil Curry'],
    },
    {
      id: 5,
      title: 'Keto Plan',
      duration: '6 Weeks',
      calories: '1700 kcal/day',
      meals: ['Avocado Eggs', 'Zucchini Noodles', 'Cheese Omelette'],
    },
  ]);

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🥗 Diet & Nutrition Plans</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-bold text-green-400 mb-2">{plan.title}</h2>
            <p className="text-gray-300 mb-1">⏱ Duration: {plan.duration}</p>
            <p className="text-yellow-400 font-semibold mb-2">🔥 {plan.calories}</p>
            <h3 className="text-sm font-semibold text-blue-400 mb-1">Meals:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              {plan.meals.map((meal, index) => (
                <li key={index}>🍽️ {meal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietNutritionPlans;
