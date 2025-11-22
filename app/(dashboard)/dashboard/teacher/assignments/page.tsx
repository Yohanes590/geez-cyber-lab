// components/TeacherAssignments.tsx
"use client";

import { PencilIcon, EyeIcon } from "lucide-react";

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
  status: "Pending" | "Submitted" | "Graded";
}

const sampleAssignments: Assignment[] = [
  { id: 1, title: "Math Homework 1", dueDate: "2025-11-25", status: "Pending" },
  {
    id: 2,
    title: "Science Project",
    dueDate: "2025-11-28",
    status: "Submitted",
  },
  { id: 3, title: "History Essay", dueDate: "2025-11-30", status: "Graded" },
  {
    id: 4,
    title: "English Assignment",
    dueDate: "2025-12-02",
    status: "Pending",
  },
];

export default function TeacherAssignments() {
  return (
    <div className="p-6 shadow rounded bg-white">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Assignments</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleAssignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {assignment.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {assignment.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      assignment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : assignment.status === "Submitted"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <EyeIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                    <PencilIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
