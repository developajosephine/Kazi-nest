import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (

    <main className="min-h-screen bg-off-white text-charcoal">
      {/* Navigation */}
      <Navbar />
      {/* Hero section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Your space. Your community.
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-dark-forest sm:text-6xl">
            Make room for your next big idea.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-charcoal/70">
            Discover inspiring workspaces, book your ideal desk,
            connect with ambitious people, and grow your ideas
            at ziadaWorks.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/workspaces"
              className="rounded-xl bg-forest px-6 py-3 font-semibold text-white transition hover:bg-dark-forest"
            >
              Explore workspaces
            </Link>

            <Link
              to="/events"
              className="rounded-xl border border-forest/20 bg-white px-6 py-3 font-semibold text-dark-forest transition hover:border-terracotta hover:text-dark-terracotta"
            >
              Discover events
            </Link>
          </div>
        </div>

        {/* Brand feature panel */}
        <div className="rounded-3xl bg-dark-forest p-8 text-off-white sm:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-terracotta">
            Welcome to ziadaWorks
          </p>

          <h2 className="mt-5 text-3xl font-bold">
            Work better, together.
          </h2>

          <p className="mt-4 leading-7 text-off-white/80">
            From focused individual work to team collaboration,
            find a space that works for you.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-off-white/10 bg-off-white/10 p-5">
              <p className="text-2xl font-bold text-off-white">01</p>
              <p className="mt-2 text-sm text-off-white/80">
                Flexible desks
              </p>
            </div>

            <div className="rounded-2xl border border-off-white/10 bg-off-white/10 p-5">
              <p className="text-2xl font-bold text-off-white">02</p>
              <p className="mt-2 text-sm text-off-white/80">
                Meeting spaces
              </p>
            </div>
          </div>

          <div className="mt-8 h-1.5 w-20 rounded-full bg-terracotta" />
        </div>
      </section>

      {/* Workspace introduction */}
      <section className="border-t border-forest/10 bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Find your fit
          </p>

          <h2 className="mt-3 text-3xl font-bold text-dark-forest sm:text-4xl">
            A space for every way of working.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-charcoal/70">
            Whether you need a desk for the day, a private place
            for your team, or a room to bring people together,
            start by exploring our workspaces.
          </p>

          <Link
            to="/workspaces"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-forest transition hover:text-dark-terracotta"
          >
            Explore all spaces <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
  
