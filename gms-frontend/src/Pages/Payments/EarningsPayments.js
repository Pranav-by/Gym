import React, { useState } from 'react';

const EarningsPayments = () => {
  const [earnings, setEarnings] = useState([
    { date: '2025-04-01', source: 'Membership', amount: 1000 },
    { date: '2025-04-02', source: 'PT Session', amount: 1500 },
    { date: '2025-04-03', source: 'Yoga Class', amount: 800 },
  ]);

  const total = earnings.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-8 text-white min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">💰 Earnings & Payments</h1>

      {/* Total Summary */}
      <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Total Earnings:</h2>
        <p className="text-green-400 text-2xl font-bold">₹{total}</p>
      </div>

      {/* Earnings Table */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="text-green-300 border-b border-gray-600">
              <th className="py-2">Date</th>
              <th className="py-2">Source</th>
              <th className="py-2">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((entry, idx) => (
              <tr key={idx} className="hover:bg-gray-700 transition-all">
                <td className="py-2">{entry.date}</td>
                <td className="py-2">{entry.source}</td>
                <td className="py-2 text-green-300 font-semibold">₹{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarningsPayments;
