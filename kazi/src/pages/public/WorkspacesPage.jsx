
import { useMemo, useState } from 'react'
import { workspaces, workspaceTypes } from '../../features/workspaces/workspaceData.js'
import WorkspaceCard from '../../components/common/WorkspaceCard.jsx'
import Navbar from '../../layouts/Navbar.jsx'
import Footer from '../../layouts/Footer.jsx'

export default function WorkspacesPage() {
  const [activeType, setActiveType] = useState('All spaces')
  const [search, setSearch] = useState('')
  const [selectedWorkspace, setSelectedWorkspace] = useState(null)

  const filteredWorkspaces = useMemo(() => {
    return workspaces.filter((workspace) => {
      const matchesType =
        activeType === 'All spaces' || workspace.type === activeType

      const searchText =
        `${workspace.name} ${workspace.description} ${workspace.location} ${workspace.amenities.join(' ')}`
          .toLowerCase()

      const matchesSearch = searchText.includes(search.trim().toLowerCase())

      return matchesType && matchesSearch
    })
  }, [activeType, search])

  return (
    <main className="min-h-screen bg-off-white text-charcoal">
      <header className="border-b border-forest/10 bg-off-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Navbar />
          <a href="/" className="text-2xl font-bold text-dark-forest">
            Ziada<span className="text-terracotta">works.</span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href="/"
              className="text-sm font-medium hover:text-terracotta"
            >
              Home
            </a>
            <a
              href="/member"
              className="rounded-xl bg-forest px-4 py-3 text-sm font-semibold text-white hover:bg-dark-forest"
            >
              Member portal
            </a>
          </div>
        </nav>
      </header>

      <section className="bg-dark-forest px-6 py-16 text-off-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Find your fit
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            Find a space where great work happens.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-off-white/75 sm:text-lg">
            Explore flexible workspaces for focused work, team
            collaboration, and your next big idea.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-dark-forest">
              Explore our spaces
            </h2>
            <p className="mt-1 text-sm text-charcoal/65">
              {filteredWorkspaces.length} spaces found
            </p>
          </div>

          <label className="w-full lg:max-w-sm">
            <span className="sr-only">Search workspaces</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search spaces, amenities..."
              className="w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/45 focus:border-forest focus:ring-2 focus:ring-forest/15"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {workspaceTypes.map((type) => {
            const isActive = activeType === type

            return (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-forest text-white'
                    : 'border border-forest/15 bg-white text-dark-forest hover:border-forest hover:bg-forest/5'
                }`}
              >
                {type}
              </button>
            )
          })}
        </div>

        {filteredWorkspaces.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredWorkspaces.map((workspace) => (
              <WorkspaceCard
                key={workspace.id}
                workspace={workspace}
                onViewDetails={setSelectedWorkspace}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-forest/10 bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-dark-forest">
              No matching spaces found
            </h3>
            <p className="mt-2 text-charcoal/65">
              Try another search or select a different workspace type.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('')
                setActiveType('All spaces')
              }}
              className="mt-5 rounded-xl bg-forest px-5 py-3 font-semibold text-white hover:bg-dark-forest"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {selectedWorkspace && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 p-4"
          onClick={() => setSelectedWorkspace(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="workspace-dialog-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-off-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedWorkspace.image}
              alt={selectedWorkspace.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm font-semibold text-terracotta">
                {selectedWorkspace.type}
              </p>

              <h2
                id="workspace-dialog-title"
                className="mt-2 text-2xl font-bold text-dark-forest"
              >
                {selectedWorkspace.name}
              </h2>

              <p className="mt-3 leading-7 text-charcoal/75">
                {selectedWorkspace.description}
              </p>

              <p className="mt-4 text-sm text-charcoal/70">
                Location: {selectedWorkspace.location}
              </p>

              <p className="mt-2 text-sm text-charcoal/70">
                Capacity: {selectedWorkspace.capacity}{' '}
                {selectedWorkspace.capacity === 1 ? 'person' : 'people'}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedWorkspace.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-lg bg-white px-3 py-2 text-sm text-charcoal"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xl font-bold text-dark-forest">
                KES {selectedWorkspace.price.toLocaleString('en-KE')}
                <span className="text-sm font-normal text-charcoal/65">
                  {' '}/ {selectedWorkspace.priceUnit}
                </span>
              </p>

              <p className="mt-2 text-xs leading-5 text-charcoal/60">
                Sample listing for development. Availability and pricing
                have not yet been connected to a booking system.
              </p>

              <button
                type="button"
                onClick={() => setSelectedWorkspace(null)}
                className="mt-6 w-full rounded-xl bg-forest px-5 py-3 font-semibold text-white hover:bg-dark-forest"
              >
                Close details
              </button>

            </div>
            <Footer />
          </section>
        </div>
      )}
    </main>
  )
}