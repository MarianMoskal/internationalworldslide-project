import { useTranslation } from 'react-i18next';
import s from './Languages.module.css';
import { languages } from 'db/languages';

export default function Languages() {
  const { t } = useTranslation();

  return (
    <section id="languages" className={s.section}>
      <div className={s.container}>
        <h2 className={s.heading}>{t('languages')}</h2>
        <div className={s.wrapper}>
          <ul className={s.list}>
            {languages.map(el => (
              <li className={s.item} key={el.title}>
                <div className={s.imageWrapper}>
                  <img src={el.picture} alt={el.title} width="60" height="45" />
                </div>
                <p className={s.itemTitle}>{el.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
