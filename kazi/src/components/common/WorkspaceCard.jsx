
export default function WorkspaceCard({ workspace, onViewDetails }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-forest/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-off-white">
        <img
          src={workspace.image}
          alt={workspace.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-off-white px-3 py-1.5 text-xs font-semibold text-dark-forest shadow-sm">
          {workspace.type}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-dark-forest">
            {workspace.name}
          </h2>

          <p className="shrink-0 text-right text-terracotta">
            <span className="text-lg font-bold">
              KES {workspace.price.toLocaleString('en-KE')}
            </span>
            <span className="block text-xs text-charcoal/60">
              / {workspace.priceUnit}
            </span>
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-charcoal/70">
          {workspace.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {workspace.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-lg bg-off-white px-3 py-1.5 text-xs font-medium text-charcoal/80"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-forest/10 pt-4">
          <span className="text-sm text-charcoal/65">
            Up to {workspace.capacity} {workspace.capacity === 1 ? 'person' : 'people'}
          </span>

          <button
            type="button"
            onClick={() => onViewDetails(workspace)}
            className="rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-dark-forest"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  )
}