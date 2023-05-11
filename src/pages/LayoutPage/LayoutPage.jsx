import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import s from './LayoutPage.module.css';
import background from '../../video/background.mp4';

export default function LayoutPage() {
  return (
    <>
      <video
        src={background}
        autoPlay
        muted
        loop
        className={s.backgroundVideo}
        playsInline
      ></video>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
