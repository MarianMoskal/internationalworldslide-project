import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function LayoutPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
