"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ParentDashboard() {
  // Sample data for analytics
  const [activityData] = useState([
    { day: "Mon", tasks: 2 },
    { day: "Tue", tasks: 4 },
    { day: "Wed", tasks: 3 },
    { day: "Thu", tasks: 5 },
    { day: "Fri", tasks: 2 },
  ]);

  const [payments] = useState([
    { month: "October", amount: 500, status: "Paid" },
    { month: "November", amount: 500, status: "Pending" },
  ]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, Parent!
        </h1>
        <p className="text-gray-600 text-lg">
          Overview of recent activity and payments.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Activity Chart */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">
            Recent Activity
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={activityData}>
              <XAxis dataKey="day" stroke="#92400e" />
              <YAxis stroke="#92400e" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="tasks"
                stroke="#b45309"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Payments Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">
            Payments
          </h2>
          <ul className="space-y-3">
            {payments.map((p, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-yellow-50 transition-colors"
              >
                <p className="text-gray-800 font-semibold">{p.month}</p>
                <p
                  className={`font-semibold px-3 py-1 rounded-full text-sm ${
                    p.status === "Paid"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {p.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center">
          <p className="text-gray-600 text-sm">Total Payments</p>
          <p className="text-2xl font-bold text-yellow-700 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center">
          <p className="text-gray-600 text-sm">Pending Payments</p>
          <p className="text-2xl font-bold text-yellow-700 mt-2">1</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center">
          <p className="text-gray-600 text-sm">Completed Activities</p>
          <p className="text-2xl font-bold text-yellow-700 mt-2">5</p>
        </div>
      </div>
    </div>
  );
}
