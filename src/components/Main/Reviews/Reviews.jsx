import React from 'react';
import s from './Reviews.module.css';
import { Slider } from './Slider';
import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className={s.section}>
      <div className={s.wrapper}>
        <h2 className={s.heading}>{t('reviews')}</h2>

        <Slider />

        <p className={s.paragraf}>
          Больше отзывов{' '}
          <a
            className={s.link}
            href="https://www.facebook.com/internationalworldslideiwl/reviews"
            target="_blank"
            rel="noreferrer"
          >
            здесь
          </a>
        </p>
      </div>
    </section>
  );
}
