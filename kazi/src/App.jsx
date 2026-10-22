
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import LandingPage from './pages/public/LandingPage.jsx'
import DashboardPage from './pages/public/DashboardPage.jsx'
import WorkspacesPage from './pages/public/WorkspacesPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LandingPage/>} />
        <Route path="/member" element={< DashboardPage />} />
        {/* <Route
          path="/events"
          element={<ComingSoonPage title="Community events" />}
        />

        <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="/workspaces" element={<WorkspacesPage />} />
      </Routes>
    </BrowserRouter>
  )
}