"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-white p-6">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm border border-stone-100 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-center p-8">
          <div className="px-4">
            <div className="text-6xl md:text-7xl font-extrabold text-amber-700">
              404
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mt-2">
              Page not found
            </h1>
            <p className="mt-4 text-stone-600">
              Sorry — we couldn't find the page you're looking for. It may have
              been moved or deleted.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center px-5 py-3 bg-amber-700 text-white rounded-lg shadow hover:bg-amber-800"
              >
                Go home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-100"
              >
                Contact support
              </Link>
            </div>

            <div className="mt-6 text-sm text-stone-500">
              If you think this is a mistake, please reach out to our support
              team.
            </div>
          </div>

          <div className="p-6 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <svg
                viewBox="0 0 600 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
                <rect
                  x="20"
                  y="40"
                  width="560"
                  height="320"
                  rx="20"
                  fill="#FFF7ED"
                  stroke="#FDE68A"
                />
                <g transform="translate(120,80)">
                  <circle
                    cx="120"
                    cy="80"
                    r="60"
                    fill="url(#g1)"
                    opacity="0.95"
                  />
                  <path
                    d="M60 220c20-40 120-40 140 0"
                    stroke="#F59E0B"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.9"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="60"
                    height="36"
                    rx="8"
                    fill="#FFF"
                    stroke="#F3F4F6"
                  />
                  <rect
                    x="180"
                    y="0"
                    width="60"
                    height="36"
                    rx="8"
                    fill="#FFF"
                    stroke="#F3F4F6"
                  />
                </g>
              </svg>
              <div className="mt-4 text-xs text-center text-stone-400">
                Helpful tip: check the URL for typos or try the site map.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
