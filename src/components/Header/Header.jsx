import Container from 'components/Main/Container';
import logo from 'images/logo.svg';
import s from './Header.module.css';
// import phone from 'images/phone.svg';

export default function Header() {
  const handleClick = e => {
    e.preventDefault();

    const anchor = e.target.getAttribute('href');
    const el = document.getElementById(anchor);

    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <header className={s.header}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav className={s.nav}>
          <ul className={s.list}>
            <li>
              <a onClick={handleClick} className={s.link} href="services">
                Услуги
              </a>
            </li>
            <li>
              <a onClick={handleClick} className={s.link} href="languages">
                Языки
              </a>
            </li>
            <li>
              <a onClick={handleClick} className={s.link} href="reviews">
                Отзывы
              </a>
            </li>
            <li>
              <a onClick={handleClick} className={s.link} href="contacts">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <a href="/" className={s.button}>
          {/* <img className={s.image} src={phone} alt="phone" /> */}
          Узнать цену
        </a>
      </header>
    </Container>
  );
}
