import s from './ServicesRange.module.css';

export default function ServicesRange() {
  return (
    <section className={s.section} id="services">
      <h2 className={s.heading}>Спектр услуг</h2>
      <div className={s.container}>
        <div className={s.wrapper}>
          <h3 className={s.title}>ЯЗЫКИ</h3>
          <ul className={s.list}>
            <li className={s.item}>
              Изучение иностранных языков индивидуально
            </li>
            <li className={s.item}>Изучение иностранных языков в группе</li>
            <li className={s.item}>Изучение иностранных языков в дуэте</li>
            <li className={s.item}>Курсы иностранных языков</li>
          </ul>
        </div>
        <div className={s.wrapper}>
          <h3 className={s.title}>ПЕРЕВОДЫ</h3>
          <ul className={s.list}>
            <li className={s.item}>
              Письменный перевод с множества языков мира
            </li>
            <li className={s.item}>
              Синхронный перевод с множества языков мира
            </li>
            <li className={s.item}>Перевод сайтов</li>
            <li className={s.item}>Литературный перевод книг</li>
          </ul>
        </div>
        <div className={s.wrapper}>
          <h3 className={s.title}>ЛИНГВИСТИЧЕСКИЕ УСЛУГИ</h3>
          <ul className={s.list}>
            <li className={s.item}>
              Составление CV, dossier, motivational & recommendation letter
            </li>
            <li className={s.item}>Выполнение заданий, связанных с языками</li>
            <li className={s.item}>Проекты, научные работы, исследования</li>
            <li className={s.item}>Выполнение тестов</li>
            <li className={s.item}>Рефераты, курсовые, магистерские</li>
          </ul>
        </div>
        <div className={s.wrapper}>
          <h3 className={s.title}>ПОДГОТОВКА</h3>
          <ul className={s.list}>
            <li className={s.item}>Экзамены</li>
            <li className={s.item}>Международные языковые сертификаты</li>
            <li className={s.item}>Обучение и практика за границей</li>
            <li className={s.item}>Поступление в иностранные ВУЗы</li>
            <li className={s.item}>Собеседование в посольстве и консульстве</li>
            <li className={s.item}>Получение гражданства</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
