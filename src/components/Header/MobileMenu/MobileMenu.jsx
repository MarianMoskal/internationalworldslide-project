import React, { useEffect, useRef, useState } from 'react';
import s from './MobileMenu.module.css';
import close from '../../../images/close.svg';

export default function MobileMenu({
  handleClick,
  showMobileMenu,
  setShowMobileMenu,
}) {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState('none');
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
    if (!refOne.current.contains(e.target)) {
      setMobileMenuVisibility('none');
    }
  };

  useEffect(() => {
    if (showMobileMenu) {
      setMobileMenuVisibility('block');
    } else {
      setMobileMenuVisibility('none');
    }
  }, [showMobileMenu]);

  return (
    <div
      ref={refOne}
      className={s.container}
      style={{ display: mobileMenuVisibility }}
    >
      <nav className={s.mobNav}>
        <button
          onClick={handleCloseMobileMenu}
          className={s.closeButton}
          type="button"
        >
          <img src={close} alt="close" />
        </button>
        <ul className={s.mobList}>
          <li>
            <a onClick={handleClick} className={s.mobLink} href="services">
              Услуги
            </a>
          </li>
          <li>
            <a
              onClick={e => handleClick(e)}
              className={s.mobLink}
              href="languages"
            >
              Языки
            </a>
          </li>
          <li>
            <a
              onClick={e => handleClick(e)}
              className={s.mobLink}
              href="reviews"
            >
              Отзывы
            </a>
          </li>
          <li>
            <a
              onClick={e => handleClick(e)}
              className={s.mobLink}
              href="contacts"
            >
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
    </div>
  );
}