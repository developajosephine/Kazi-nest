
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import green from '../assets/green.jpg'

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${
    isActive
      ? 'text-dark-terracotta'
      : 'text-charcoal hover:text-terracotta'
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-forest backdrop-blur text-2xl font-bold tracking-tight text-off-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight text-off-white"
          aria-label="Ziada Works home"
        >
            <img src={green} alt="Ziada Works logo" className="h-12 w-auto" />

          ziada<span className="text-terracotta"> works.</span>

        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-off-white hover:bg-forest/10 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/workspaces" className="text-sm font-semibold text-off-white transition-colors hover:text-terracotta">
            Spaces
          </NavLink>

          <Link
            to="/workspaces"
            className="text-sm font-semibold text-off-white transition-colors hover:text-terracotta"
          >
            Bookings
          </Link>

          <Link
            to="/#contact"
            className="text-sm font-semibold text-off-white transition-colors hover:text-terracotta"
          >
            Contact
          </Link>

          <Link
            to="/member"
            className="rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-dark-forest"
          >
            Member portal
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-forest/10 bg-off-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <NavLink
              to="/workspaces"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Spaces
            </NavLink>

            <Link
              to="/workspaces"
              onClick={closeMenu}
              className="text-sm font-semibold text-charcoal hover:text-terracotta"
            >
              Bookings
            </Link>

            <Link
              to="/#contact"
              onClick={closeMenu}
              className="text-sm font-semibold text-charcoal hover:text-terracotta"
            >
              Contact
            </Link>

            <Link
              to="/member"
              onClick={closeMenu}
              className="rounded-xl bg-forest px-5 py-3 text-center text-sm font-semibold text-white hover:bg-dark-forest"
            >
              Member portal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
