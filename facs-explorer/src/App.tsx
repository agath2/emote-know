import { Routes, Route, NavLink } from 'react-router-dom';
import { FacePage } from './pages/FacePage';
import { FACSPage } from './pages/FACSPage';
import { CPMPage } from './pages/CPMPage';

export default function App() {
  return (
    <div className="min-h-screen text-stone-800">

      <header className="mx-25 mt-3 pt-8 pb-4 border-b border-stone-300 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">FACS Explorer</h1>
          <p className="text-stone-500 text-xs mt-0.5">Ekman & Friesen (1978)</p>
        </div>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-stone-900 underline underline-offset-4' : 'text-stone-500 hover:text-stone-800'}`
            }
          >
            Face
          </NavLink>
          <NavLink
            to="/facs"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-stone-900 underline underline-offset-4' : 'text-stone-500 hover:text-stone-800'}`
            }
          >
            FACS
          </NavLink>
          <NavLink
            to="/cpm"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-stone-900 underline underline-offset-4' : 'text-stone-500 hover:text-stone-800'}`
            }
          >
            CPM
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<FacePage />} />
        <Route path="/facs" element={<FACSPage />} />
        <Route path="/cpm" element={<CPMPage />} />
      </Routes>

      <footer className="text-center text-xs text-stone-400 py-6 border-t border-stone-100">
        Face image: Ekman & Friesen (2003). <em>Unmasking the Face.</em> Malor Books.
      </footer>

    </div>
  );
}