import React, { useState } from 'react';

const MembershipPlans = () => {
  const originalPlans = [
    { name: 'Basic Plan', duration: '1 Month', price: 999, features: ['Gym Access'] },
    { name: 'Standard Plan', duration: '3 Months', price: 2499, features: ['Gym Access', '1 Free Personal Training Session'] },
    { name: 'Gold Plan', duration: '6 Months', price: 4499, features: ['Gym + Cardio', 'Diet Plan', 'Free PT Session Monthly'] },
    { name: 'Platinum Plan', duration: '1 Year', price: 7999, features: ['All Access', 'Monthly Progress Check', 'Diet Consultation'] },
  ];

  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');
  
  const filteredPlans = originalPlans
    .filter(plan => 
      plan.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? plan.duration === filter : true)
    )
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">📋 Membership Plans</h1>

      {/* Search, Filter, Sort Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search plans..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600"
        >
          <option value="">All Durations</option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Sort ₹ {sortOrder === 'asc' ? '⬆️' : '⬇️'}
        </button>
      </div>

      {/* Plans */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-green-400 mb-2">{plan.name}</h2>
            <p className="text-gray-300 mb-1">🕒 {plan.duration}</p>
            <p className="text-yellow-400 font-semibold text-lg mb-4">💰 ₹{plan.price}</p>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
