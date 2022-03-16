import Container from 'components/Main/Container';
import logo from 'images/logo.svg';
import s from './Header.module.css';
import phone from 'images/phone.svg';

export default function Header() {
  return (
    <Container>
      <header className={s.header}>
        <img src={logo} alt="logo" />
        <nav className={s.nav}>
          <ul className={s.list}>
            <li>
              <a className={s.link} href="/">
                Услуги
              </a>
            </li>
            <li>
              <a className={s.link} href="/">
                Языки
              </a>
            </li>
            <li>
              <a className={s.link} href="/">
                Отзывы
              </a>
            </li>
            <li>
              <a className={s.link} href="/">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <a href="tel: +38" className={s.button}>
          <img className={s.image} src={phone} alt="phone" />
          Узнать цену
        </a>
      </header>
    </Container>
  );
}
