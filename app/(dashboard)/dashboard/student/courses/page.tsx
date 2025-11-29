"use client";
import { useState } from "react";
import { BookOpen } from "lucide-react";
import { useEffect } from "react";
import LoadingSpinner from "@/components/(same-component)/loading-spiner";
import Cookies from "js-cookie";
export default function CoursesSection() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const userToken = Cookies.get("token");
  useEffect(() => {
    fetch("/api/courses/me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: userToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-yellow-700 mb-4">
        Your Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <LoadingSpinner />}
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-yellow-700" />
              <h3 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              Teacher: {course.teacher}
            </p>
            <p className="text-gray-600 text-sm mb-3">
              Schedule: {course.schedule}
            </p>
            <button className="mt-auto px-4 py-2 bg-yellow-700 text-white rounded-lg hover:bg-yellow-800 transition-colors">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
