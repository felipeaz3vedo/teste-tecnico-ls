import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
