// app/(dashboard)/page.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function TeacherDashboard() {
  // Sample data for charts
  const assignmentData = [
    { day: "Mon", assignments: 5 },
    { day: "Tue", assignments: 8 },
    { day: "Wed", assignments: 4 },
    { day: "Thu", assignments: 10 },
    { day: "Fri", assignments: 7 },
  ];

  const studentData = [
    { week: "Week 1", students: 25 },
    { week: "Week 2", students: 30 },
    { week: "Week 3", students: 28 },
    { week: "Week 4", students: 32 },
  ];

  return (
    <div className="min-h-screen p-8 text-gray-900 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, Teacher!</h1>
        <p className="text-gray-600 mt-1">Here is your dashboard overview.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 shadow rounded">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>

        <div className="p-6 shadow rounded">
          <h2 className="text-lg font-semibold">Pending Assignments</h2>
          <p className="text-2xl font-bold mt-2">15</p>
        </div>

        <div className="p-6 shadow rounded">
          <h2 className="text-lg font-semibold">Upcoming Exams</h2>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart: Assignments per Day */}
        <div className="p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-4">Assignments Per Day</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={assignmentData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="assignments"
                stroke="#F59E0B"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart: New Students Per Week */}
        <div className="p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-4">New Students Per Week</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={studentData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
