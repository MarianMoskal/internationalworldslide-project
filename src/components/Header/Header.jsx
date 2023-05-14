import Container from 'components/Main/Container';
import logo from 'images/logo.svg';
import s from './Header.module.css';
import menu from 'images/menu.svg';
import { useContext, useEffect, useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import { Trans } from 'react-i18next';
import { transLangs } from 'db/languages';
import LocaleContext from 'LocaleContext';
import i18n from 'i18n';

const navigation = ['services', 'languages', 'reviews', 'contacts'];

export default function Header() {
  const { locale } = useContext(LocaleContext);

  const [displayStyle, setDisplayStyle] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;

    if (width >= 839) {
      setDisplayStyle('desktop');
    }
  }, []);

  const changeLocale = l => {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  };

  const handleClick = e => {
    e.preventDefault();

    const anchor = e.target.getAttribute('href');
    const el = document.getElementById(anchor);

    el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelect = e => {
    changeLocale(e.target.value);
  };

  const languageSelect = (selectClassName, optionClassName) => (
    <select
      className={selectClassName}
      name="langs"
      value={i18n.language}
      onChange={handleSelect}
    >
      {transLangs.map(({ value, label }) => (
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
                {navigation.map(i => (
                  <li key={i}>
                    <a onClick={handleClick} className={s.link} href={i}>
                      <Trans i18nKey={i}></Trans>
                    </a>
                  </li>
                ))}
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
              navigation={navigation}
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
