"use client";
import { useState } from "react";
import { Save } from "lucide-react";
export default function ProfileEdit() {
  const [fullName, setFullName] = useState("Yohanes Mulugeta");
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // handle save logic here
    console.log({ fullName, email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-yellow-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-yellow-900 mb-6">Edit Profile</h2>

      <form onSubmit={handleSave} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-brown-900 font-semibold mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-brown-900 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-brown-900 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-yellow-700 text-white flex justify-center items-center gap-2 font-semibold py-2 rounded-lg hover:bg-yellow-900 transition-colors"
        >
          Save Changes
          <Save />
        </button>
      </form>
    </div>
  );
}
