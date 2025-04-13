import React, { useState } from 'react';

const WorkoutSchedule = () => {
  const [workouts, setWorkouts] = useState([
    {
      day: 'Monday',
      exercises: ['Chest Press', 'Incline Dumbbell Press', 'Push-ups'],
    },
    {
      day: 'Tuesday',
      exercises: ['Squats', 'Lunges', 'Leg Press'],
    },
    {
      day: 'Wednesday',
      exercises: ['Rest Day'],
    },
    {
      day: 'Thursday',
      exercises: ['Pull-ups', 'Deadlifts', 'Barbell Row'],
    },
    {
      day: 'Friday',
      exercises: ['Shoulder Press', 'Lateral Raises', 'Plank'],
    },
    {
      day: 'Saturday',
      exercises: ['Cardio: Treadmill + Cycling'],
    },
    {
      day: 'Sunday',
      exercises: ['Yoga & Stretching'],
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedExercises, setEditedExercises] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedExercises(workouts[index].exercises.join(', '));
  };

  const handleSave = () => {
    const updated = [...workouts];
    updated[editingIndex].exercises = editedExercises.split(',').map(e => e.trim());
    setWorkouts(updated);
    setEditingIndex(null);
  };

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-green-400 mb-6">🏋️ Weekly Workout Schedule</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((dayPlan, index) => (
          <div
            key={index}
            className="bg-gray-800 relative rounded-xl shadow-md p-6 hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">{dayPlan.day}</h2>

            {editingIndex === index ? (
              <div>
                <textarea
                  value={editedExercises}
                  onChange={(e) => setEditedExercises(e.target.value)}
                  className="w-full h-24 text-sm bg-gray-900 text-white p-2 rounded mb-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-black font-semibold text-sm px-4 py-1 rounded-full shadow hover:bg-green-400 transition-all"
                >
                  ✅ Save
                </button>
              </div>
            ) : (
              <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                {dayPlan.exercises.map((exercise, idx) => (
                  <li key={idx}>✔ {exercise}</li>
                ))}
              </ul>
            )}

            {/* Fancy Edit Button */}
            {editingIndex !== index && (
              <button
                onClick={() => handleEdit(index)}
                className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-xs px-3 py-1 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
              >
                ✨ Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSchedule;
