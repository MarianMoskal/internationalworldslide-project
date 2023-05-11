import React from 'react';
import s from './Contacts.module.css';
import { contacts } from 'db/contacts';
import { useTranslation } from 'react-i18next';

const renderContacts = contacts.map(({ title, href, icon }) => (
  <div key={title} className={s.wrapper}>
    <img className={s.image} src={icon} alt={title} width={50} />
    <a className={s.link} href={href} target="_blank" rel="noreferrer">
      {title}
    </a>
  </div>
));

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className={s.section}>
      <div className={s.background}>
        <h2 className={s.heading}>{t('contacts')}</h2>
        <div className={s.container}>{renderContacts}</div>
        <div className={s.credentialsWrapper}>
          <p className={s.credentials}>
            <span>Email:</span>
            <br />
            <a
              className={s.credentialsLink}
              href="mailto:internationalworldslide@gmail.com"
            >
              internationalworldslide @gmail.com
            </a>
          </p>
          <p className={s.credentials}>
            <span>Tel:</span>
            <br />
            <a className={s.credentialsLink} href="tel:+4915236135107">
              +4915236135107
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
