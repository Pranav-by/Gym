import React, { useState, useEffect } from 'react';

const WorkoutSchedule = () => {
  // This dummy data will be replaced with API data later
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

  // In future: useEffect to fetch from backend
  // useEffect(() => {
  //   fetch('/api/workout-schedule')
  //     .then(res => res.json())
  //     .then(data => setWorkouts(data));
  // }, []);

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-green-400 mb-6">🏋️ Weekly Workout Schedule</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((dayPlan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">{dayPlan.day}</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
              {dayPlan.exercises.map((exercise, idx) => (
                <li key={idx}>✔ {exercise}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSchedule;
