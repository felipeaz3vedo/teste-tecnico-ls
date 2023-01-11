import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './layout';
import { Home } from './pages/Home';
import { Plataform } from './pages/Plataform';

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/plataform" element={<Plataform />} />
        </Route>
      </Route>
    </Routes>
  );
}
