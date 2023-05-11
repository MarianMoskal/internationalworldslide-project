import { Trans } from 'react-i18next';
import s from './ServicesRange.module.css';
import { services } from 'db/services';

const renderServices = services.map(({ title, item }) => (
  <div key={title} className={s.wrapper}>
    <h3 className={s.title}>{title}</h3>
    <ul className={s.list}>
      {item.map(i => (
        <li key={i} className={s.item}>
          {i}
        </li>
      ))}
    </ul>
  </div>
));

export default function ServicesRange() {
  return (
    <section className={s.section} id="services">
      <h2 className={s.heading}>
        <Trans i18nKey="services"></Trans>
      </h2>
      <div className={s.container}>{renderServices}</div>
    </section>
  );
}
