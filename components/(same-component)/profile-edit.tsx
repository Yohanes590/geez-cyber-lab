"use client";
import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
import { UserCheck } from "@/lib/(authorization)/user-check";
export default function ProfileEdit() {
  const [fullName, setFullName] = useState("...");
  const [email, setEmail] = useState("...");
  const [password, setPassword] = useState("");
  const userToken = Cookies.get("token");

  useEffect(() => {
    const SetFields = async () => {
      const userData = await UserCheck();
      setFullName(userData?.serverResponse.user_name);
      setEmail(userData?.serverResponse.user_email);
    };
    SetFields();
  }, []);

  const [loadingButton, setLoading] = useState<boolean>(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const sendToServer = await fetch("/api/profile-edit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: fullName,
        user_email: email,
        user_password: password,
        user_token: userToken,
      }),
    });
    const serverResponse = await sendToServer.json();
    setLoading(false);
    if (serverResponse.status == 200) {
      toast.success(serverResponse.message);
      window.location.reload();
    } else {
      toast.error(serverResponse.message);
    }
    console.log(serverResponse);
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
          disabled={loadingButton}
          className={`w-full bg-yellow-700 text-white flex justify-center items-center gap-2 font-semibold py-2 rounded-lg hover:bg-yellow-900 transition-colors ${
            loadingButton ? "bg-yellow-950 cursor-no-drop" : ""
          }`}
        >
          Save Changes
          {loadingButton ? <ClipLoader color="white" size={20} /> : <Save />}
        </button>
      </form>
    </div>
  );
}
