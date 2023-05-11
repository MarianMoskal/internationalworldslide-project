import React, { useEffect, useRef, useState } from 'react';
import s from './MobileMenu.module.css';
import close from '../../../images/close.svg';
import { Trans } from 'react-i18next';

export default function MobileMenu({
  navigation,
  handleClick,
  showMobileMenu,
  languageSelect,
  setShowMobileMenu,
}) {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState();
  const refOne = useRef(null);

  const handleCloseMobileMenu = e => {
    if (showMobileMenu) {
      setShowMobileMenu(!showMobileMenu);
    }
  };
  useEffect(() => {
    if (!showMobileMenu) {
      return;
    }

    document.addEventListener('click', handleClickOutside, true);
  }, [showMobileMenu]);

  const handleClickOutside = e => {
    if (!refOne.current.contains(e.target) || e.target.localName === 'a') {
      setMobileMenuVisibility(' ');
    }
  };

  useEffect(() => {
    if (showMobileMenu) {
      setMobileMenuVisibility(s.showMenu);
    } else {
      setMobileMenuVisibility(' ');
    }
  }, [showMobileMenu]);

  return (
    <div
      ref={refOne}
      id="menu"
      className={s.container + ' ' + mobileMenuVisibility}
    >
      <nav className={s.mobNav}>
        <div className={s.wrapper}>
          <button
            onClick={handleCloseMobileMenu}
            className={s.closeButton}
            type="button"
          >
            <img src={close} alt="close" />
          </button>
          {languageSelect(s.languages, s.option)}
        </div>

        <ul className={s.mobList}>
          {navigation.map(i => (
            <li key={i}>
              <a onClick={handleClick} className={s.mobLink} href={i}>
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
    </div>
  );
}
