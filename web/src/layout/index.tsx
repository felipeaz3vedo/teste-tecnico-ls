import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';

export function Layout() {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
    </>
  );
}
