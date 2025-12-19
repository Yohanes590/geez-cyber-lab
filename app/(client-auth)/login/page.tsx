"use client";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ButtonBoolean, setBoolean] = useState<boolean>(false);
  const handleSubmit = async (e: any) => {
    if (email === "" || password === "") {
      toast.error("Please fill in all fields.");
    }
    e.preventDefault();
    setBoolean(true);
    const SendToServer = await fetch("/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const ServerResponse = await SendToServer.json();
    setBoolean(false);

    if (ServerResponse.status === 200) {
      Cookies.set("token", ServerResponse.token);
      window.location.href = "/dashboard";
      toast.success(ServerResponse.message);
    } else {
      toast.error(ServerResponse.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50 to-amber-100 p-6">
      <div className="w-full max-w-md bg-gradient-to-b from-amber-50/60 to-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-700 flex items-center justify-center text-white font-semibold shadow">
              <Image
                width={50}
                height={50}
                src="/assets/school-logo.avif"
                alt="School Logo"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-amber-900">
                Login into your account
              </h1>
              <p className="text-sm text-stone-600">
                Alem Collage — Secure platform learning
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                    Login <ClipLoader color="white" size={15} />
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          <div className="mt-5 text-center text-sm text-stone-600">
            <span>Idon't have an account? </span>
            <Link
              href="/sign-up"
              className="text-amber-700 font-medium hover:underline"
            >
              Signup
            </Link>
          </div>
        </div>

        <div className="bg-amber-50/70 px-6 py-3 text-xs text-stone-600 border-t border-amber-100">
          <div className="flex items-center justify-between">
            <span>Secure • Private • Student friendly</span>
            <span className="text-amber-700 font-semibold">Alem Collage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
