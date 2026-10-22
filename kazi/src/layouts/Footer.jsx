
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-forest text-off-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link to="/" className="text-2xl font-bold tracking-tight">
            ziada<span className="text-terracotta"> works.</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-off-white/70">
            A place to work. A community to grow.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-off-white/75">
            <li>
              <Link to="/" className="transition hover:text-terracotta">
                Home
              </Link>
            </li>
            <li>
              <Link to="/workspaces" className="transition hover:text-terracotta">
                Our spaces
              </Link>
            </li>
            <li>
              <Link to="/workspaces" className="transition hover:text-terracotta">
                Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Community</h2>
          <ul className="mt-4 space-y-3 text-sm text-off-white/75">
            <li>
              <Link to="/events" className="transition hover:text-terracotta">
                Events
              </Link>
            </li>
            <li>
              <Link to="/member" className="transition hover:text-terracotta">
                Member portal
              </Link>
            </li>
            <li>
              <a href="/#contact" className="transition hover:text-terracotta">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Stay connected</h2>
          <p className="mt-4 text-sm leading-6 text-off-white/70">
            Follow Ziada Works on social media.
          </p>
          <p className="mt-3 text-xs text-off-white/50">
            Social links will be added when your official handles are ready.
          </p>
        </div>
      </div>

      <div className="border-t border-off-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-off-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Ziada Works. All rights reserved.</p>
          <p>A place to work. A community to grow.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer