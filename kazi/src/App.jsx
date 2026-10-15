
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import LandingPage from './pages/public/LandingPage.jsx'
import DashboardPage from './pages/member/DashboardPage.jsx'
import WorkspacesPage from './pages/public/WorkspacesPage.jsx'

function ComingSoonPage({ title }) {
  return (
    <main className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="font-bold text-green-900">
          KaziNest
        </a>

        <h1 className="mt-8 text-3xl font-bold text-stone-900">
          {title}
        </h1>

        <p className="mt-3 text-stone-600">
          We're preparing this section of KaziNest.
        </p>

        <a
          href="/"
          className="mt-6 inline-block font-semibold text-green-800 hover:underline"
        >
          Back to home
        </a>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/member" element={<DashboardPage />} />

        <Route
          path="/workspaces"
          element={<ComingSoonPage title="Explore workspaces" />}
        />

        <Route
          path="/events"
          element={<ComingSoonPage title="Community events" />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/workspaces" element={<WorkspacesPage />} />
      </Routes>
    </BrowserRouter>
  )
}