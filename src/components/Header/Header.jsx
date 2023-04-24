import Container from 'components/Main/Container';
import logo from 'images/logo.svg';
import s from './Header.module.css';
import menu from 'images/menu.svg';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
// import phone from 'images/phone.svg';

function getWindowWidth() {
  const { innerWidth: width } = window;

  return {
    width,
  };
}

export default function Header() {
  const [displayStyle, setDisplayStyle] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const width = getWindowWidth().width;
    if (width >= 839) {
      setDisplayStyle('desktop');
    }
  }, []);

  const handleClick = e => {
    console.log(e);
    e.preventDefault();

    const anchor = e.target.getAttribute('href');
    const el = document.getElementById(anchor);

    el.scrollIntoView({ behavior: 'smooth' });
  };

  // console.log(displayStyle === 'none' ? 'block' : 'none');

  return (
    <Container>
      <header className={s.header}>
        <a href="/">
          <img className={s.logo} src={logo} alt="logo" />
        </a>
        {displayStyle === 'desktop' && (
          <>
            <nav className={s.nav}>
              <ul className={s.list}>
                <li>
                  <a onClick={handleClick} className={s.link} href="services">
                    Услуги
                  </a>
                </li>
                <li>
                  <a onClick={handleClick} className={s.link} href="languages">
                    Языки
                  </a>
                </li>
                <li>
                  <a onClick={handleClick} className={s.link} href="reviews">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a onClick={handleClick} className={s.link} href="contacts">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="https://m.me/internationalworldslideiws"
              className={s.button}
              target="blank"
              noreffer="noopener"
            >
              {/* <img className={s.image} src={phone} alt="phone" /> */}
              Узнать цену
            </a>
          </>
        )}
        {displayStyle !== 'desktop' && (
          <>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className={s.burgerButton}
              type="button"
            >
              <img src={menu} alt="menu" width={40} />
            </button>
            <MobileMenu
              handleClick={handleClick}
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          </>
        )}
      </header>
    </Container>
  );
}
