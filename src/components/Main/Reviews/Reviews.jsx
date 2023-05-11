import React from 'react';
import s from './Reviews.module.css';
import { Slider } from './Slider';

export default function Reviews() {
  return (
    <section id="reviews" className={s.section}>
      <div className={s.wrapper}>
        <h2 className={s.heading}>Отзывы</h2>

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
