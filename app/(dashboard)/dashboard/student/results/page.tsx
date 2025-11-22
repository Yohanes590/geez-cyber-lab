"use client";
import { useState } from "react";

export default function ResultsSection() {
  const [results] = useState([
    { subject: "Math", grade: 85, status: "Pass" },
    { subject: "Physics", grade: 90, status: "Pass" },
    { subject: "Chemistry", grade: 78, status: "Pass" },
    { subject: "English", grade: 92, status: "Pass" },
    { subject: "History", grade: 88, status: "Pass" },
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow mt-6">
      <h2 className="text-xl font-semibold text-yellow-700 mb-4">
        Your Results
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-200 p-3 text-gray-600">
                Subject
              </th>
              <th className="border-b border-gray-200 p-3 text-gray-600">
                Grade
              </th>
              <th className="border-b border-gray-200 p-3 text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
              <tr key={idx} className="hover:bg-yellow-50 transition-colors">
                <td className="p-3 text-gray-800 font-medium">{r.subject}</td>
                <td className="p-3 text-gray-800">{r.grade}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      r.status === "Pass"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
