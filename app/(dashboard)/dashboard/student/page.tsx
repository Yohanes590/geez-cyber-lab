"use client";
import { useEffect, useState } from "react";
import { UserCheck } from "@/lib/(authorization)/user-check";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function StudentDashboard() {
  const activityData = [
    { day: "Mon", tasks: 3 },
    { day: "Tue", tasks: 5 },
    { day: "Wed", tasks: 2 },
    { day: "Thu", tasks: 4 },
    { day: "Fri", tasks: 6 },
  ];

  const gradesData = [
    { subject: "Math", grade: 85 },
    { subject: "Physics", grade: 90 },
    { subject: "Chemistry", grade: 78 },
    { subject: "English", grade: 92 },
    { subject: "History", grade: 88 },
  ];

  const [assignments] = useState([
    { title: "Math Homework", due: "2025-11-25", status: "Pending" },
    { title: "Physics Lab Report", due: "2025-11-27", status: "Submitted" },
    { title: "English Essay", due: "2025-11-28", status: "Pending" },
  ]);

  const [userName, setUserName] = useState<string>("...");

  useEffect(() => {
    const FetchData = async () => {
      const logFunction = await UserCheck();
      setUserName(logFunction?.serverResponse.user_name);
    };
    FetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back, {userName}!
        </h1>
        <p className="text-gray-600 text-lg">
          Here's your dashboard overview for today.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">
            Grades Overview
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={gradesData}>
              <XAxis dataKey="subject" stroke="#92400e" />
              <YAxis stroke="#92400e" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="grade"
                stroke="#b45309"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Assignments */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-yellow-700 mb-4">
          Your Assignments
        </h2>
        <ul className="space-y-3">
          {assignments.map((a, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-yellow-50 transition-colors"
            >
              <div>
                <p className="text-gray-800 font-semibold">{a.title}</p>
                <p className="text-gray-500 text-sm">Due: {a.due}</p>
              </div>
              <span
                className={`font-semibold px-3 py-1 rounded-full text-sm ${
                  a.status === "Pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {a.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
