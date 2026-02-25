"use client"

export default function Home() {
  return (
    <main className="relative">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-clip-text text-transparent animate-pulse">
          WarriorOG
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          A kid fixing bugs. Building powerful digital systems.
        </p>

        <div className="mt-10 bg-black rounded-2xl shadow-2xl p-6 w-full max-w-xl border border-orange-500/20 hover:scale-105 transition-all duration-500">
          <pre className="text-orange-400 text-sm text-left">
{`const WarriorOG = {
  role: "Fullstack Developer",
  focus: ["AI", "Scalable Systems"],
  status: "Building The Future"
}`}
          </pre>
        </div>

      </section>

      {/* PROJECTS */}
      <section className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-orange-400 mb-16">
          Projects
        </h2>

        <div className="space-y-10">

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
            <h3 className="text-xl font-semibold text-orange-400">
              WarAI
            </h3>
            <p className="text-gray-400 mt-3">
              Advanced AI assistant engineered for intelligence and scalability.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
            <h3 className="text-xl font-semibold text-orange-400">
              Discord Infrastructure
            </h3>
            <p className="text-gray-400 mt-3">
              High-performance moderation & antinuke system.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 max-w-xl mx-auto">

        <h2 className="text-3xl font-bold text-orange-400 mb-12">
          Contact
        </h2>

        <form
          action="https://formspree.io/f/mwvnalkj"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 outline-none"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>

      </section>

    </main>
  )
}