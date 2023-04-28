import Container from 'components/Main/Container';
import logo from 'images/logo.svg';
import s from './Header.module.css';
import menu from 'images/menu.svg';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import { Trans, useTranslation } from 'react-i18next';
// import { changeLanguage } from 'i18next';

function getWindowWidth() {
  const { innerWidth: width } = window;

  return {
    width,
  };
}

const languages = [
  {
    label: 'UA',
    value: 'ua',
  },
  {
    label: 'EN',
    value: 'en',
  },
  {
    label: 'ru',
    value: 'ru',
  },
];

export default function Header() {
  const [displayStyle, setDisplayStyle] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [language, setLanguage] = useState('ua');

  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const width = getWindowWidth().width;
    if (width >= 839) {
      setDisplayStyle('desktop');
    }
  }, []);

  const handleClick = e => {
    e.preventDefault();

    const anchor = e.target.getAttribute('href');
    const el = document.getElementById(anchor);

    el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelect = e => {
    console.log(e.target.value);
    setLanguage(e.target.value);
    changeLanguage(e.target.value);
  };

  const languageSelect = (selectClassName, optionClassName) => (
    <select
      className={selectClassName}
      name="langs"
      value={language}
      onChange={handleSelect}
    >
      {languages.map(({ value, label }) => (
        <option className={optionClassName} key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );

  return (
    <Container>
      <header className={s.header}>
        <img className={s.logo} src={logo} alt="logo" />
        {displayStyle === 'desktop' && (
          <>
            <nav className={s.nav}>
              <ul className={s.list}>
                <li>
                  <a onClick={handleClick} className={s.link} href="services">
                    <Trans i18nKey="services"></Trans>
                  </a>
                </li>
                <li>
                  <a onClick={handleClick} className={s.link} href="languages">
                    <Trans i18nKey="languages"></Trans>
                  </a>
                </li>
                <li>
                  <a onClick={handleClick} className={s.link} href="reviews">
                    <Trans i18nKey="reviews"></Trans>
                  </a>
                </li>
                <li>
                  <a onClick={handleClick} className={s.link} href="contacts">
                    <Trans i18nKey="contacts"></Trans>
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
              <Trans i18nKey="message"></Trans>
            </a>
            {languageSelect(s.languages, s.option)}
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
              languageSelect={languageSelect}
              setShowMobileMenu={setShowMobileMenu}
            />
          </>
        )}
      </header>
    </Container>
  );
}
