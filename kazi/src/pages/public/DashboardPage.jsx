import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import { Link } from 'react-router-dom'
const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-off-white text-charcoal">
      {/* Navigation */}
      <Navbar />
  
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-2 text-sm font-semibold text-dark-terracotta">
            <span className="h-2 w-2 rounded-full bg-terracotta" />
            A better way to work
          </span>

          <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-tight tracking-tight text-dark-forest sm:text-6xl lg:text-7xl">
            Your space to
            <span className="text-terracotta"> do great things.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/75">
            Find your focus, meet your people, and bring your ideas
            to life in a coworking community designed for the way
            you work.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/workspaces"
              className="rounded-xl bg-forest px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-dark-forest"
            >
              Explore workspaces →
            </a>

            <a
              href="/events"
              className="rounded-xl border border-forest/20 px-6 py-4 font-semibold text-dark-forest transition hover:bg-forest/5"
            >
              Discover our community
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-charcoal/70">
            <span>✓ Flexible workspaces</span>
            <span>✓ A community that inspires</span>
          </div>
        </div>

        {/* Brand visual */}
        <div className="relative">
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full bg-terracotta/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl bg-dark-forest p-8 text-off-white shadow-xl sm:p-12">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-widest text-off-white/70">
                Welcome to KaziNest
              </span>
              <span className="text-2xl">✳</span>
            </div>

            <h2 className="mt-16 max-w-md text-4xl font-bold leading-tight sm:text-5xl">
              Good work happens in good spaces.
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-off-white/75">
              Whether you're building a business, studying, or
              collaborating with a team, there's room for you here.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <span className="text-2xl">⌘</span>
                <p className="mt-4 font-semibold">Focus</p>
                <p className="mt-1 text-sm text-off-white/65">
                  Space to get things done
                </p>
              </div>

              <div className="rounded-2xl bg-terracotta p-5 text-white">
                <span className="text-2xl">↗</span>
                <p className="mt-4 font-semibold">Connect</p>
                <p className="mt-1 text-sm text-white/80">
                  People to grow with
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace categories */}
      <section className="border-t border-forest/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Find your fit
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-3xl font-bold text-dark-forest sm:text-4xl">
              A space for every kind of ambition.
            </h2>

            <a
              href="/workspaces"
              className="font-semibold text-forest transition hover:text-dark-terracotta"
            >
              Explore all spaces →
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Hot desks",
                description:
                  "A flexible spot to settle in, focus, and get things moving.",
              },
              {
                number: "02",
                title: "Private offices",
                description:
                  "Your own dedicated environment for deeper work and growing teams.",
              },
              {
                number: "03",
                title: "Meeting rooms",
                description:
                  "A professional setting for conversations, collaboration, and big ideas.",
              },
            ].map((space) => (
              <article
                key={space.number}
                className="rounded-2xl border border-forest/10 bg-off-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-terracotta">
                  {space.number}
                </p>
                <h3 className="mt-5 text-xl font-bold text-dark-forest">
                  {space.title}
                </h3>
                <p className="mt-3 leading-7 text-charcoal/70">
                  {space.description}
                </p>
                <a
                  href="/workspaces"
                  className="mt-6 inline-block font-semibold text-forest hover:text-dark-terracotta"
                >
                  Find your space →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
export default DashboardPage