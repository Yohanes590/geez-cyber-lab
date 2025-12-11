import Link from "next/link";
import Image from "next/image";
export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-50 text-stone-900 font-sans">
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between sticky top-0 bg-white/60 backdrop-blur-sm z-30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-700 flex items-center justify-center text-white font-semibold shadow">
            <Image
              width={50}
              height={50}
              src="/assets/school-logo.avif"
              alt="School Logo"
            />
          </div>
          <div>
            <span className="font-extrabold text-xl">Geez-School</span>
            <div className="text-xs text-stone-500">Learning, simplified</div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#home" className="text-stone-700 hover:underline">
            Home
          </a>
          <a href="#about" className="text-stone-700 hover:underline">
            About
          </a>
          <a href="#pricing" className="text-stone-700 hover:underline">
            Pricing
          </a>
          <a href="#contact" className="text-stone-700 hover:underline">
            Contact
          </a>
          <Link
            href="/login"
            className="text-stone-700 px-4 py-2 rounded-md border border-stone-200 hover:bg-stone-100"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#220800c0]">
            Build confident learners with Geez School
          </h1>
          <p className="text-lg text-stone-600 max-w-xl">
            A modern, secure, and teacher-friendly platform that helps schools
            manage students, assignments, and progress tracking — all in one
            simple place.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              href="/sign-up"
              className="px-6 py-3 bg-amber-700 text-white rounded-md shadow hover:bg-amber-800"
            >
              Create free account
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 border border-stone-200 rounded-md hover:bg-stone-100"
            >
              Explore demo
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-stone-600">
            <div>
              <div className="font-semibold text-amber-700">100+</div>
              <div>Schools onboard</div>
            </div>
            <div>
              <div className="font-semibold text-amber-700">5000+</div>
              <div>Students supported</div>
            </div>
            <div>
              <div className="font-semibold text-amber-700">99.9%</div>
              <div>Uptime & reliability</div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-amber-50 to-white border border-stone-100 p-6">
            <h3 className="text-xl font-semibold mb-2">
              Quick demo: Student dashboard
            </h3>
            <p className="text-stone-600 mb-4">
              See grades, assignments, and messages in a single view.
            </p>

            <div className="bg-stone-100 rounded-md p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm text-stone-600">Assignments</div>
                <div className="text-sm font-semibold text-amber-700">
                  7 due
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div>Math — Algebra I</div>
                  <div className="text-stone-500">Due in 2d</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>Science — Lab report</div>
                  <div className="text-stone-500">Due in 4d</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / FEATURES */}
      <section
        id="about"
        className="py-16 bg-gradient-to-b from-white to-amber-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why schools choose Geez School
              </h2>
              <p className="text-stone-600 mb-6">
                We combine a simple UX with powerful tools so teachers spend
                less time on admin and more time teaching.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="text-amber-700 text-2xl">📈</div>
                  <div>
                    <div className="font-semibold">Meaningful analytics</div>
                    <div className="text-stone-600 text-sm">
                      Quick insights into class and individual performance.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="text-amber-700 text-2xl">🧭</div>
                  <div>
                    <div className="font-semibold">Clear workflows</div>
                    <div className="text-stone-600 text-sm">
                      Assignments, grading and communication in one place.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="text-amber-700 text-2xl">🔐</div>
                  <div>
                    <div className="font-semibold">Student privacy</div>
                    <div className="text-stone-600 text-sm">
                      Permissions and secure storage by design.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-white border rounded-lg shadow">
                <h4 className="font-semibold mb-2">Assignments overview</h4>
                <div className="text-sm text-stone-600">
                  Organize, schedule and grade with a few clicks.
                </div>
              </div>
              <div className="p-6 bg-white border rounded-lg shadow">
                <h4 className="font-semibold mb-2">Integrated messaging</h4>
                <div className="text-sm text-stone-600">
                  Student-teacher messages kept secure and traceable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg text-center">
              <div className="text-amber-700 font-bold text-lg mb-2">
                Starter
              </div>
              <div className="text-3xl font-extrabold">Free</div>
              <div className="text-sm text-stone-600 my-4">
                Basic features for small classes
              </div>
              <ul className="text-sm text-stone-600 mb-4">
                <li>Up to 50 students</li>
                <li>Assignments & grades</li>
              </ul>
              <button className="px-4 py-2 bg-amber-700 text-white rounded-md">
                Get started
              </button>
            </div>

            <div className="p-6 border rounded-lg text-center shadow-lg">
              <div className="text-amber-700 font-bold text-lg mb-2">
                School
              </div>
              <div className="text-3xl font-extrabold">$49/mo</div>
              <div className="text-sm text-stone-600 my-4">
                Full features for growing schools
              </div>
              <ul className="text-sm text-stone-600 mb-4">
                <li>Unlimited students</li>
                <li>Advanced reporting</li>
              </ul>
              <button className="px-4 py-2 bg-amber-700 text-white rounded-md">
                Start trial
              </button>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="text-amber-700 font-bold text-lg mb-2">
                Enterprise
              </div>
              <div className="text-3xl font-extrabold">Custom</div>
              <div className="text-sm text-stone-600 my-4">
                SLA, onboarding and integrations
              </div>
              <ul className="text-sm text-stone-600 mb-4">
                <li>Dedicated support</li>
                <li>API access</li>
              </ul>
              <button className="px-4 py-2 bg-amber-700 text-white rounded-md">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6">What schools say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="p-6 border rounded-lg bg-amber-50">
            <p className="mb-3 text-stone-700">
              "Geez School transformed how we manage assignments — it's simple
              and reliable."
            </p>
            <cite className="text-sm text-stone-600">
              — Principal, Riverside Academy
            </cite>
          </blockquote>

          <blockquote className="p-6 border rounded-lg">
            <p className="mb-3 text-stone-700">
              "Teachers love the dashboard — it saves hours every week."
            </p>
            <cite className="text-sm text-stone-600">
              — Ms. Kassa, Math Teacher
            </cite>
          </blockquote>

          <blockquote className="p-6 border rounded-lg">
            <p className="mb-3 text-stone-700">
              "Students find it intuitive and helpful for tracking progress."
            </p>
            <cite className="text-sm text-stone-600">— Parent, Grade 10</cite>
          </blockquote>
        </div>
      </section>

      <footer className="bg-stone-100 border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-600">
            © {currentYear} Powered By Geez Security — Learn. Practice. Grow.
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
