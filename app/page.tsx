import Link from "next/link";

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="min-h-screen flex flex-col text-[#2b2b2b] font-sans"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(169,116,91,0.2), rgba(94,61,46,0.1), #f5f1ed)",
      }}
    >
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-8 py-6 bg-white bg-opacity-80 backdrop-blur-sm shadow-md rounded-b-lg">
        <h1 className="text-3xl font-extrabold tracking-tight">Cyber Lab</h1>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-5 py-2 border border-[#2b2b2b] rounded-lg font-medium hover:bg-[#f0f0f0] transition"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="px-5 py-2 bg-[#a9745b] text-white rounded-lg font-medium hover:bg-[#b78769] transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-8 space-y-6">
        <h2 className="text-5xl font-bold leading-tight text-[#2b2b2b]">
          Welcome to Cyber Lab
        </h2>
        <p className="text-lg max-w-3xl text-[#4b4b4b] opacity-90">
          Cyber Lab is a professional platform to manage student data, track
          assignments, and monitor learning progress. Designed to simulate
          real-world educational management systems, it provides a secure and
          organized environment for administrators, teachers, and students.
        </p>
        <Link
          href="/dashboard"
          className="px-8 py-3 bg-[#b7865a] text-white rounded-lg font-semibold hover:bg-[#c79a71] transition shadow-lg"
        >
          Get Started
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="w-full text-center py-6 text-sm text-[#6b6b6b] border-t border-[#e0d7cd]">
        © {currentYear} Cyber Lab — Learn. Practice. Secure. Powered by geez
        tech
      </footer>
    </div>
  );
}
