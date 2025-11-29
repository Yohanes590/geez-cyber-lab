"use client";

import { useState } from "react";

import Link from "next/link";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
export default function SignUpPage() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [section, setSection] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [ButtonBoolean, setBoolean] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      fullname == "" ||
      email == "" ||
      grade == "" ||
      section == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      toast.error("Please fill in all fields.");
      return;
    } else if (!email.includes("@")) {
      toast.error("invalid email address");
    } else if (password.length < 8) {
      toast.error("minimum password allowed 8");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("please mix with uppercase");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("please use special characters");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    } else {
      try {
        const LoadingToast = toast.loading("Creating Account");
        setBoolean(true);
        const res = await fetch("/api/auth/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: fullname,
            email: email.toLowerCase(),
            grade: grade,
            section: section,
            password: password,
            user_role: "student",
          }),
        });
        const data = await res.json();
        toast.dismiss(LoadingToast);
        setBoolean(false);
        if (data.status == 200) {
          window.location.href = "/dashboard";
          toast.success(data.message);
          Cookies.set("token", data.token);
        } else if (data.status == 400) {
          toast.error(data.message);
        } else {
          toast.error("internal server error please try again later.");
        }
      } catch (error) {
        toast.error("internal server error please try again later.");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50 to-amber-100 p-6">
      <div className="w-full max-w-md bg-gradient-to-b from-amber-50/60 to-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-semibold shadow">
              CL
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-amber-900">
                Create your account
              </h1>
              <p className="text-sm text-stone-600">
                Join the Cyber Lab — quick and secure
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Full name
              </label>
              <input
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition"
                placeholder="Jane"
                aria-label="Full name"
                type="text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition"
                placeholder="you@example.com"
                aria-label="Email"
                type="email"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Grade
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition"
                  aria-label="Grade"
                >
                  <option value="">Select grade</option>
                  <option>Grade 6</option>
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Section
                </label>
                <input
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition"
                  placeholder="A / B / C"
                  aria-label="Section"
                  type="text"
                  maxLength={2}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition"
                placeholder="••••••••"
                aria-label="Password"
                type="password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Confirm password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition"
                placeholder="••••••••"
                aria-label="Confirm password"
                type="password"
              />
            </div>

            <div className="pt-2">
              <button
                disabled={ButtonBoolean}
                type="submit"
                className={`w-full py-3 rounded-lg flex justify-center items-center gap-2 bg-amber-700 hover:bg-amber-800 active:translate-y-0.5 text-white font-medium shadow
                   ${
                     ButtonBoolean
                       ? "bg-amber-900 cursor-no-drop"
                       : "bg-amber-700"
                   }
                   `}
              >
                {ButtonBoolean ? (
                  <>
                    create account <ClipLoader color="white" size={15} />
                  </>
                ) : (
                  "create account"
                )}
              </button>
            </div>
          </form>

          <div className="mt-5 text-center text-sm text-stone-600">
            <span>Already have an account? </span>
            <Link
              href="/login"
              className="text-amber-700 font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="bg-amber-50/70 px-6 py-3 text-xs text-stone-600 border-t border-amber-100">
          <div className="flex items-center justify-between">
            <span>Secure • Private • Student friendly</span>
            <span className="text-amber-700 font-semibold">Cyber Lab</span>
          </div>
        </div>
      </div>
    </div>
  );
}
