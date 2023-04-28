import React from 'react';
import s from './Contacts.module.css';
import telegram from 'images/telegram.svg';
import viber from 'images/viber.svg';
import whatsapp from 'images/whatsapp.svg';
import facebook from 'images/facebook.svg';

export default function Contacts() {
  return (
    <section id="contacts" className={s.section}>
      <div className={s.background}>
        <h2 className={s.heading}>Контакты</h2>
        <div className={s.container}>
          <div className={s.wrapperL}>
            <img className={s.image} src={telegram} alt="telegram" width={50} />
            <a
              className={s.link}
              href="https://t.me/internationalworldslidecommunity"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>
          <div className={s.wrapperR}>
            <img className={s.image} src={viber} alt="viber" width={50} />
            <a
              className={s.link}
              href="https://invite.viber.com/?g2=AQBiac95mVKHN0uPWOY7Vuoq6i2%2Fn8lOrWxVulOp7MdPh6KWusMPBSH4zoPNObOo" //"https://viber.click/+4915236135107"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <span className={s.viber}>Viber</span>
            </a>
          </div>
          <div className={s.wrapperL}>
            <img className={s.image} src={whatsapp} alt="whatsapp" width={50} />
            <a
              className={s.link}
              href="https://wa.me/+4915236135107"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Whatsapp
            </a>
          </div>
          <div className={s.wrapperR}>
            <img className={s.image} src={facebook} alt="facebook" width={50} />
            <a
              className={s.link}
              href="https://www.facebook.com/internationalworldslideiwl/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
