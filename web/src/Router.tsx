import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route index path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
