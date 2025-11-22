"use client";
import { useState } from "react";

export default function AssignmentsSection() {
  const [assignments] = useState([
    { title: "Math Homework", due: "2025-11-25", status: "Pending" },
    { title: "Physics Lab Report", due: "2025-11-27", status: "Submitted" },
    { title: "English Essay", due: "2025-11-28", status: "Pending" },
  ]);

  return (
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
  );
}
