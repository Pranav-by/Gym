import React, { useState } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';

const DietNutritionPlans = () => {
  const [plans, setPlans] = useState([
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

  const [showForm, setShowForm] = useState(false);
  const [newPlan, setNewPlan] = useState({ title: '', duration: '', calories: '', meals: [] });
  const [editingPlan, setEditingPlan] = useState(null);

  const addPlan = () => {
    if (newPlan.title && newPlan.duration && newPlan.calories && newPlan.meals.length) {
      const newId = plans.length + 1;
      const updatedPlans = [...plans, { ...newPlan, id: newId }];
      setPlans(updatedPlans);
      setNewPlan({ title: '', duration: '', calories: '', meals: [] });
      setShowForm(false);
    }
  };

  const handleEditPlan = (plan) => {
    setEditingPlan(plan);
  };

  const saveEditPlan = () => {
    const updatedPlans = plans.map((plan) =>
      plan.id === editingPlan.id ? editingPlan : plan
    );
    setPlans(updatedPlans);
    setEditingPlan(null);
  };

  const handleDeletePlan = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
  };

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🥗 Diet & Nutrition Plans</h1>

      {/* Add Plan Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-xl transition"
        >
          <Plus /> Add Plan
        </button>
      </div>

      {/* Modal for Adding Diet Plan */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md">
            <h2 className="text-2xl text-white font-bold">➕ Add Diet Plan</h2>
            <input
              type="text"
              placeholder="Plan Title"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newPlan.title}
              onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Duration"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newPlan.duration}
              onChange={(e) => setNewPlan({ ...newPlan, duration: e.target.value })}
            />
            <input
              type="text"
              placeholder="Calories"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newPlan.calories}
              onChange={(e) => setNewPlan({ ...newPlan, calories: e.target.value })}
            />
            <textarea
              placeholder="Meals (comma separated)"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newPlan.meals.join(', ')}
              onChange={(e) =>
                setNewPlan({
                  ...newPlan,
                  meals: e.target.value.split(',').map((meal) => meal.trim()),
                })
              }
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowForm(false)} className="text-red-400">
                Cancel
              </button>
              <button
                onClick={addPlan}
                className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Plan Modal */}
      {editingPlan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md">
            <h2 className="text-2xl text-white font-bold">📝 Edit Diet Plan</h2>
            <input
              type="text"
              placeholder="Plan Title"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={editingPlan.title}
              onChange={(e) =>
                setEditingPlan({ ...editingPlan, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Duration"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={editingPlan.duration}
              onChange={(e) =>
                setEditingPlan({ ...editingPlan, duration: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Calories"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={editingPlan.calories}
              onChange={(e) =>
                setEditingPlan({ ...editingPlan, calories: e.target.value })
              }
            />
            <textarea
              placeholder="Meals (comma separated)"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={editingPlan.meals.join(', ')}
              onChange={(e) =>
                setEditingPlan({
                  ...editingPlan,
                  meals: e.target.value.split(',').map((meal) => meal.trim()),
                })
              }
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditingPlan(null)} className="text-red-400">
                Cancel
              </button>
              <button
                onClick={saveEditPlan}
                className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Diet Plans List */}
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

            {/* Edit Button */}
            <button
              onClick={() => handleEditPlan(plan)}
              className="text-blue-400 hover:text-blue-600 mt-4"
            >
              <Edit size={20} /> Edit
            </button>

            {/* Delete Button */}
            <button
              onClick={() => handleDeletePlan(plan.id)}
              className="text-red-500 hover:text-red-700 mt-4"
            >
              <Trash2 size={20} /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietNutritionPlans;
